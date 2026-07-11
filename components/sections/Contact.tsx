import ContactHeader from "@/components/Contact/ContactHeader/ContactHeader";
import ContactContent from "@/components/Contact/ContactContent/ContactContent";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";

export default function Contact() {
  return (
    <Container>
      <section id="contact" className="py-32">
        <FadeIn>
          <ContactHeader />
        </FadeIn>

        <FadeIn delay={0.15} y={32}>
          <ContactContent />
        </FadeIn>
      </section>
    </Container>
  );
}