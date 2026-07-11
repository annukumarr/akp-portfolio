import ProjectsHeader from "@/components/Projects/ProjectsHeader/ProjectsHeader";
import ProjectsGrid from "@/components/Projects/ProjectsGrid/ProjectsGrid";
import Container from "@/components/ui/Container";

export default function Projects() {
  return (
    <Container>
      <section id="projects" className="py-32">
        <ProjectsHeader />
        <ProjectsGrid />
      </section>
    </Container>
  );
}