// All copy and data for the site. Edit here, not in components.

export const GITHUB = "https://github.com/Manish-S-P";
export const LINKEDIN = "https://www.linkedin.com/in/manish-s-p-99505b1a7/";
export const EMAIL = "manishslg759@gmail.com";
// Lives at public/resume.pdf
export const RESUME = "/resume.pdf";

export const ROLES = [
  "software engineer",
  "full-stack developer",
  "frontend developer",
  "backend developer",
  "student of AI & LLMs",
  "Yakshagana artist",
];

export const NAV = [
  { label: "About", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Work", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export const MARQUEE = ["SOFTWARE ENGINEER", "FULL-STACK", "FRONTEND", "BACKEND", "AI / ML", "LLMS", "OPEN TO WORK"];

export const FACTS = [
  { k: "Studying", v: "B.Tech CSE, DSU" },
  { k: "CGPA", v: "8.81" },
  { k: "Graduating", v: "2027" },
  { k: "Based in", v: "Bengaluru" },
];

export const ROUTE = [
  { n: "1", when: "2023", k: "Dayananda Sagar University", v: "B.Tech CSE" },
  { n: "2", when: "2024", k: "IITM Pravartak", v: "Data annotator intern" },
  { n: "3", when: "2026", k: "Springer published", v: "Co-authored paper, IDBA 2026" },
  { n: "4", when: "Present", k: "Your team", v: "Ready to join. Let’s talk." },
];

export type Link = { k: string; href: string };

export type Project = {
  slug: string;
  n: string;
  year: string;
  crew: string;
  name: string;
  /** Placeholder label shown in the hover preview until `image` is set. */
  shot: string;
  /** Path under /public, e.g. "/shots/registry.png". */
  image?: string;
  bg: string;
  fg: string;
  blurb: string;
  stack: string[];
  proofs: Link[];
};

// TODO: real repo URLs and the Springer paper URL
export const PROJECTS: Project[] = [
  {
    slug: "blue-carbon-registry",
    n: "01",
    year: "2025",
    crew: "Group project",
    name: "Blue Carbon Registry",
    shot: "registry dashboard screenshot",
    bg: "#C8232C",
    fg: "#FFF3D6",
    blurb:
      "A blockchain registry and MRV system issuing tamper-proof carbon credits for blue carbon restoration, across four independently hosted services.",
    stack: ["Solidity", "React", "FastAPI", "Node.js", "Earth Engine"],
    proofs: [
      { k: "Repo", href: GITHUB },
      { k: "Paper", href: "#" },
    ],
  },
  {
    slug: "stashit",
    n: "02",
    year: "2026",
    crew: "Solo · in progress",
    name: "StashIt",
    shot: "stashit screenshot",
    bg: "#FFF3D6",
    fg: "#1B1512",
    blurb:
      "Secure file sharing on a Java and Spring Boot REST backend, with scheduled expiry, per-upload size limits and BCrypt credentials.",
    stack: ["Java", "Spring Boot", "React"],
    proofs: [{ k: "Repo", href: GITHUB }],
  },
];

export type CaseStudy = {
  title: string;
  year: string;
  sub: string;
  meta: { k: string; v: string }[];
  body: { k: string; v: string }[];
  proofs: Link[];
  next: string;
};

// TODO: Springer paper URL and contract explorer URL
export const CASES: Record<string, CaseStudy> = {
  "blue-carbon-registry": {
    title: "Blue Carbon Registry",
    year: "2025",
    sub: "A blockchain-based registry and MRV system issuing verifiable carbon credits for blue carbon ecosystem restoration.",
    meta: [
      { k: "Role", v: "Architecture & full-stack" },
      { k: "Team", v: "Group project" },
      { k: "Chain", v: "Polygon Amoy" },
      { k: "Published", v: "Springer, IDBA 2026" },
    ],
    body: [
      {
        k: "Architecture",
        v: "Architected and deployed the platform across four independently hosted services (frontend, ML pipeline, Node.js API, smart contracts), applying separation-of-concerns and modular design patterns while documenting the system architecture.",
      },
      {
        k: "Smart contracts",
        v: "Designed and deployed ERC-721 smart contracts in Solidity on the Polygon Amoy Testnet to issue verifiable, tamper-proof carbon credit tokens for blue carbon ecosystem restoration projects.",
      },
      {
        k: "MRV pipeline",
        v: "Built a full-stack MRV pipeline (React/Vite frontend, FastAPI + Node.js backend) automating carbon-credit validation through REST-based inter-process communication between services.",
      },
      {
        k: "ML pipeline",
        v: "Developed a Google Earth Engine ML pipeline with a custom centroid classifier to estimate carbon sequestration from satellite data, feeding results on-chain for credit issuance. Co-authored the research paper, published at Springer (IDBA 2026).",
      },
    ],
    proofs: [
      { k: "Repository", href: GITHUB },
      { k: "Springer paper", href: "#" },
      { k: "Contract on explorer", href: "#" },
    ],
    next: "stashit",
  },
  stashit: {
    title: "StashIt",
    year: "2026",
    sub: "A secure file-sharing platform with automated expiry, built on a Java and Spring Boot REST backend.",
    meta: [
      { k: "Role", v: "Backend & frontend" },
      { k: "Status", v: "In progress" },
      { k: "Stack", v: "Java, Spring Boot, React" },
      { k: "Security", v: "BCrypt" },
    ],
    body: [
      {
        k: "Backend",
        v: "Designing and building a Java/Spring Boot REST backend with a React frontend, applying OOP principles and clean class design for space and file management.",
      },
      {
        k: "File expiry",
        v: "Implementing a scheduled background job to automate file expiry and cleanup, handling concurrent access safely.",
      },
      {
        k: "Security",
        v: "Enforcing configurable per-upload size limits and BCrypt-based credential security, following standard coding and quality practices.",
      },
    ],
    proofs: [{ k: "Repository", href: GITHUB }],
    next: "blue-carbon-registry",
  },
};

export const EXPERIENCE = {
  tag: "Internship",
  org: "IITM Pravartak Technologies Foundation",
  role: "Data Annotator Intern · Oct 2024 – Apr 2025 · Remote",
  bullets: [
    "Verified and corrected text extracted from Supreme Court legal documents by cross-referencing original PDFs with structured datasets for NLP model training pipelines.",
    "Corrected audio transcription errors by reviewing recordings and validating corresponding transcripts for speech-to-text training data.",
    "Maintained data integrity across large annotation batches, improving dataset reliability for downstream machine-learning tasks.",
  ],
};

export const SKILLS = [
  { k: "Languages", items: ["Java", "Python", "JavaScript", "HTML", "CSS"] },
  { k: "Frameworks", items: ["React.js", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"] },
  { k: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { k: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "Unit testing"] },
  { k: "Learning", items: ["AI / ML", "LLMs", "Forward deployed engineering"] },
];

export type Interest = { icon: string | "skull"; v: string; note: string; bg: string; fg: string; rot: number };

export const INTERESTS: Interest[] = [
  { icon: "🎭", v: "Yakshagana", note: "Traditional theatre from coastal Karnataka. Dance, live music and improvised dialogue, all night long.", bg: "#C8232C", fg: "#FFF3D6", rot: -2 },
  { icon: "skull", v: "Anime", note: "One Piece above everything else. It’s where this site gets its red and yellow.", bg: "#FFF3D6", fg: "#1B1512", rot: 1.5 },
  { icon: "🎮", v: "Games", note: "Long single-player games, and reading about how they were made.", bg: "#1B1512", fg: "#FFF3D6", rot: -1 },
  { icon: "📖", v: "Manga, manhwa & webnovels", note: "Always a few chapters into something.", bg: "#FFF3D6", fg: "#1B1512", rot: 1 },
  { icon: "✏️", v: "Trying to draw", note: "Still practising, and slowly getting better.", bg: "#C8232C", fg: "#FFF3D6", rot: -1.5 },
  { icon: "🧠", v: "Learning new skills", note: "Picking up something new and trying to get a little smarter every week.", bg: "#1B1512", fg: "#FFF3D6", rot: 2 },
];

export const CONTACT_LINKS: Link[] = [
  { k: "GitHub", href: GITHUB },
  { k: "LinkedIn", href: LINKEDIN },
  { k: "Résumé", href: RESUME },
];
