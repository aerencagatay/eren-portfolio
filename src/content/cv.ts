/* ════════════════════════════════════════════════════════════
   Single source of truth for every piece of CV content on the
   site. Every section reads from here, so a fact only ever
   needs changing in one place.
   ════════════════════════════════════════════════════════════ */

export const siteUrl = "https://aerencagatay.github.io/eren-portfolio";

/* ─── Profile ─── */
export const profile = {
  firstName: "Ahmet Eren",
  lastName: "Çağatay",
  fullName: "Ahmet Eren Çağatay",
  shortName: "Eren",
  initials: "AEC",
  role: "Software Engineer",
  location: "İstanbul, Türkiye",
  email: "ahmetern.cagatay@gmail.com",
  phone: "+90 538 048 04 28",
  phoneHref: "tel:+905380480428",
  linkedin: "https://linkedin.com/in/ahmet-eren-%C3%A7-04b382230",
  linkedinLabel: "Ahmet Eren Çağatay",
  github: "https://github.com/aerencagatay",
  githubLabel: "aerencagatay",
  photo: "/profile.jpg",
  tagline:
    "Software engineer in financial technology. I build the data-intensive, business-critical systems capital markets run on.",
  summary: [
    "Software engineer with over two years of experience in financial technology, holding a B.S. in Computer Science Engineering and a Minor in Finance from Sabancı University. I build data-intensive, business-critical software inside a capital-markets environment — backend services, stored procedures, data-processing components, and system integrations.",
    "My background spans Python, SQL, machine learning, anomaly detection, deep learning, and backend development. I am drawn to problems where software engineering, financial domain knowledge, and quantitative modelling meet, turning complex market data into systems people can rely on.",
  ],
  focusAreas: [
    "Fintech",
    "Backend Engineering",
    "Machine Learning",
    "Capital Markets",
  ],
};

/* ─── Professional experience ─── */
export interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
}

export const experience: Role[] = [
  {
    company: "ATP Tradesoft",
    title: "Software Engineer",
    location: "İstanbul, Türkiye",
    period: "March 2024 — Present",
    current: true,
    bullets: [
      "Develop and maintain software systems used within a fast-paced financial technology and capital-markets environment.",
      "Work with financial data structures, market data, database-driven applications, and business-critical financial workflows.",
      "Develop backend services, stored procedures, data-processing components, and system integrations.",
      "Translate financial and operational requirements into reliable and scalable software solutions.",
      "Collaborate with software, database, infrastructure, product, and business teams throughout the development lifecycle.",
      "Contribute to compliance-sensitive systems where data accuracy, reliability, and performance are essential.",
      "Investigate production issues, analyze data flows, and implement improvements to system stability and maintainability.",
    ],
    tech: [
      "C#",
      ".NET",
      "SQL",
      "Stored Procedures",
      "System Integration",
      "Market Data",
    ],
  },
  {
    company: "Turkish Aerospace Industries",
    title: "Machine Learning Intern",
    location: "Ankara, Türkiye",
    period: "July 2023 — August 2023",
    bullets: [
      "Developed machine-learning models for anomaly detection in large-scale datasets.",
      "Explored reinforcement-learning-based approaches using Python, PyCharm, and JupyterLab.",
      "Processed and analyzed complex datasets to identify significant patterns and abnormal observations.",
      "Evaluated model outputs and gained practical experience in experimental machine-learning workflows.",
    ],
    tech: [
      "Python",
      "Anomaly Detection",
      "Reinforcement Learning",
      "JupyterLab",
    ],
  },
];

/* ─── Selected projects ─── */
export interface Project {
  title: string;
  badge: string;
  period?: string;
  bullets: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Car Price Prediction and Market Anomaly Detection System",
    badge: "Graduation Project",
    period: "Feb 2023 — Jan 2024",
    bullets: [
      "Built an end-to-end used-car price prediction system using a deep neural network.",
      "Applied NLP-based feature engineering to extract information from unstructured Turkish vehicle descriptions.",
      "Developed a model to estimate fair market values and detect potentially underpriced or overpriced listings.",
      "Deployed the system through a real-time Twitter bot to make model outputs accessible to individual users.",
      "Combined data collection, preprocessing, predictive modeling, model evaluation, and application deployment in a single pipeline.",
    ],
    tech: ["Python", "PyTorch", "Deep Learning", "NLP", "Twitter API"],
  },
  {
    title: "Supply Chain Optimization and Document Processing",
    badge: "EnGenius'24 — 2nd Place",
    bullets: [
      "Developed an anomaly-detection algorithm and heuristic optimization solution for supply-chain operations.",
      "Designed an approach aimed at reducing logistics costs and environmental impact.",
      "Built a model to extract and process unstructured information from PDF documents and emails.",
      "Integrated processed data with an order-management workflow.",
    ],
    tech: [
      "Python",
      "Anomaly Detection",
      "Heuristic Optimization",
      "NLP",
      "Document Parsing",
    ],
  },
];

/* ─── Technical skills ─── */
export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Programming",
    items: ["Python", "C++", "Java", "C#", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks & Technologies",
    items: [
      "PyTorch",
      ".NET",
      "Node.js",
      "React",
      "Next.js",
      "MySQL",
      "JupyterLab",
    ],
  },
  {
    label: "Machine Learning",
    items: [
      "Deep Learning",
      "Anomaly Detection",
      "NLP Feature Engineering",
      "Reinforcement Learning",
      "Predictive Modeling",
    ],
  },
  {
    label: "Software Engineering",
    items: [
      "Backend Development",
      "Database Programming",
      "Stored Procedures",
      "System Integration",
      "Data Processing",
    ],
  },
  {
    label: "Financial Domain",
    items: [
      "Financial Markets",
      "Financial Data Structures",
      "Capital-Markets Technology",
      "Compliance-Sensitive Software",
    ],
  },
];

/* ─── Achievements ─── */
export interface Achievement {
  metric: string;
  title: string;
  detail: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    metric: "623rd",
    title: "University Entrance Examination",
    detail:
      "Ranked 623rd among approximately 2 million candidates nationwide in Türkiye.",
    year: "2020",
  },
  {
    metric: "2nd",
    title: "EnGenius'24 AI Competition",
    detail:
      "Placed second with a supply-chain optimization and document-processing solution.",
    year: "2024",
  },
  {
    metric: "100%",
    title: "Merit Scholarship",
    detail:
      "Full tuition scholarship for the B.S. programme at Sabancı University.",
    year: "2020",
  },
];

/* ─── Education ─── */
export interface School {
  name: string;
  degree: string;
  location: string;
  period: string;
  notes: string[];
}

export const education: School[] = [
  {
    name: "Sabancı University",
    degree: "B.S. in Computer Science Engineering, Minor in Finance",
    location: "İstanbul, Türkiye",
    period: "September 2020 — June 2025",
    notes: ["GPA 3.00 / 4.00", "Full (100%) merit scholarship"],
  },
  {
    name: "Sakıp Sabancı Anatolian High School",
    degree: "High School Diploma",
    location: "İstanbul, Türkiye",
    period: "September 2015 — June 2019",
    notes: ["Graduation grade 90 / 100"],
  },
];

export const selectedAreasOfStudy = [
  "Finance",
  "Financial Markets",
  "Machine Learning",
  "Data Analysis",
  "Algorithms",
  "Statistics",
  "Database Systems",
  "Software Engineering",
];

export const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Advanced — IELTS 7.5" },
];

/* ─── Volunteering ─── */
export interface Volunteering {
  title: string;
  role: string;
  period: string;
  bullets: string[];
}

export const volunteering: Volunteering[] = [
  {
    title: "Civic Involvement Projects",
    role: "Project Leader",
    period: "February 2023 — June 2025",
    bullets: [
      "Led university students in social-impact projects related to disability rights, elderly care, environmental health, and equal access.",
      "Coordinated project activities and guided teams working with children from disadvantaged backgrounds.",
    ],
  },
];

/* ─── Navigation ─── */
/* `id` must match the corresponding <section id> on the home page. */
export const navSections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
] as const;
