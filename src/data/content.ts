// All portfolio content lives here. Source of truth: Menna's CV. Edit this file to update the site.
export const profile = {
  name: "Menna Khaled Gamal",
  shortName: "Menna Khaled",
  title: "Cybersecurity | SOC Analyst",
  email: import.meta.env.VITE_CONTACT_EMAIL || "mennakhaled.forwork@gmail.com",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/menna-khaled-204038359",
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/meennakhaled",
  photo: `${import.meta.env.BASE_URL}assets/profile.jpg`, // <- put your photo here
  cv: `${import.meta.env.BASE_URL}assets/Menna-Khaled-CV.pdf`, // <- replace to update your CV
  location: "Cairo, Egypt",
  intro:
    "Information Technology graduate from Cairo University focused on cybersecurity, SOC operations, incident response, network security, and web application security. I'm building hands-on experience through internships and practical training.",
};

export const about = [
  "I graduated in 2026 with a Bachelor of Computer Science in Information Technology from the Faculty of Computer Science and Artificial Intelligence at Cairo University.",
  "My focus is cybersecurity: SOC operations, incident response, network security, and web application security. I learn by doing, using SIEM tools, Windows Event Logs and network logs to analyze incidents, applying the MITRE ATT&CK framework, and practicing the incident response lifecycle.",
  "I also have a solid networking base (TCP/IP, the OSI model, subnetting, routing, switching, firewall management, CCNA concepts) built with Cisco Packet Tracer. I'm early in my career and want to keep growing as a cybersecurity professional.",
];

export type SkillGroup = { title: string; items: string[] };
export const skillGroups: SkillGroup[] = [
  { title: "Cybersecurity", items: ["Network Security", "Packet Analysis", "Log Analysis", "OSINT", "Bug Hunting", "Threat Detection & Response", "Malware Analysis", "Firewall Configuration", "IDS/IPS", "Encryption & Hashing"] },
  { title: "Penetration Testing & Security Tools", items: ["Metasploit", "Nmap", "Burp Suite", "John the Ripper", "Nessus", "OpenVAS", "Recon-ng"] },
  { title: "SIEM & SOC", items: ["Log Analysis", "Incident Handling", "Threat Detection", "SIEM Concepts", "Digital Forensics", "MITRE ATT&CK", "Threat Hunting", "Incident Response"] },
  { title: "Networking", items: ["TCP/IP", "OSI Model", "Subnetting", "Routing", "Switching", "Cisco Packet Tracer", "Firewall Management"] },
  { title: "Operating Systems", items: ["Linux (Kali, Ubuntu)", "Windows"] },
  { title: "Programming", items: ["Python", "Java", "C++", "Dart", "C", "JavaScript", "HTML", "CSS"] },
  { title: "Soft Skills", items: ["Problem Solving", "Communication", "Teamwork", "Adaptability", "Time Management", "Attention to Detail"] },
];

export type Experience = { org: string; role?: string; place?: string; period: string; current?: boolean; points: string[] };
export const experience: Experience[] = [
  {
    org: "MCS Summer Internship", place: "Maadi", period: "07/2026 – Present", current: true,
    points: [
      "Participating in a cybersecurity internship focused on enterprise security practices.",
      "Learning web application security concepts, common vulnerabilities, and secure development practices.",
      "Gaining hands-on exposure to corporate security operations, security policies, and risk management.",
      "Assisting in security assessments and learning how security is implemented in an organizational environment.",
      "Developing practical knowledge of cybersecurity tools, best practices, and incident prevention techniques.",
    ],
  },
  {
    org: "Instant – Cyber Security SOC", period: "10/2025 – Present", current: true,
    points: [
      "Building knowledge in Network+, Security+, Linux+, Windows Administration, Network Security Devices, SOC Analyst Tools, and Incident Handling Processes.",
      "Completed hands-on networking and security projects in Cisco Packet Tracer: network design, device configuration, and secure network implementation.",
      "Completed the TryHackMe SOC Level 1 learning path with hands-on SOC labs and real-world security scenarios.",
      "Analyzed security incidents using SIEM tools, Windows Event Logs, and network logs.",
      "Applied the MITRE ATT&CK framework, performed basic threat hunting investigations, and practiced the incident response lifecycle: detection, analysis, containment, and recovery.",
    ],
  },
  {
    org: "CodeAlpha Summer Internship", period: "05/2026 – 06/2026",
    points: [
      "Gained hands-on cybersecurity experience through projects focused on network security and ethical hacking.",
      "Performed vulnerability assessments, threat detection activities, and secure system practices.",
    ],
  },
];

export type Project = { name: string; description: string; tech: string[]; concepts: string[]; contributions: string[]; github?: string; demo?: string; placeholder?: boolean };
export const projects: Project[] = [
  {
    name: "Cisco Packet Tracer Networking & Security Projects",
    description: "Hands-on projects completed during the Instant – Cyber Security SOC program, covering network design, device configuration, and secure network implementation.",
    tech: ["Cisco Packet Tracer"],
    concepts: ["Network design", "Device configuration", "Secure network implementation"],
    contributions: ["Designed and configured simulated networks", "Applied secure configuration practices"],
  },
  {
    name: "Project name (add yours)", placeholder: true,
    description: "Placeholder: describe a project, what problem it addressed, and what you built.",
    tech: ["Tech 1", "Tech 2"], concepts: ["Security concept"], contributions: ["Your key contribution"],
    github: "", demo: "",
  },
  {
    name: "Project name (add yours)", placeholder: true,
    description: "Placeholder: e.g. a CodeAlpha or MCS project, if you want to showcase it here.",
    tech: ["Tech 1", "Tech 2"], concepts: ["Security concept"], contributions: ["Your key contribution"],
    github: "", demo: "",
  },
];

export type Credential = { name: string; issuer?: string; kind: "Certificate" | "Training" | "Course" | "Learning Path"; period?: string; topics: string[] };
export const credentials: Credential[] = [
  { name: "HCIA", issuer: "Huawei", kind: "Certificate", period: "08/2025 – 09/2025", topics: ["Network security concepts & architectures", "Threat detection & countermeasures", "Firewall technologies (NAT, IPS, Hot Standby, Policies)", "Encryption", "PKI"] },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", kind: "Course", topics: ["Cybersecurity basics", "Privacy awareness", "Threat detection & defense strategies", "Network vulnerabilities", "Data confidentiality"] },
  { name: "Cybersecurity", issuer: "Sprints", kind: "Training", topics: ["Cybersecurity fundamentals", "Network basics", "SOC operations", "OSINT", "Penetration testing concepts", "Threat analysis", "Security best practices"] },
  { name: "SOC Level 1", issuer: "TryHackMe", kind: "Learning Path", topics: ["Hands-on SOC labs", "Real-world security scenarios"] },
];

export const education = {
  degree: "Bachelor of Computer Science in Information Technology",
  school: "Faculty of Computer Science and Artificial Intelligence",
  university: "Cairo University",
  graduated: "2026",
};

// Only tools listed in the CV skills. Shown as names, not logos or proficiency levels.
export const toolkit = ["Nmap", "Burp Suite", "Metasploit", "Nessus", "OpenVAS", "Recon-ng", "John the Ripper", "Cisco Packet Tracer", "SIEM tools", "Linux (Kali, Ubuntu)"];

export const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Contact"] as const;
