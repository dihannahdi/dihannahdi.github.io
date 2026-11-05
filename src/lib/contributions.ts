// Reads the public contribution calendar at build time. The deploy workflow rebuilds daily,
// so the graph stays current without a token. If GitHub is unreachable the section is hidden.

export type Day = { date: string; level: number; count: number };
export type Calendar = {
  total: number;
  weeks: (Day | null)[][];
  months: { label: string; col: number }[];
  busiest: Day | null;
  activeDays: number;
  longestStreak: number;
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function attr(tag: string, name: string): string | undefined {
  return tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
}

export async function getCalendar(user: string): Promise<Calendar | null> {
  let html: string;
  try {
    const res = await fetch(`https://github.com/users/${user}/contributions`, {
      headers: { 'User-Agent': 'portfolio-site-build' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    html = await res.text();
  } catch (err) {
    console.warn(`[contributions] skipped: ${(err as Error).message}`);
    return null;
  }

  const counts = new Map<string, number>();
  for (const m of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const n = m[2].match(/^([\d,]+) contribution/);
    counts.set(m[1], n ? Number(n[1].replace(/,/g, '')) : 0);
  }

  const days: Day[] = [];
  for (const m of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
    const tag = m[0];
    const date = attr(tag, 'data-date')!;
    const id = attr(tag, 'id') ?? '';
    days.push({ date, level: Number(attr(tag, 'data-level') ?? 0), count: counts.get(id) ?? 0 });
  }
  if (days.length === 0) return null;
  days.sort((a, b) => a.date.localeCompare(b.date));

  const totalMatch = html.replace(/\s+/g, ' ').match(/([\d,]+) contributions? in the last year/);
  const total = totalMatch ? Number(totalMatch[1].replace(/,/g, '')) : days.reduce((s, d) => s + d.count, 0);

  // Columns are weeks starting on Sunday, as on GitHub.
  const first = new Date(days[0].date + 'T00:00:00Z').getUTCDay();
  const cells: (Day | null)[] = [...Array(first).fill(null), ...days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const months: { label: string; col: number }[] = [];
  weeks.forEach((week, col) => {
    const firstOfMonth = week.find((d) => d && d.date.endsWith('-01'));
    if (firstOfMonth) months.push({ label: MONTHS[Number(firstOfMonth.date.slice(5, 7)) - 1], col });
  });
  if (months.length && months[0].col > 1) months.unshift({ label: '', col: 0 });

  let busiest: Day | null = null;
  let streak = 0;
  let longestStreak = 0;
  for (const d of days) {
    if (!busiest || d.count > busiest.count) busiest = d;
    streak = d.count > 0 ? streak + 1 : 0;
    longestStreak = Math.max(longestStreak, streak);
  }

  return {
    total,
    weeks,
    months,
    busiest,
    activeDays: days.filter((d) => d.count > 0).length,
    longestStreak,
  };
}
