import ContactHeader from "@/components/Contact/ContactHeader/ContactHeader";
import ContactContent from "@/components/Contact/ContactContent/ContactContent";
import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <Container>
      <section id="contact" className="py-32">
        <ContactHeader />
        <ContactContent />
      </section>
    </Container>
  );
}