// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Passionate about building robust applications while continuously expanding my technical horizons. Currently diving deep into AI integration, n8n automation, and modern backend technologies like Next.js with PostgreSQL and Prisma. I believe in writing purposeful code that solves real problems—no shortcuts, no compromises, just solid engineering principles applied to create scalable digital solutions.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "Backend Architecture & API Development",
    description:
      "Crafting efficient, production-ready APIs with clean architecture and secure coding practices. I focus on building scalable backend systems that handle complex data flows while maintaining optimal performance and reliability.",
    items: [
      {
        title: "RESTful API Design",
        description: "(Clean Architecture, Status Codes, Resource Management)",
      },
      {
        title: "Authentication Systems",
        description: "(JWT, OAuth, Session Management, Role-based Access)",
      },
      {
        title: "Database Integration",
        description: "(MongoDB, PostgreSQL, Query Optimization, Data Modeling)",
      },
    ],
  },
  {
    title: "Real-Time Communication",
    description:
      "Building interactive applications that connect users instantly. From live chat systems to real-time dashboards, I leverage WebSockets and modern technologies to create seamless, responsive experiences that keep users engaged and data flowing in real-time.",
    items: [
      {
        title: "WebSocket Integration",
        description: "(Socket.io, Real-time Data Sync, Live Updates)",
      },
      {
        title: "Live Chat Systems",
        description: "(Multi-user Chat, Presence Indicators, Message History)",
      },
      {
        title: "Real-Time Dashboards",
        description: "(Live Analytics, Data Streaming, Interactive Widgets)",
      },
    ],
  },
  {
    title: "AI Integration & Automation",
    description:
      "Exploring the exciting world of AI and workflow automation as a passionate beginner. Currently learning to integrate generative AI capabilities and automated workflows into web applications using modern tools like LangChain, n8n, and containerization with Docker.",
    items: [
      {
        title: "Workflow Automation",
        description: "(n8n Integration, API Orchestration, Learning Phase)",
      },
      {
        title: "GenAI Experimentation",
        description:
          "(LangChain Basics, AI API Integration, Beginner Projects)",
      },
      {
        title: "Containerization",
        description: "(Docker Fundamentals, Development Environments)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Fuzzie SaaS Application",
    description:
      "A N8N clone SaaS that offers users to connect their socials to their automation workflows, so that they can automate the nitty gritty stuff.",
    href: "https://fuzzie-application.vercel.app/",
    image: "/assets/projects/fuzzie-app.avif",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "ReactJS" },
      { id: 2, name: "React Flow" },
      { id: 3, name: "Next.js" },
      { id: 4, name: "Clerk Authentication" },
      { id: 5, name: "Tailwind CSS V4" },
    ],
  },
  {
    id: 2,
    name: "Fullstack Uber Clone",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/uber-clone.avif",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];

export const socials = [
  // {
  //   name: "Youtube",
  //   href: "",
  // },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sakshamVerma08" },
  { name: "GitHub", href: "https://github.com/sakshamVerma08" },
  { name: "Leetcode", href: "https://leetcode.com/u/sakshamxx2769/" },
];
