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
      "No-signup file sharing behind a title and a password. Files travel straight from the browser to Cloudflare R2 and delete themselves when the stash expires.",
    stack: ["React", "FastAPI", "MongoDB", "Cloudflare R2", "Docker"],
    proofs: [{ k: "Repo", href: GITHUB }],
  },
];

export type Decision = { k: string; chose: string; over: string; why: string };

/** Every field after `k` is optional and renders in this order. */
export type CaseSection = {
  k: string;
  v?: string;
  /** Path under /public plus its intrinsic size. */
  image?: { src: string; alt: string; width: number; height: number };
  points?: { k?: string; v: string }[];
  numbered?: boolean;
  decisions?: Decision[];
  outro?: string;
};

export type CaseStudy = {
  title: string;
  year: string;
  sub: string;
  meta: { k: string; v: string }[];
  body: CaseSection[];
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
  // TODO: Results section (real numbers only), screenshots and live site link after launch
  stashit: {
    title: "StashIt",
    year: "2026",
    sub: "Password-protected file sharing with no sign-up. Pick a title and a password, drop in up to 100 MB of files, and anyone who knows both can open the stash until it expires.",
    meta: [
      { k: "Role", v: "Solo: design, backend, frontend, deploy" },
      { k: "Stack", v: "React, FastAPI, MongoDB, Cloudflare R2, Docker" },
      { k: "Type", v: "Full-stack web app" },
      { k: "Status", v: "v1 in development" },
    ],
    body: [
      {
        k: "The problem",
        v: "Getting a file onto a device you don’t own usually means signing in somewhere you’d rather stay out of. As a student I hit this constantly: a college lab PC, a friend’s laptop, the computer at a print shop. Every usual route carries a cost.",
        points: [
          { v: "Email and Google Drive ask you to sign in on a shared machine and remember to sign out." },
          { v: "WhatsApp Web asks you to scan a QR code with your phone on someone else’s computer." },
          { v: "Pen drives get lost, carry viruses and are banned in some labs." },
          { v: "Public upload sites hand you long random links that are painful to type on another device." },
        ],
        outro:
          "dontpad already solves this for text: type a name and a shared page appears, no account needed. StashIt brings that idea to files and puts a password in front of them.",
      },
      {
        k: "Goals",
        numbered: true,
        points: [
          { v: "Share files by remembering two things: a title and a password." },
          { v: "Skip accounts and sign-up entirely, on any browser." },
          { v: "Delete files automatically, so nothing sensitive lingers." },
          { v: "Hold up on the public internet as a real, deployed product." },
        ],
      },
      {
        k: "Constraints",
        points: [
          { v: "One developer on a student budget, so hosting has to stay cheap." },
          { v: "An anonymous public upload site invites abuse and password guessing, so security shaped the design from the first line of code." },
          { v: "Uploads of up to 100 MB must leave the backend fast and stable." },
        ],
      },
      {
        k: "The solution",
        v: "The whole flow lives in one form: enter a title and a password, then create or open a stash.",
        numbered: true,
        points: [
          { k: "Create", v: "Pick a unique title and a password. A taken title gets flagged right away." },
          { k: "Fill", v: "Drag in files up to 100 MB in total, choose a lifetime from 1 hour to 7 days, and optionally switch on burn after read." },
          { k: "Share", v: "Tell the other person the title and password, or type them yourself on another device." },
          { k: "Open", v: "Anyone with the credentials can download, add or delete files and extend the expiry." },
          { k: "Disappear", v: "Everything is deleted when the timer runs out, or right after the first download for a burn stash." },
        ],
      },
      {
        k: "Architecture",
        image: { src: "/stashit-architecture.svg", alt: "StashIt system architecture: the browser sends JSON to a FastAPI backend and uploads file bytes directly to Cloudflare R2", width: 760, height: 448 },
        v: "The browser sends small JSON requests to the FastAPI backend, which checks rate limits, verifies the password and returns presigned URLs. File bytes then travel straight between the browser and Cloudflare R2. MongoDB keeps one document per stash, and a scheduled cleanup job clears expired files out of R2.",
      },
      {
        k: "Key design decisions",
        decisions: [
          { k: "Where files live", chose: "Object storage on Cloudflare R2", over: "Server disk or the database", why: "Scales without filling the server and charges no egress fees, which suits a download-heavy app." },
          { k: "How files move", chose: "Presigned URLs, browser to R2 directly", over: "Uploading through the backend", why: "The API handles only small JSON, so it stays fast and cheap to run." },
          { k: "Database", chose: "MongoDB, one document per stash", over: "A relational schema", why: "A stash and its files are read and written together, and a TTL index handles expiry natively." },
          { k: "Backend", chose: "FastAPI", over: "Spring Boot, Express", why: "Async I/O, built-in request validation and auto-generated API docs." },
          { k: "Title identity", chose: "Unique titles for v1", over: "Title + password as a combined key", why: "Simpler to build and to explain. The combined key is planned for v2." },
          { k: "Password storage", chose: "Argon2 hashes", over: "Plain text or fast hashes like SHA-256", why: "Deliberately slow to compute, which makes a leaked database expensive to crack." },
          { k: "Sessions", chose: "Short-lived token scoped to one stash", over: "Sending the password on every request", why: "The password crosses the network once per visit." },
        ],
      },
      {
        k: "Technical challenges",
        numbered: true,
        points: [
          {
            k: "Enforcing 100 MB when files skip the backend",
            v: "Uploads go straight to R2, so the API has no request body to measure. A three-point check covers it: space is reserved atomically before upload, the presigned URL rejects anything larger than declared, and the real size is verified afterwards. Unconfirmed reservations are released.",
          },
          {
            k: "Expiring data in two places",
            v: "MongoDB’s TTL index deletes stash documents on its own, with up to a minute of lag, and it has no view of R2. Every request also checks expires_at, a scheduled job deletes expired files, and an R2 lifecycle rule acts as a safety net.",
          },
          {
            k: "Race conditions in shared editing",
            v: "Two visitors can upload or delete at the same moment. MongoDB’s atomic operators ($push, $pull, and $inc with a conditional filter) change the file list and size counter in a single step, which keeps both correct under concurrent writes.",
          },
          {
            k: "Burn after read with a working download",
            v: "The first download atomically marks the stash as consumed. That locks everyone else out and gives the downloader a 10-minute window to finish before the files are deleted.",
          },
          {
            k: "Brute-force guessing on an anonymous site",
            v: "Passwords are hashed with Argon2, and attempts are rate-limited per stash and per IP, with a cooldown after 5 failed tries.",
          },
        ],
      },
      {
        k: "What I learned",
        points: [
          { v: "Design the data flow before writing code. Deciding where bytes travel shaped the whole architecture." },
          { v: "Security for anonymous apps: password hashing, rate limiting, and size limits enforced on the server." },
          { v: "Concurrency handled through atomic database operations, with no read-then-write steps." },
          { v: "Shipping: Docker, environment secrets, CI, and running a real app on the public internet." },
        ],
      },
      {
        k: "Next, in v2",
        points: [
          { v: "Same title with different passwords as separate stashes, using a key derived from both." },
          { v: "Encryption in the browser, so files stay unreadable to the server as well." },
          { v: "Download all as ZIP, QR code sharing and file previews." },
        ],
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
