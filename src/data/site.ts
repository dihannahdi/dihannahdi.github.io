// All copy and numbers on the site live here.
// Rule: every claim carries a number, and every number comes from a CV line or a production query.
// Tech items: a simple-icons slug ("rust") or a plain label ("Azure OpenAI").

export type Metric = { v: string; l: string };
export type Project = {
  id: string;
  title: string;
  org: string;
  context: string;
  year: string;
  url?: string;
  summary: string;
  fit?: string;
  metrics: Metric[];
  tech: string[];
  note?: string;
};

export const profile = {
  name: 'Farid Dihan Nahdi',
  short: 'Dihan Nahdi',
  role: 'AI Engineer',
  location: 'Yogyakarta, Indonesia',
  email: 'dihannahdii@gmail.com',
  github: 'dihannahdi',
  linkedin: 'https://www.linkedin.com/in/nahdi',
  lede: 'I build AI products that businesses can rely on, and I prove they work with numbers before they ship.',
  bio: [
    'I work with two UK startups and three Indonesian companies, in regulated home care, marketing SaaS, solar energy, education and agriculture.',
    'Most of my work is the part that decides whether an AI product earns trust: measuring its answers against human experts, catching what models and reviewers miss, and running the production systems around it. I study at Universitas Gadjah Mada and graduate in 2027.',
  ],
  orgs: [
    { login: 'Care-Copilot', label: 'Care Copilot' },
    { login: 'solarnusantara', label: 'Solar Nusantara' },
    { login: 'trendJack-LTD', label: 'trendJack' },
  ],
};

export const headline: Metric[] = [
  { v: '5', l: 'companies I ship for, in the UK and Indonesia' },
  { v: '34', l: 'staff run purchasing and accounting on an ERP I wrote' },
  { v: '62% → 9%', l: 'fabricated findings in an AI audit engine I built' },
];

export const featured: Project[] = [
  {
    id: 'care-copilot',
    title: 'An AI compliance auditor that has to show its evidence',
    org: 'Care Copilot',
    context: 'UK · regulated home care',
    year: '2026',
    url: 'https://carecopilot.uk',
    summary:
      'UK home-care agencies are inspected against Care Quality Commission standards. The engine reads a provider’s records and rates them the way an inspector would, but it throws out any finding whose quoted evidence is not in the records, and it votes across repeated runs so one lucky run cannot pass.',
    fit: 'For teams putting AI in front of regulators, auditors or clinicians.',
    metrics: [
      { v: '62% → 9%', l: 'fabricated findings, measured against a human auditor' },
      { v: '2×', l: 'agreement with the human auditor (8/25 → 16/25)' },
      { v: '~627', l: 'medication visits saved from a wrong “compliant” flag before release' },
    ],
    tech: ['python', 'Azure OpenAI', 'fastapi'],
  },
  {
    id: 'sonus-erp',
    title: 'The ERP a 34-person solar company runs on',
    org: 'PT Tripower Solar Nusantara (SONUS)',
    context: 'Indonesia · solar EPC',
    year: '2026',
    summary:
      'Purchasing, budgets, double-entry accounting and project tracking in one system, replacing chat threads and spreadsheets. Supplier quotes are compared automatically, and over-budget payments or bank-detail changes need a second person’s approval.',
    fit: 'For companies whose money still moves through WhatsApp and Excel.',
    metrics: [
      { v: '34', l: 'staff in 6 divisions use it every day' },
      { v: '23,356', l: 'material price records from 157 suppliers' },
      { v: '17,727×', l: 'currency error found and fixed (US dollars stored as rupiah)' },
    ],
    tech: ['rust', 'Axum', 'postgresql', 'docker', 'githubactions'],
  },
  {
    id: 'solar-studio',
    title: 'Rooftop-solar feasibility studies without an expensive licence',
    org: 'Sonus Solar Studio',
    context: 'Indonesia · renewable energy',
    year: '2026',
    url: 'https://studio.sonus.id',
    summary:
      'Engineers lay out panels on a map, simulate every hour of the year, and get a payback case with PLN export rules and local-content (TKDN) requirements applied automatically, instead of paying for a desktop licence per engineer.',
    fit: 'For energy companies that sell on the strength of a feasibility study.',
    metrics: [
      { v: '11', l: 'customer pre-orders' },
      { v: '8,760', l: 'hours simulated per site, per year' },
      { v: '0.01°', l: 'sun-position match to the pvlib reference on 7 sites' },
    ],
    tech: ['rust', 'astro', 'postgresql'],
  },
  {
    id: 'trendjack',
    title: 'An AI marketing SaaS that customers can finally sign up to and publish from',
    org: 'trendJack',
    context: 'UK · marketing SaaS',
    year: '2026',
    url: 'https://app.trendjack.io',
    summary:
      'trendJack drafts social posts from each day’s industry news. No new customer could finish onboarding, and most workspaces had never published. I moved payment ahead of setup, let solo users approve their own drafts, and capped AI spend per workspace.',
    fit: 'For SaaS teams whose product works in a demo but not for paying customers.',
    metrics: [
      { v: '9 of 11', l: 'production workspaces unblocked to publish' },
      { v: '~$0.22', l: 'AI cost per news sweep, capped at 5 per workspace a day' },
      { v: '0 → 441', l: 'tests actually running, now on every pull request' },
    ],
    tech: ['typescript', 'nextdotjs', 'supabase', 'stripe', 'githubactions'],
  },
  {
    id: 'kidiko',
    title: 'A WhatsApp assistant for teachers of children with special needs',
    org: 'Kidiko · INOVASI programme',
    context: 'Indonesia · inclusive education',
    year: '2026',
    url: 'https://kidiko.id/jejoo/',
    summary:
      'Teachers in ordinary schools rarely have a special-needs expert nearby, so their questions waited for days. The assistant answers inside the WhatsApp groups they already use, moves sensitive questions to a private chat, and refers every case to a human expert.',
    fit: 'For programmes that need to reach people where they already talk.',
    metrics: [
      { v: '142', l: 'teacher questions answered' },
      { v: '27', l: 'teachers across 2 district governments' },
      { v: '11.4 s', l: 'median reply time' },
    ],
    tech: ['whatsapp', 'astro'],
  },
  {
    id: 'commerce',
    title: 'Three online shops, one system',
    org: 'AESI · KIW · Sonushub',
    context: 'Indonesia · digital commerce',
    year: '2026',
    url: 'https://ecommerce.aesi.or.id',
    summary:
      'Three shops ran on separate systems and four databases, so every product was entered again and again. One platform now serves all three, each with its own look and domain, and a product entered once appears in every shop.',
    fit: 'For groups running several brands on duplicated systems.',
    metrics: [
      { v: '10,344', l: 'products migrated automatically' },
      { v: '4 → 1', l: 'databases' },
      { v: '2', l: 'legacy shop systems retired' },
    ],
    tech: ['rust', 'astro', 'react', 'postgresql'],
  },
];

export const more: Project[] = [
  {
    id: 'slowliv',
    title: 'PLN retirees open a business from their phone',
    org: 'Slowliv · PLN Pusdiklat',
    context: 'Retiree empowerment',
    year: '2026',
    url: 'https://slowliv.com',
    summary:
      'Business classes, a verified shop of their own, and settlements where the preparer and the approver are always different people.',
    metrics: [
      { v: '40', l: 'PLN retirees signed up, 39 verified by employee ID' },
      { v: '18', l: 'active shops' },
      { v: '62', l: 'products approved and live' },
    ],
    tech: ['astro', 'typescript', 'postgresql'],
  },
  {
    id: 'gladys',
    title: 'Exam prep at a fraction of a tutoring centre’s price',
    org: 'Gladys',
    context: 'University-entrance prep',
    year: '2026',
    url: 'https://gladys.id',
    summary:
      'An AI tutor and adaptive try-outs, with a safety floor that still catches self-harm signals when the AI classifier fails.',
    metrics: [
      { v: '90,859', l: 'questions in the bank' },
      { v: '85,423', l: 'with a full written explanation' },
      { v: 'Rp36k', l: 'per student per month' },
    ],
    tech: ['rust', 'astro', 'postgresql'],
  },
  {
    id: 'cbi',
    title: 'An SEO engine for an agricultural biotech company',
    org: 'Centra Biotech Indonesia',
    context: 'Agricultural biotech',
    year: '2026',
    url: 'https://www.centrabiotechindonesia.com',
    summary:
      'An AI pipeline that writes, publishes and indexes articles, so farmers searching for a problem find the company’s products.',
    metrics: [
      { v: '1,000', l: 'articles published' },
      { v: '27,514', l: 'search impressions in the first month' },
    ],
    tech: ['nextdotjs', 'strapi', 'deepseek', 'googlesearchconsole'],
  },
  {
    id: 'beasiswa',
    title: 'A national scholarship platform for PLN',
    org: 'Beasiswa Generasi Terang',
    context: 'Education · state energy company',
    year: '2026',
    url: 'https://beasiswa.indonesia-terang.id',
    summary:
      'Applications, essay scoring, fraud checks, staff review and disbursement in one place, with frontier (3T) regions flagged so they are not missed.',
    metrics: [
      { v: '425', l: 'campuses covered' },
      { v: '514', l: 'districts across 38 provinces' },
      { v: '22', l: 'PLN units' },
    ],
    tech: ['rust', 'astro', 'postgresql'],
  },
  {
    id: 'syamss',
    title: 'A hijab brand’s shop and books in one place',
    org: 'SYAMSS',
    context: 'Fashion retail',
    year: '2026',
    url: 'https://syamss.id',
    summary:
      'Pre-order checkout that hands off to WhatsApp, an admin panel, and double-entry bookkeeping that knows the cost of every piece sold.',
    metrics: [
      { v: '27', l: 'orders completed, Aug–Oct 2026' },
      { v: 'Rp2.66M', l: 'in completed orders' },
      { v: '41', l: 'pieces delivered' },
    ],
    tech: ['rust', 'astro', 'postgresql'],
  },
  {
    id: 'jbcircle',
    title: 'An alumni network that turns reunions into opportunities',
    org: 'JB Circle',
    context: 'Alumni community',
    year: '2026',
    url: 'https://kdb.sonus.id',
    summary:
      'Verified alumni find old classmates, join circles by year, city or interest, and post what they can offer and what they need.',
    metrics: [
      { v: '27', l: 'alumni verified in the pilot' },
      { v: '13', l: 'circles' },
      { v: '21', l: 'offers and requests posted' },
    ],
    tech: ['astro', 'postgresql'],
  },
  {
    id: 'gigple',
    title: 'AI career tools for a freelancer marketplace',
    org: 'Gigple · Plaza Tech',
    context: 'Freelance marketplace',
    year: '2026',
    summary:
      'Interview-question generation, CV review and skill-gap analysis, added to a marketplace with years of real profiles.',
    metrics: [
      { v: '7,792', l: 'freelancers on the platform' },
      { v: '3', l: 'AI features shipped' },
      { v: '8,027', l: 'skill records analysed' },
    ],
    tech: ['laravel', 'livewire', 'mariadb', 'deepseek'],
  },
  {
    id: 'winus',
    title: 'The whole liquid market checked before the opening bell',
    org: 'Winus Finance',
    context: 'Capital-market research',
    year: '2026',
    url: 'https://winus.finance',
    summary:
      'Every trading morning the engine scans Indonesia’s liquid stocks and writes down the evidence behind each judgement, so analysts start from a short list.',
    metrics: [
      { v: '~200', l: 'stocks checked every morning' },
      { v: '2 s', l: 'median time to scan them all' },
      { v: '1.5M', l: 'daily price rows maintained' },
    ],
    tech: ['rust', 'postgresql'],
  },
  {
    id: 'lightplus',
    title: 'Light+ Crew Hub: a campus-ambassador rewards system',
    org: 'Light+ case competition',
    context: 'Beauty brand · finalist',
    year: '2026',
    url: 'https://lightplus-crew.vercel.app',
    summary:
      'QR booths, points and rewards for a brand ambassador programme, deployed live for the final so judges could scan and redeem on the spot.',
    metrics: [
      { v: 'Finalist', l: 'case competition, 2026' },
      { v: '1,000', l: 'members in the simulated programme' },
      { v: 'Rp1.40B', l: 'budget built inside a Rp1.41B ceiling' },
    ],
    tech: ['rust', 'astro', 'postgresql', 'vercel'],
    note: 'Programme numbers are a simulation built for the pitch.',
  },
];

export const experience = [
  {
    org: 'Care Copilot',
    role: 'Software Engineer Intern',
    when: 'Apr 2026 – now',
    where: 'Remote, UK',
    line: 'LLM compliance audits for CQC-regulated home care: fabricated findings 62% → 9%.',
  },
  {
    org: 'trendJack',
    role: 'Software Engineer',
    when: 'Sep 2026 – now',
    where: 'Remote, UK',
    line: 'AI marketing SaaS: reopened sign-up, unblocked publishing for 9 of 11 workspaces.',
  },
  {
    org: 'PT Tripower Solar Nusantara (SONUS)',
    role: 'Software Engineer Intern',
    when: 'May 2026 – now',
    where: 'Yogyakarta',
    line: 'Primary author of the company ERP (34 staff) and Sonus Solar Studio (11 pre-orders).',
  },
  {
    org: 'Gladys',
    role: 'Software Engineer Intern',
    when: 'Jun 2026 – now',
    where: 'Yogyakarta',
    line: 'AI tutor in Rust over a 90,859-question bank, with a self-harm safety floor.',
  },
  {
    org: 'Centra Biotech Indonesia',
    role: 'Software Engineer Intern',
    when: 'Dec 2025 – now',
    where: 'Yogyakarta',
    line: 'AI content pipeline: 1,000 articles, 27,514 impressions in month one.',
  },
];

export const research = [
  {
    title: 'Kizana: cross-lingual search over classical Arabic books',
    venue: 'Submitted · Information Processing & Management (Elsevier, Q1)',
    summary: 'Indonesian questions answered from 7,872 classical Arabic books (20 GB), in Rust and Tantivy.',
    metrics: [
      { v: '0.790', l: 'MAP on 96 gold-standard queries' },
      { v: '0.593', l: 'NDCG@10' },
      { v: 'κ 0.793', l: 'inter-annotator agreement' },
    ],
  },
  {
    title: 'HighPy: an automatic optimizer for Python programs',
    venue: 'Submitted · Journal of Systems and Software (Elsevier)',
    summary: 'Purity analysis and safe memoization over the AST, with a formal convergence proof.',
    metrics: [{ v: '6.76×', l: 'geometric-mean speedup' }],
  },
  {
    title: 'Deducible: a contract compiler that refuses to break sharia',
    venue: 'Under review',
    url: 'https://deducible.tech',
    summary: 'Islamic-finance contracts are checked before they exist, and every refusal comes with a reason.',
    metrics: [
      { v: '8', l: 'compliance gates proven in code' },
      { v: '15', l: 'rescission tests passed' },
    ],
  },
  {
    title: 'CPCL: rescuing farmer-group locations from government PDFs',
    venue: 'Applied project',
    summary: 'Corrupted GPS coordinates repaired and farmer groups mapped across 8 regencies.',
    metrics: [{ v: '98.8%', l: 'coordinates recovered (2,099 of 2,124)' }],
  },
];

export const achievements = [
  { year: '2026', title: 'Finalist, Light+ case competition', detail: 'Built and deployed the live rewards system judged in the final.' },
  { year: '2026', title: 'Pilmapres (Outstanding Student) nominee', detail: 'Universitas Gadjah Mada.' },
  { year: '2026', title: '2 papers under review at Elsevier journals', detail: 'Kizana (Information Processing & Management, Q1) and HighPy (Journal of Systems and Software).' },
  { year: '2025', title: 'Technical lead, KKN-PPM UGM Raja Ampat', detail: 'Led the technology work of the university’s community-service team in Raja Ampat.' },
];
