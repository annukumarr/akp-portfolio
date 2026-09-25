export type JarvisAction =
  | "home"
  | "journey"
  | "projects"
  | "contact";

const sectionMap: Record<JarvisAction, string> = {
  home: "home",
  journey: "journey",
  projects: "projects",
  contact: "contact",
};

export function executeJarvisAction(action: JarvisAction) {
  const targetId = sectionMap[action];

  const element = document.getElementById(targetId);

  if (!element) {
    console.warn(`JARVIS-X: Section "${targetId}" not found.`);
    return false;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  return true;
}

export function detectJarvisAction(
  message: string
): JarvisAction | null {
  const command = message.toLowerCase().trim();

  // Home
  if (
    command.includes("go home") ||
    command.includes("take me home") ||
    command.includes("show home") ||
    command.includes("homepage") ||
    command === "home"
  ) {
    return "home";
  }

  // Journey
  if (
    command.includes("journey") ||
    command.includes("my journey") ||
    command.includes("show my journey") ||
    command.includes("show journey") ||
    command.includes("take me to journey")
  ) {
    return "journey";
  }

  // Projects
  if (
    command.includes("project") ||
    command.includes("projects") ||
    command.includes("show projects") ||
    command.includes("my projects") ||
    command.includes("take me to projects")
  ) {
    return "projects";
  }

  // Contact
  if (
    command.includes("contact") ||
    command.includes("contact me") ||
    command.includes("get in touch") ||
    command.includes("reach out")
  ) {
    return "contact";
  }

  return null;
}