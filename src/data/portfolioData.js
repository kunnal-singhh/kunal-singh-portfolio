export const portfolioData = {
  personal: {
    name: "Kunal Singh",
    role: "Full-Stack & AI Engineer",
    location: "Patna / Raipur, India",
    email: "singhkunal1642@gmail.com",
    phone: "+91-7870638125",
    bio: "Passionate Full-Stack Engineer specializing in high-concurrency Node.js microservices, interactive React applications, and integrated LLM workflows. MCA candidate at NIT Raipur with a track record of open-source contributions and system architecture.",
    taglineWords: [
      "Building Scalable Full-Stack Apps.",
      "Architecting Real-Time Systems.",
      "Integrating AI & LLM Pipelines.",
      "Optimizing Low-Latency APIs."
    ],
    socials: {
      github: "https://github.com/kunnal-singhh",
      linkedin: "https://www.linkedin.com/in/kunal-singh-b44650216/",
      leetcode: "https://leetcode.com/u/kunnal_singhh/",
      gfg: "https://www.geeksforgeeks.org/profile/kunnal_singhh?tab=activity"
    },
    stats: [
      { label: "DSA Problems Solved", value: "350+" },
      { label: "Open-Source PRs", value: "15+" },
      { label: "GSSOC Contributor", value: "2025" },
      { label: "Academic CGPA", value: "7.51" }
    ]
  },

  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Bootstrap CSS", level: 85 }
      ]
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Node.js & Express", level: 88 },
        { name: "REST APIs & WebSockets", level: 90 },
        { name: "Python / C++", level: 82 },
        { name: "System Design & DSA", level: 85 }
      ]
    },
    {
      category: "AI & Databases & DevOps",
      items: [
        { name: "Groq & Gemini APIs", level: 88 },
        { name: "MongoDB / Mongoose", level: 85 },
        { name: "Docker & Docker Compose", level: 80 },
        { name: "Nginx & Git/GitHub", level: 85 }
      ]
    }
  ],

  projects: [
    {
      id: "intervue",
      title: "Intervue — Real-Time Interview Platform",
      category: "Full-Stack",
      shortDesc: "Low-latency mock interview platform with live video, collaborative Monaco code editor, and sandboxed execution.",
      fullDesc: "Architected a real-time mock interview platform featuring low-latency video calling, in-session chat, and collaborative code editing. Integrated the JDoodle API for multi-language sandboxed code execution (JavaScript, Python, Java). Implemented Clerk auth with custom Express middleware to auto-synchronize user profiles into MongoDB and Stream. Utilized Inngest serverless workflows with automated retry queues for robust event handling.",
      tech: ["React.js", "Node.js", "Express", "Stream SDK", "Monaco Editor", "Inngest", "MongoDB"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://example.com/demo",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "expense-tracker",
      title: "AI Financial Expense Management",
      category: "AI / Cloud",
      shortDesc: "MERN financial application with automated keyword categorization, Groq/Gemini assistant, and PDF/CSV reporting.",
      fullDesc: "Engineered a full-stack financial platform with JWT access tokens and HTTP-only cookie refresh token rotation. Implemented automated transaction categorization across 22+ categories and an AI financial assistant powered by Groq API with Gemini fallback. Configured budget alerts using node-cron with period-aware deduplication and an analytics dashboard with Recharts.",
      tech: ["MERN Stack", "Groq API", "Gemini API", "Recharts", "MongoDB", "Node-Cron"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://example.com/demo",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "note-vault",
      title: "Note Vault — Containerized Note Service",
      category: "DevOps & Systems",
      shortDesc: "Secure note management service containerized with Docker, multi-stage Nginx builds, and rate limiting.",
      fullDesc: "Built an authentication service featuring SHA-256 hashed sessions in MongoDB with instant revocation. Developed RESTful APIs supporting full-text regex search, soft-deletes, and trash bin restoration. Fortified endpoints with per-user and per-IP rate limiting (30 req/min). Containerized the application with Docker Compose and multi-stage Nginx builds.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Docker", "Nginx", "Jest"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://example.com/demo",
      githubUrl: "https://github.com",
      featured: true
    }
  ],

  experience: [
    {
      title: "Open Source Contributor",
      organization: "GirlScript Summer of Code (GSSOC)",
      period: "Jul 2025 – Sep 2025",
      type: "Experience",
      description: "Identified, reproduced, and resolved critical bugs across open-source web repositories. Submitted modular frontend and backend pull requests adhering to structured Git/GitHub code review workflows."
    },
    {
      title: "Master of Computer Applications (MCA)",
      organization: "National Institute of Technology (NIT), Raipur",
      period: "Aug 2024 – Present",
      type: "Education",
      description: "Current CGPA: 7.51. Specialized coursework in Data Structures, Algorithms, Distributed DBMS, Operating Systems, and Computer Networks."
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      organization: "Indira Gandhi National Open University (IGNOU)",
      period: "Jan 2021 – Jan 2024",
      type: "Education",
      description: "Graduated with 63.54%. Built core foundation in software development, web technology, object-oriented design, and relational databases."
    }
  ],

  certifications: [
    "Postman API Fundamentals Student Expert",
    "GirlScript Summer of Code 2025 Contributor",
    "GeeksforGeeks Python Certification (2025)",
    "HackerRank Problem Solving (Basic)",
    "160 Days DSA Challenge Finisher",
    "ET AutoTech Hackathon 2026 Participant"
  ],

  testimonials: [
    {
      quote: "Kunal's technical acuity in combining real-time streaming tools like Stream SDK with custom Express pipelines made our interview module production-ready in weeks.",
      author: "Open Source Maintainer",
      role: "GSSOC Mentor"
    },
    {
      quote: "Demonstrated exemplary commitment during code reviews. His containerized solutions and strict rate-limiting implementations show true senior-level engineering hygiene.",
      author: "Senior Software Architect",
      role: "Hackathon Judge"
    },
    {
      quote: "Exceptional grasp over LLM API integrations and failover handling. His AI expense assistant was smooth, fast, and remarkably robust.",
      author: "Project Collaborator",
      role: "Full-Stack Engineer"
    }
  ]
};
