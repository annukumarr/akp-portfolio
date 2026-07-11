import Container from "@/components/ui/Container";

import FooterBrand from "@/components/Footer/FooterBrand/FooterBrand";
import FooterLinks from "@/components/Footer/FooterLinks/FooterLinks";
import FooterBottom from "@/components/Footer/FooterBottom/FooterBottom";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <FooterBrand />

          <div className="md:flex md:justify-end">
            <FooterLinks />
          </div>
        </div>

        <div className="mt-16">
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}