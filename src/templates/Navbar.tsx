import Link from "next/link";
import { Background } from "@/component/background/Background";
import { Section } from "@/component/layout/Section";
import { NavbarTwoColumns } from "@/component/navigation/NavbarTwoColumns";
import { WhatsappButton } from "@/component/whatsappButton/WhatsappButton";
import { Logo } from "./Logo";

const Navbar = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="nav-item">
          <Link legacyBehavior href="/products">
            <a className="nav-link">Product</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/about">
            <a className="nav-link">About Us</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/meeting-point">
            <a className="nav-link">Lokasi</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <WhatsappButton/>
    <style jsx>{`
      .nav-item {
        margin-left: 0.5rem; /* Tailwind class equivalent: mx-2 */
        margin-right: 0.5rem; /* Tailwind class equivalent: mx-2 */
      }

      @media (min-width: 640px) {
        .nav-item {
          margin-left: 1rem; /* Tailwind class equivalent: sm:mx-4 */
          margin-right: 1rem; /* Tailwind class equivalent: sm:mx-4 */
        }
      }

      .nav-link {
        font-size: 1.125rem; /* Tailwind class equivalent: text-lg */
        color: #1f2937; /* Tailwind class equivalent: text-gray-800 */
      }
    `}</style>
  </Background>
);

export { Navbar };