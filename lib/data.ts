// Project data
export const projects = [
  {
    id: 1,
    title: "Utano",
    description: "AI-powered food safety & health assistant that analyzes food images and personal health profiles for real-time dietary guidance",
    tech: ["Flutter", "Dart", "Google Gemini", "SharedPreferences"],
    category: "mobile",
    github: "https://github.com/rufaromugabe/utano",
    demo: "https://utano.rufaro.dev",
    private: false
  },
  {
    id: 2,
    title: "Student Companion",
    description: "Academic assistant app for Zimbabwean universities with smart timetables, notices, and resource organization",
    tech: ["Flutter", "Google Classroom API", "SQLite"],
    category: "mobile",
    github: "https://github.com/rufaromugabe/student-companion",
    demo: "https://companion.rufaro.dev",
    private: false
  },
  {
    id: 3,
    title: "CV Portal",
    description: "Automated job matching platform that analyzes CVs and connects candidates to relevant opportunities",
    tech: ["Next.js", "Node.js", "Vector Search"],
    category: "web",
    github: "https://github.com/rufaromugabe/cv-portal",
    demo: "https://cvportal.rufaro.dev",
    private: true
  },
  {
    id: 4,
    title: "n8n-nodes-gemini-search",
    description: "Custom n8n nodes to integrate Google Gemini AI models for search and content generation",
    tech: ["Node.js", "TypeScript", "Google Gemini"],
    category: "aiml",
    github: "https://github.com/rufaromugabe/n8n-nodes-gemini-search",
    demo: null,
    private: false
  },
  {
    id: 5,
    title: "ZimBrew",
    description: "Clean, minimalist e-commerce website showcasing curated Zimbabwean coffee blends",
    tech: ["Next.js", "Vercel", "Stripe"],
    category: "web",
    github: "https://github.com/rufaromugabe/zimbrew",
    demo: "https://zimbrew.vercel.app",
    private: false
  },
  {
    id: 6,
    title: "Ministry of ICT Website",
    description: "Official portal for Zimbabwe's Ministry of ICT, Postal & Courier Services",
    tech: ["Next.js", "Vercel", "TypeScript"],
    category: "web",
    github: null,
    demo: "https://mict.gov.zw",
    private: true
  }
];

// Skills data
export const skills = {
  aiml: [
    "Google Gemini Integration",
    "Vector Search & RAG",
    "Computer Vision",
    "Natural Language Processing",
    "AI Flow Automations",
    "Machine Learning Models"
  ],
  web: [
    "Next.js & React",
    "Node.js & Express",
    "HTML5 & CSS3",
    "REST APIs",
    "UI/UX Design",
    "Vercel Deployment"
  ],
  infrastructure: [
    "Docker Containers",
    "GitHub Actions CI/CD",
    "Kubernetes Clusters",
    "Coolify Deployment",
    "Database Management"
  ],
  cloud: [
    "AWS Services",
    "Google Cloud",
    "Serverless Functions",
    "Cloud Security",
    "Performance Optimization"
  ],
  mobile: [
    "Flutter Development",
    "Dart Programming",
    "SharedPreferences",
    "Native Features",
    "Cross-platform Apps",
    "Mobile UI/UX"
  ],
  languages: [
    "JavaScript",
    "TypeScript",
    "Dart",
    "Flutter",
    "Next.js",
    "n8n",
    "SQL",
    "HTML/CSS",
    "GraphQL"
  ]
};

// Experience data
export const experience = [
  {
    type: "work",
    title: "Co-Founder & Project Manager",
    organization: "afrAInity Technologies",
    period: "Apr 2023 - Present",
    description: "Leading AI-driven R&D and product delivery, achieving 50% boost in client satisfaction through iterative feedback loops."
  },
  {
    type: "work",
    title: "Sales Consultant",
    organization: "Econet Wireless (Onmask Investments)",
    period: "Dec 2022 - Jun 2023",
    description: "Delivered technical and sales support, achieving top-quarter customer satisfaction ratings."
  },
  {
    type: "education",
    title: "BTech (Hons) Software Engineering",
    organization: "Harare Institute of Technology",
    period: "2023 - 2027",
    description: "Specializing in mobile and web development with focus on AI integration."
  },
  {
    type: "work",
    title: "Student Researcher",
    organization: "Center of Artificial Intelligence (HIT)",
    period: "2024 - Present",
    description: "Conducting face-recognition and object-detection system research using MobileNetV2 and FastAPI."
  },
  {
    type: "education",
    title: "A-Level, ZIMSEC",
    organization: "Cheziya Gokwe High School",
    period: "2021 - 2022",
    description: "Achieved 18 points in A-Level examinations."
  }
];