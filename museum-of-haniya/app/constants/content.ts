export const SITE = {
  name: "The Museum of Haniya",
  tagline: "Where curiosity meets artificial intelligence",
  liveUrl: "https://f25607162.github.io/Portfolio2/",
  author: "Haniya",
  role: "BS Artificial Intelligence student",
  university: "National University of Technology (NUTECH), Islamabad",
  semester: "Second semester",
  email: "F25607163@nutech.edu.pk",
  intro:
    "I am passionate about artificial intelligence, software development, and building creative digital experiences. I enjoy learning new technologies and turning ideas into meaningful solutions.",
  careerGoal:
    "To become an AI engineer capable of solving real-world problems using intelligent systems and modern software technologies.",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const LOADER_MESSAGES = [
  "Preparing exhibition…",
  "Loading artifacts…",
  "Opening gallery…",
  "The museum is ready",
];

export const ABOUT_INFO = [
  { label: "Name", value: SITE.author },
  { label: "Degree", value: "Bachelor of Science in Artificial Intelligence" },
  { label: "University", value: SITE.university },
  { label: "Current semester", value: SITE.semester },
  { label: "Career goal", value: SITE.careerGoal },
];

export const EDUCATION_CURRENT = {
  status: "Currently enrolled",
  title: "BS Artificial Intelligence",
  meta: `${SITE.university} — 2nd semester`,
};

export const FUTURE_GOALS = [
  "Machine learning",
  "Deep learning",
  "Computer vision",
  "Natural language processing",
  "Data science",
  "Robotics",
];

export type Skill = {
  name: string;
  proficiency: number;
  description: string;
  learning?: boolean;
};

export const SKILLS: Skill[] = [
  { name: "C++", proficiency: 78, description: "Core language for algorithms and DSA practice" },
  { name: "C", proficiency: 74, description: "Foundation of procedural programming" },
  { name: "Java", proficiency: 70, description: "Object-oriented application development" },
  { name: "HTML", proficiency: 88, description: "Structuring semantic, accessible web pages" },
  { name: "CSS", proficiency: 84, description: "Styling and responsive layout design" },
  { name: "JavaScript", proficiency: 72, description: "Interactivity and client-side logic" },
  { name: "Responsive design", proficiency: 80, description: "Building layouts that adapt across devices" },
  { name: "Backend development", proficiency: 58, description: "Server-side logic and data flow" },
  { name: "Git", proficiency: 76, description: "Version control for collaborative code" },
  { name: "GitHub", proficiency: 76, description: "Hosting and managing project repositories" },
  { name: "Problem solving", proficiency: 85, description: "Breaking down complex problems methodically" },
  { name: "Object-oriented programming", proficiency: 73, description: "Designing with classes, objects, and inheritance" },
  { name: "SQL", proficiency: 45, description: "Currently learning — querying relational data", learning: true },
  { name: "Python", proficiency: 52, description: "Currently learning — AI and data workflows", learning: true },
  { name: "AI fundamentals", proficiency: 60, description: "Core concepts behind intelligent systems" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: "Live" | "Complete" | "In progress" | "Ongoing";
  github?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "student-management-system",
    title: "Student management system",
    description: "A system to manage student records, enrollment, and grades.",
    longDescription:
      "A desktop application built to manage core student records: enrollment details, grade tracking, and record lookup, with a focus on clean object-oriented structure and file-based persistence.",
    technologies: ["C++", "OOP", "File handling"],
    status: "In progress",
    github: "#",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio website",
    description: "This very museum — an interactive personal portfolio experience.",
    longDescription:
      "A fully interactive, museum-themed portfolio built with Next.js, React Three Fiber, and GSAP, designed to present academic and creative work as a gallery walkthrough rather than a static page.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React Three Fiber"],
    status: "Live",
    github: "#",
    demo: "#",
  },
  {
    slug: "calculator",
    title: "Calculator",
    description: "A functional calculator with a clean, minimal interface.",
    longDescription:
      "A browser-based calculator supporting standard arithmetic operations, built to practice DOM manipulation, event handling, and clean UI logic in vanilla JavaScript.",
    technologies: ["JavaScript", "HTML", "CSS"],
    status: "Complete",
    github: "#",
    demo: "#",
  },
  {
    slug: "library-management-system",
    title: "Library management system",
    description: "A system to track book inventory, borrowing, and returns.",
    longDescription:
      "A Java-based application to manage book inventory, member borrowing, and due-date tracking, applying object-oriented principles alongside SQL for persistent storage.",
    technologies: ["Java", "OOP", "SQL"],
    status: "In progress",
    github: "#",
  },
  {
    slug: "ai-mini-projects",
    title: "AI mini projects",
    description: "Small experiments applying core AI and machine learning concepts.",
    longDescription:
      "A growing collection of small Python experiments applying foundational AI and machine learning concepts learned throughout the degree — used as a hands-on companion to coursework.",
    technologies: ["Python", "AI fundamentals"],
    status: "Ongoing",
    github: "#",
  },
];

export const MILESTONES = [
  { number: "01", title: "Learning journey", description: "Building a foundation across AI theory and applied programming." },
  { number: "02", title: "Academic growth", description: "Progressing steadily through the AI curriculum at NUTECH." },
  { number: "03", title: "Programming practice", description: "Strengthening logic and structure through daily coding practice." },
  { number: "04", title: "Self learning", description: "Exploring Python, SQL, and AI fundamentals independently." },
  { number: "05", title: "Personal projects", description: "Applying knowledge to small, real, hands-on builds." },
];

export type Certificate = {
  title: string;
  issuer: string;
};

export const CERTIFICATES: Certificate[] = [
  { title: "Introduction to AI", issuer: "Placeholder issuer" },
  { title: "Python for beginners", issuer: "Placeholder issuer" },
  { title: "Web development basics", issuer: "Placeholder issuer" },
  { title: "Git and GitHub essentials", issuer: "Placeholder issuer" },
];

export const FOOTER_QUOTE = "Every masterpiece begins with curiosity.";
