export const site = {
  name: "Kanchana Witharana",
  title: "Kanchana Witharana — Business Information Systems",
  description:
    "Kanchana Witharana — Business Information Systems undergraduate. Business analysis, UI/UX design, and ICT-driven systems.",
  location: "Colombo, Sri Lanka",
  url: "https://kanchanawitharana.vercel.app",
};

export const nav = [
  { label: "About", target: "about" },
  { label: "Education", target: "education" },
  { label: "Certificates", target: "certificates" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Leadership", target: "leadership" },
  { label: "Contact", target: "contact" },
] as const;

export const resume = {
  href: "/resume/Kanchana-Sandeepa-Resume.pdf",
  fileName: "Kanchana-Sandeepa-Resume.pdf",
};

export const hero = {
  eyebrow: "External Entity — Source",
  firstName: "Kanchana",
  lastName: "Witharana",
  lead: "I turn business processes into working systems — gathering requirements, designing the interface, and building the logic that connects them. Currently studying Business Information Systems in Colombo, Sri Lanka.",
  ctas: {
    primary: { label: "View Projects →", target: "projects" },
    secondary: { label: "Contact Me", target: "contact" },
  },
  stats: [
    { value: "3", label: "MAJOR PROJECTS" },
    { value: "6", label: "CERTIFICATIONS" },
    { value: "2028", label: "EXPECTED GRADUATION" },
  ],
};

export const roles = [
  "Business Information Systems Undergraduate",
  "Aspiring Business Analyst",
  "UI/UX Designer",
  "Python & C# Developer",
];

export const tickerItems = [
  "Business Analysis",
  "Power BI",
  "Microsoft Access",
  "Python",
  "C#",
  "SQL",
  "Figma",
  "UI/UX Design",
  "Agile",
  "System Design",
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/kanchana-witharana-68103636b",
  email: "kanchanasandeepawitharana@gmail.com",
  github: "https://github.com/kanchana926",
  phone: "0761520891",
  phoneDisplay: "076-1520891",
};

export const about = {
  flowTag: "Process 01 — About",
  heading: "Where business meets ICT",
  photo: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Kanchana Sandeepa",
    tag: "KANCHANA · COLOMBO",
  },
  stats: [
    { value: "3", label: "Major Projects" },
    { value: "6", label: "Certifications" },
    { value: "2028", label: "Grad Year" },
  ],
  paragraphs: [
    "I'm a Business Information Systems undergraduate skilled in analyzing business processes, gathering requirements, and delivering ICT-driven solutions. My academic work runs across Power BI dashboards, Microsoft Access systems, and Python applications built to optimize real workflows.",
    "My four-year honors degree pairs management thinking with hands-on ICT — business analysis, system development, and project management on one side, and UI/UX design, user research, wireframing, and prototyping on the other. I'm currently looking for an internship to apply that mix of analytical, technical, and problem-solving skill in a real-world business environment.",
    "Outside coursework, I design graphics for my department's Student Association and work as a videographer and editor for Dhamsathara TV in Rathnapura — two crafts that keep my eye for interfaces sharp.",
  ],
  quickFacts: [
    { label: "Location", value: "Colombo, Sri Lanka" },
    { label: "Degree", value: "BSc (Hons) Business Information Systems" },
    { label: "University", value: "University of Sri Jayewardenepura" },
    { label: "Grad", value: "Expected 2028" },
    { label: "Focus", value: "Business Analysis · UI/UX · Systems" },
    { label: "Role", value: "Executive Board Member, Dept. of IT" },
  ],
  howIWork: [
    { step: "01 · INPUT", value: "Business Requirement" },
    { step: "02 · PROCESS", value: "Analysis + UI/UX Design" },
    { step: "03 · BUILD", value: "Python · C# · SQL" },
    { step: "04 · OUTPUT", value: "Working System", accent: true },
  ],
};

export const education = {
  flowTag: "Data Store — Records",
  heading: "Education & Certifications",
  lead: "Formal study and self-directed learning, stored and referenced throughout every project.",
  timeline: [
    {
      period: "2023 — 2027",
      title: "BSc (Hons) Business Information Systems",
      place: "University of Sri Jayewardenepura, Colombo",
      details: [
        "Four-year honors degree combining management and ICT",
        "Business analysis, system development, and project management",
        "UI/UX design — user research, wireframing, prototyping, and interface design",
      ],
    },
  ],
};

export const certificates = [
  { title: "C# Programming", issuer: "W3Schools", year: "2024" },
  { title: "SQL Fundamentals", issuer: "W3Schools", year: "2025" },
  { title: "HTML & Web Development", issuer: "W3Schools", year: "2025" },
  { title: "Data Analytics Essentials", issuer: "Cisco Networking Academy", year: "2026" },
  { title: "Cybersecurity Fundamentals", issuer: "APNIC Academy", year: "2026" },
  { title: "Internet of Things", issuer: "Cisco Networking Academy", year: "2026" },
];

export const skills = [
  {
    title: "Business Analyst Tools",
    description: "Requirements, data, and reporting.",
    tools: ["Microsoft Access", "Power BI"],
  },
  {
    title: "Programming Languages",
    description: "Building the logic layer.",
    tools: ["C#", "Python", "SQL", "HTML"],
  },
  {
    title: "UI/UX Design",
    description: "Designing around the user, not the system.",
    tools: ["Figma", "Prototyping", "User-Centered Design"],
  },
  {
    title: "Methodology & Core Competencies",
    description: "How the work gets scoped and shipped.",
    tools: ["Agile", "Requirements Gathering", "Data Analysis", "System Design", "Problem-Solving"],
  },
];

export type Project = {
  slug: string;
  title: string;
  address: string;
  tags: string[];
  description: string;
  stack: string[];
  github: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "eternal-bliss-planners",
    title: "Eternal Bliss Planners",
    address: "eternalbliss.events / hotels",
    tags: ["UI/UX", "Group Project"],
    description:
      "An interactive wedding planning platform built around elegant, user-centered design. Couples and vendors manage events, bookings, and coordination in one place — designed for a smooth, personalized planning experience from first idea to the big day.",
    stack: ["Figma", "Wireframing", "Prototyping"],
    github: "https://github.com/Department-of-IT-FMSC-USJ/group-project-group-3.git",
    image: "/projects/eternal-bliss-planners.jpg",
    imageAlt: "Eternal Bliss Planners wedding platform shown on laptop and phone",
  },
  {
    slug: "ridepulse",
    title: "RidePulse — AI-Powered Public Transport System",
    address: "ridepulse-e28ba.web.app / login",
    tags: ["AI / ML", "Group Project"],
    description:
      "A data-driven transport platform tackling revenue leakage and overcrowding. Real-time GPS tracking and digital ticketing feed LSTM-based models that forecast passenger demand — giving transit operators predictive, transparent decision-making instead of guesswork.",
    stack: ["Real-time GPS", "LSTM Forecasting", "Digital Ticketing"],
    github: "https://github.com/dilutha/RidePulse",
    image: "/projects/ridepulse.jpg",
    imageAlt: "RidePulse smart public transport dashboard shown on laptop and phone",
  },
  {
    slug: "fur-baby-records",
    title: "Fur Baby Records",
    address: "furbaby.records / app",
    tags: ["Python", "Individual Project"],
    description:
      "A management system integrating ICT into everyday pet-care operations. Built in Python to streamline record-keeping and day-to-day workflows for a small pet-care business.",
    stack: ["Python"],
    github: "https://github.com/kanchana926/pythonproject.git",
    image: "/projects/fur-baby-records.jpg",
    imageAlt: "Fur Baby Records pet care management app shown on laptop and phone",
  },
];

export const leadership = [
  {
    icon: "DESIGN",
    title: "Graphic Designer",
    description:
      "Creative and detail-oriented design work for the Student Association, Department of Information Technology.",
  },
  {
    icon: "MEDIA",
    title: "Videographer & Video Editor",
    description: "Producing and editing visual content for Dhamsathara TV, Rathnapura Branch.",
  },
  {
    icon: "LEADERSHIP",
    title: "Executive Board Member",
    description: "Serving on the Executive Board, Department of Information Technology.",
  },
];

export const contact = {
  flowTag: "Data Flow — Output",
  heading: "Let's build something.",
  lead: "Open to internships and collaborative projects where business analysis and ICT meet. Reach out any time.",
  links: [
    { key: "EMAIL", value: socialLinks.email, href: `mailto:${socialLinks.email}` },
    { key: "PHONE", value: socialLinks.phoneDisplay, href: `tel:${socialLinks.phone}` },
    { key: "LINKEDIN", value: "/in/kanchana-witharana", href: socialLinks.linkedin },
    { key: "GITHUB", value: "@kanchana926", href: socialLinks.github },
  ],
};

export const resumeCta = {
  heading: "Want the paper trail too?",
  lead: "Everything on this page, in one PDF.",
};

export const footer = {
  name: "KANCHANA SANDEEPA",
  location: "COLOMBO, SRI LANKA",
};
