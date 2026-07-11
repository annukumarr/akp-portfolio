import Container from "@/components/ui/Container";

import NavbarBrand from "@/components/Navbar/NavbarBrand/NavbarBrand";
import NavbarLinks from "@/components/Navbar/NavbarLinks/NavbarLinks";
import NavbarActions from "@/components/Navbar/NavbarActions/NavbarActions";
import MobileMenu from "@/components/Navbar/MobileMenu/MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavbarBrand />

          <NavbarLinks />

          <div className="hidden md:block">
            <NavbarActions />
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}