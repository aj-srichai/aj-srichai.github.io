import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Techawat Srichai",
  initials: "AJ",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/Bangkok,+Thailand",
  about:
    "Civil Engineer with experience in construction technology, process automation, and data-driven workflows.",
  summary: (
    <>
      Civil engineer at CPF with hands-on experience in process automation,
      internal tools development, and construction data analysis. Comfortable
      working across engineering and software domains, and interested in
      applying these skills in business, finance, or cross-functional roles.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/199589895?v=4",
  personalWebsiteUrl: "https://aj-srichai.github.io",
  contact: {
    email: "ajsrichai1@gmail.com",
    tel: "+66 98 2975 791",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aj-srichai",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aj-srichai/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Kasetsart University",
      degree: "Bachelor's Degree in Civil Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "CPF (Charoen Pokphand Foods)",
      link: "https://www.cpfworldwide.com/",
      badges: ["Civil Eng", "Python", "Power Platform"],
      title: "Civil Engineer (Central Construction Engineering Team)",
      start: "2025",
      end: "Present",
      description: (
        <>
          Supported digital transformation of construction workflows using
          low-code tools and custom software.
          <ul className="list-inside list-disc">
            <li>
              Developed a Python-based material estimation tool for automated
              concrete/steel take-offs, reducing budget variances.
            </li>
            <li>
              Streamlined zone-based BOQ processing to improve inventory control
              and reduce procurement costs using data automation.
            </li>
            <li>
              Developed internal web applications to digitize manual processes
              and improve real-time tracking.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Sino-Thai Engineering & Construction PCL",
      link: "https://www.stecon.co.th/",
      badges: ["On Site", "QC/QA", "Inspection"],
      title: "QC Engineer",
      start: "2024",
      end: "2025",
      description: (
        <>
          Managed quality control and compliance for construction materials on
          large-scale projects.
          <ul className="list-inside list-disc">
            <li>
              Inspected steel reinforcement and concrete pouring processes to
              ensure compliance with engineering standards.
            </li>
            <li>
              Managed quality control documentation and coordinated with site
              engineers for issue resolution.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Civil Engineering",
    "Construction Management",
    "Python",
    "React / React Native",
    "Power Platform (BI/Automate)",
    "SQL / PostgreSQL",
    "FastAPI",
    "BIM (Revit)",
    "Net Zero Supply Chains",
    "Building Control Laws",
    "n8n / Make",
    "Docker",
  ],
  projects: [
    {
      title: "Material Estimation Tool",
      techStack: ["Python", "Pandas", "Algorithm Design"],
      description:
        "Python tool for automated concrete and steel take-offs, replacing manual calculations with material-specific algorithms.",
      link: {
        label: "GitHub",
        href: "https://github.com/aj-srichai",
      },
    },
    {
      title: "Green Building AI Assistant",
      techStack: ["LangChain", "RAG", "Supabase", "AI"],
      description:
        "AI chatbot for answering questions about Green Building standards using RAG (Retrieval-Augmented Generation).",
      link: {
        label: "GitHub",
        href: "https://github.com/aj-srichai",
      },
    },
    {
      title: "Automated Quotation System",
      techStack: ["Python", "Excel Automation", "Scripting"],
      description:
        "Automation script generating 189+ quotation documents, reducing manual workload by 90%.",
      link: {
        label: "GitHub",
        href: "https://github.com/aj-srichai",
      },
    },
    {
      title: "Construction Dashboard",
      techStack: ["Power BI", "Data Analytics", "SQL"],
      description:
        "Interactive dashboard for tracking construction progress and budget using real-time site data.",
      link: {
        label: "Demo",
        href: "https://github.com/aj-srichai",
      },
    },
  ],
} as const;
