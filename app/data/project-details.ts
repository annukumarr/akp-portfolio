export type ArchitectureItem = {
  number: string;
  title: string;
  description: string;
  technologies: readonly string[];
};

export type DevelopmentStage = {
  status: string;
  label: string;
  description: string;
  features: readonly string[];
};

export type ChallengeItem = {
  number: string;
  title: string;
  problem: string;
  solution: string;
  lesson: string;
};

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
  systems: readonly string[];
};

export type ProjectDetail = {
  title: string;
  category: string;
  status: string;
  tagline: string;

  overview: {
    label: string;
    heading: string;
    description: string;
    problem: string;
    problemTitle: string;
    solution: string;
    solutionTitle: string;
  };

  architecture: {
    label: string;
    heading: string;
    description: string;
    items: readonly ArchitectureItem[];
  };

  development: {
    label: string;
    heading: string;
    description: string;
    stages: readonly DevelopmentStage[];
    note: string;
  };

  challenges: {
    label: string;
    heading: string;
    description: string;
    items: readonly ChallengeItem[];
  };

  roadmap: {
    label: string;
    heading: string;
    description: string;
    items: readonly RoadmapItem[];
  };

  cta: {
    label: string;
    heading: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };

  technologies: readonly string[];
  github: string;
};

export const projectDetails = {
  "jarvis-x": {
    title: "Jarvis-X",
    category: "AI Operating System",
    status: "In Active Development",

    tagline:
      "Building an intelligent AI system designed to understand, remember, automate, and interact.",

    overview: {
      label: "Project Overview",

      heading: "Engineering intelligence beyond simple commands.",

      description:
        "Jarvis-X is my long-term AI engineering project focused on building a modular intelligent system rather than a basic chatbot. The vision is to create an AI operating layer capable of voice interaction, contextual memory, task automation, and intelligent decision support.",

      problem:
        "Most digital assistants execute isolated commands but lack meaningful memory, modular intelligence, and deep integration with a user's workflow.",

      problemTitle: "The limitation",

      solution:
        "Jarvis-X explores a modular AI architecture where speech, memory, automation, and AI reasoning operate as independent systems connected through a central execution layer.",

      solutionTitle: "The Jarvis-X approach",
    },

    architecture: {
      label: "System Architecture",

      heading: "Five layers. One intelligent system.",

      description:
        "Jarvis-X follows a modular architecture where specialized layers handle interaction, intelligence, memory, automation, and system output independently.",

      items: [
        {
          number: "01",
          title: "Voice Layer",
          description:
            "Captures natural voice commands and converts spoken input into structured text for intelligent processing.",
          technologies: ["Speech Recognition", "Wake Word", "STT"],
        },
        {
          number: "02",
          title: "Intelligence Core",
          description:
            "Analyzes user intent, routes commands, integrates LLM reasoning, and coordinates Jarvis-X system modules.",
          technologies: ["LLM", "Intent Routing", "AI Reasoning"],
        },
        {
          number: "03",
          title: "Memory System",
          description:
            "Maintains contextual and long-term information to enable personalized and continuous AI interactions.",
          technologies: ["SQLite", "Context Memory", "Long-term Memory"],
        },
        {
          number: "04",
          title: "Automation Layer",
          description:
            "Executes system commands, application actions, and automated workflows through modular execution systems.",
          technologies: ["Automation", "Command Engine", "System Actions"],
        },
        {
          number: "05",
          title: "Response Layer",
          description:
            "Transforms AI and system responses into natural voice output for continuous human-computer interaction.",
          technologies: ["Text-to-Speech", "Voice Output", "TTS"],
        },
      ],
    },

    development: {
      label: "Development Status",

      heading: "Built in public. Engineered in layers.",

      description:
        "Jarvis-X is an active long-term engineering project. The system is evolving incrementally, with working capabilities separated from experimental modules and future architecture.",

      stages: [
        {
          status: "Implemented",
          label: "Working System",
          description:
            "Core Jarvis-X interaction and execution capabilities currently implemented and tested.",
          features: [
            "Voice command input",
            "Text-to-speech responses",
            "AI response integration",
            "Command execution pipeline",
            "Application open and close commands",
            "SQLite memory foundation",
            "Memory module testing",
          ],
        },
        {
          status: "In Development",
          label: "Active Engineering",
          description:
            "Modules currently being designed, improved, or integrated into the Jarvis-X architecture.",
          features: [
            "Long-term memory architecture",
            "Context-aware conversations",
            "RAG knowledge pipeline",
            "Modular command routing",
            "Voice response optimization",
            "Jarvis-X system architecture",
          ],
        },
        {
          status: "Planned",
          label: "Future Systems",
          description:
            "Advanced capabilities planned for future Jarvis-X development phases.",
          features: [
            "Wake word detection",
            "Scheduler and proactive tasks",
            "Gesture control",
            "Visual AI dashboard",
            "Multi-agent architecture",
            "Personal knowledge system",
            "Cross-device interaction",
          ],
        },
      ],

      note:
        "Jarvis-X is being developed as a long-term AI operating system project rather than a one-time assistant application.",
    },

    challenges: {
      label: "Engineering Challenges",

      heading: "Problems that shaped the architecture.",

      description:
        "Building Jarvis-X exposed engineering problems across voice interaction, command routing, memory, and system design. Each challenge influenced the architecture of the project.",

      items: [
        {
          number: "01",
          title: "Voice response reliability",
          problem:
            "Speech recognition and text-to-speech execution introduced slow responses, repeated speech, and inconsistent interaction flow.",
          solution:
            "Separated listening and speech responsibilities into dedicated modules and improved the execution sequence between input, processing, and output.",
          lesson:
            "Voice systems require controlled state and execution flow.",
        },
        {
          number: "02",
          title: "Command routing complexity",
          problem:
            "As Jarvis-X gained more capabilities, directly handling every command inside a single execution flow became difficult to maintain and extend.",
          solution:
            "Introduced a modular command execution pipeline where system commands are routed independently and unresolved requests fall back to the AI reasoning layer.",
          lesson:
            "Modular routing makes intelligent systems easier to scale.",
        },
        {
          number: "03",
          title: "Context and memory",
          problem:
            "A stateless assistant could answer individual prompts but could not maintain meaningful continuity across interactions.",
          solution:
            "Designed a SQLite-based memory foundation and separated memory logic into dedicated modules as the base for contextual and long-term memory.",
          lesson:
            "Persistent intelligence begins with structured memory.",
        },
        {
          number: "04",
          title: "AI system architecture",
          problem:
            "Combining speech recognition, AI responses, automation, memory, and system commands created tightly coupled execution paths.",
          solution:
            "Reframed Jarvis-X as a layered AI operating system with independent voice, intelligence, memory, execution, and output systems.",
          lesson:
            "Architecture determines how far an AI project can evolve.",
        },
      ],
    },

    roadmap: {
      label: "System Roadmap",

      heading: "From assistant to intelligent operating layer.",

      description:
        "Jarvis-X is evolving through focused engineering phases that progressively introduce persistent memory, contextual intelligence, automation, and advanced AI system capabilities.",

      items: [
        {
          phase: "Phase 01",
          title: "Interaction Foundation",
          description:
            "Build reliable voice input, AI responses, text-to-speech output, and modular command execution.",
          systems: ["Voice", "TTS", "Command Engine"],
        },
        {
          phase: "Phase 02",
          title: "Persistent Intelligence",
          description:
            "Develop contextual memory and long-term information systems for continuous personalized interactions.",
          systems: ["SQLite", "Memory", "Context"],
        },
        {
          phase: "Phase 03",
          title: "Knowledge and Automation",
          description:
            "Introduce retrieval systems, structured knowledge access, scheduling, and proactive workflow automation.",
          systems: ["RAG", "Scheduler", "Automation"],
        },
        {
          phase: "Phase 04",
          title: "AI Operating System",
          description:
            "Expand Jarvis-X into a modular intelligent operating layer with agents, visual interaction, and cross-device systems.",
          systems: ["Multi-Agent", "Dashboard", "Cross-device"],
        },
      ],
    },

    cta: {
      label: "Jarvis-X",

      heading: "Building intelligence as a system, not a feature.",

      description:
        "Jarvis-X is an evolving AI operating system exploring memory, automation, reasoning, voice interaction, and modular intelligence.",

      primaryLabel: "View GitHub Repository →",

      secondaryLabel: "Explore More Projects",
    },

    technologies: [
      "Python",
      "Artificial Intelligence",
      "LLM Integration",
      "Speech Recognition",
      "Text-to-Speech",
      "Automation",
      "SQLite",
      "RAG Architecture",
    ],

    github: "https://github.com/annukumarr/Jarvis-X",
  },

  legacy: {
    title: "Legacy",
    category: "AI-Focused Portfolio System",
    status: "In Active Development",

    tagline:
      "Engineering a modular portfolio experience designed to communicate projects, systems, and technical growth beyond a traditional developer website.",

    overview: {
      label: "Project Overview",

      heading: "Turning a portfolio into an engineering product.",

      description:
        "Legacy is my personal AI-focused portfolio built as a modular software product rather than a collection of static profile sections. The project explores component architecture, centralized content systems, interactive visual language, reusable project case studies, technical storytelling, and production deployment.",

      problem:
        "Many developer portfolios present skills and projects as isolated cards, making it difficult to communicate engineering decisions, system architecture, development challenges, and long-term technical direction.",

      problemTitle: "The portfolio limitation",

      solution:
        "Legacy introduces a modular portfolio architecture where content, interface components, motion, project data, and engineering case studies are separated into reusable systems that can evolve with my AI and software engineering journey.",

      solutionTitle: "The Legacy approach",
    },

    architecture: {
      label: "System Architecture",

      heading: "Modular by design. Built to evolve.",

      description:
        "Legacy separates content, presentation, interaction, project intelligence, and production concerns into focused layers so the portfolio can scale without turning into a tightly coupled interface.",

      items: [
        {
          number: "01",
          title: "Content Layer",
          description:
            "Centralizes portfolio content and project information outside visual components to reduce hardcoded interface data.",
          technologies: ["TypeScript Data", "Content Models", "Typed Props"],
        },
        {
          number: "02",
          title: "Component System",
          description:
            "Breaks the interface into focused reusable sections, layout components, UI primitives, and project detail renderers.",
          technologies: ["React", "Next.js", "Component Architecture"],
        },
        {
          number: "03",
          title: "Interaction Layer",
          description:
            "Adds controlled motion, hover feedback, active navigation tracking, and interactive AI-inspired visual behavior.",
          technologies: [
            "Motion",
            "Intersection Observer",
            "Micro-interactions",
          ],
        },
        {
          number: "04",
          title: "Case Study Engine",
          description:
            "Uses dynamic project routes and structured project data to render reusable engineering case studies.",
          technologies: ["Dynamic Routes", "Data-driven UI", "Next Link"],
        },
        {
          number: "05",
          title: "Production Layer",
          description:
            "Handles metadata, social identity, repository workflow, production builds, and continuous deployment.",
          technologies: ["SEO Metadata", "Git", "GitHub", "Vercel"],
        },
      ],
    },

    development: {
      label: "Development Status",

      heading: "Designed iteratively. Verified continuously.",

      description:
        "Legacy is developed through small architectural checkpoints. Features are validated locally, checked with lint and production builds, committed through Git, and verified again after deployment.",

      stages: [
        {
          status: "Implemented",
          label: "Production System",
          description:
            "Core portfolio architecture and primary user experience currently implemented and deployed.",
          features: [
            "Modular Next.js architecture",
            "Premium responsive interface foundation",
            "Interactive AI Core visual",
            "Motion and hover interaction system",
            "Active section navigation",
            "Dynamic project case-study routing",
            "Custom metadata and social identity",
            "Vercel production deployment",
          ],
        },
        {
          status: "In Development",
          label: "Active Engineering",
          description:
            "Current work focused on scalability, project storytelling, and production quality.",
          features: [
            "Reusable project detail schema",
            "Legacy engineering case study",
            "Additional project case studies",
            "Responsive device audit",
            "Accessibility improvements",
            "Performance optimization",
            "Dynamic project metadata",
          ],
        },
        {
          status: "Planned",
          label: "Before AI Integration",
          description:
            "Production improvements planned before connecting Jarvis-X intelligence with the portfolio.",
          features: [
            "Project-specific Open Graph metadata",
            "Sitemap and robots configuration",
            "Contact experience polish",
            "Full production route QA",
            "Architecture documentation",
            "Legacy v1 release checkpoint",
          ],
        },
      ],

      note:
        "Legacy remains under active development before the Jarvis-X integration phase.",
    },

    challenges: {
      label: "Engineering Challenges",

      heading: "Decisions that transformed the product.",

      description:
        "Legacy evolved through architectural and production problems that required changes beyond visual styling. Each challenge improved how the portfolio is structured, maintained, and deployed.",

      items: [
        {
          number: "01",
          title: "Component decomposition",
          problem:
            "Large portfolio sections risked mixing content, layout, interaction, and visual responsibilities inside individual components.",
          solution:
            "Separated sections into focused component boundaries and introduced dedicated data files, layout modules, UI components, and motion utilities.",
          lesson:
            "Good component boundaries reduce future redesign and maintenance cost.",
        },
        {
          number: "02",
          title: "Hardcoded project systems",
          problem:
            "The first Jarvis-X case study stored project-specific architecture, status, challenges, and roadmap content directly inside rendering components.",
          solution:
            "Designed a typed project detail schema and migrated case-study sections into reusable data-driven renderers connected through dynamic project routes.",
          lesson:
            "Reusable UI becomes scalable only when content architecture is reusable too.",
        },
        {
          number: "03",
          title: "Framework navigation rules",
          problem:
            "Internal portfolio routes were initially handled with standard anchor elements, creating lint errors and inconsistent navigation behavior.",
          solution:
            "Introduced Next.js Link for internal routes while preserving standard anchor behavior for external repositories.",
          lesson:
            "Framework conventions often encode important performance and navigation behavior.",
        },
        {
          number: "04",
          title: "Production deployment reality",
          problem:
            "A successful local build and ready deployment did not immediately guarantee that the expected production domain served the latest project route.",
          solution:
            "Verified deployment environments, distinguished Preview from Production, and promoted the correct deployment before validating the live route.",
          lesson:
            "Deployment verification is part of engineering, not an afterthought.",
        },
      ],
    },

    roadmap: {
      label: "Legacy v1 Roadmap",

      heading: "Production quality before intelligence integration.",

      description:
        "The next Legacy milestones focus on responsive quality, accessibility, performance, search visibility, and production reliability before Jarvis-X becomes part of the portfolio experience.",

      items: [
        {
          phase: "Phase 01",
          title: "Project System",
          description:
            "Complete reusable engineering case studies and connect verified projects through internal project routes.",
          systems: ["Case Study Schema", "Project Routes", "Project Data"],
        },
        {
          phase: "Phase 02",
          title: "Experience Audit",
          description:
            "Validate the interface across mobile, tablet, desktop, keyboard navigation, and reduced-motion preferences.",
          systems: ["Responsive QA", "Accessibility", "Reduced Motion"],
        },
        {
          phase: "Phase 03",
          title: "Production Optimization",
          description:
            "Improve metadata, project SEO, crawl configuration, rendering behavior, and production performance.",
          systems: ["Dynamic Metadata", "Sitemap", "Performance"],
        },
        {
          phase: "Phase 04",
          title: "Legacy v1",
          description:
            "Complete production QA, technical documentation, and a stable release checkpoint before Jarvis-X integration begins.",
          systems: ["Production QA", "Documentation", "Release"],
        },
      ],
    },

    cta: {
      label: "Legacy",

      heading: "A portfolio engineered to grow with the systems I build.",

      description:
        "Legacy documents my transition from building individual projects to thinking about reusable architecture, product experience, and production engineering.",

      primaryLabel: "View GitHub Repository →",

      secondaryLabel: "Explore More Projects",
    },

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Dynamic Routing",
      "SEO Metadata",
      "Vercel",
    ],

    github: "https://github.com/annukumarr/akp-portfolio",
  },
} satisfies Record<string, ProjectDetail>;

export type ProjectSlug = keyof typeof projectDetails;