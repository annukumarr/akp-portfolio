export const projectDetails = {
  "jarvis-x": {
    title: "Jarvis-X",
    category: "AI Operating System",
    status: "In Active Development",

    tagline:
      "Building an intelligent AI system designed to understand, remember, automate, and interact.",

    overview:
      "Jarvis-X is my long-term AI engineering project focused on building a modular intelligent system rather than a basic chatbot. The vision is to create an AI operating layer capable of voice interaction, contextual memory, task automation, and intelligent decision support.",

    problem:
      "Most digital assistants execute isolated commands but lack meaningful memory, modular intelligence, and deep integration with a user's workflow.",

    solution:
      "Jarvis-X explores a modular AI architecture where speech, memory, automation, and AI reasoning operate as independent systems connected through a central execution layer.",

    architecture: [
      {
        name: "Voice Interface",
        description:
          "Captures user speech and converts spoken commands into processable input.",
      },
      {
        name: "AI Core",
        description:
          "Processes intelligent queries and coordinates AI-driven responses.",
      },
      {
        name: "Command Engine",
        description:
          "Identifies executable commands and routes them to system actions.",
      },
      {
        name: "Memory System",
        description:
          "Stores contextual information to support long-term intelligent interactions.",
      },
      {
        name: "Automation Layer",
        description:
          "Executes system tasks and workflow automation.",
      },
      {
        name: "Speech Engine",
        description:
          "Converts system responses into natural voice output.",
      },
    ],

    features: [
      "Voice interaction",
      "AI-powered responses",
      "Command execution",
      "Application automation",
      "Contextual memory architecture",
      "Modular Python system",
      "Future RAG integration",
      "Future wake-word detection",
    ],

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
} as const;

export type ProjectSlug = keyof typeof projectDetails;