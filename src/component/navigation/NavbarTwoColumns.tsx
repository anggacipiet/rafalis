import { ReactNode } from 'react';
import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link legacyBehavior href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav className="flex flex-wrap items-center">
      <ul className="navbar flex flex-wrap font-medium text-xl text-gray-800">
        {props.children}
      </ul>
    </nav>

    <style jsx>{`
      .navbar :global(li:not(:first-child)) {
        margin-top: 0; /* Tailwind class equivalent: mt-0 */
      }

      .navbar :global(li:not(:last-child)) {
        margin-right: 1.25rem; /* Tailwind class equivalent: mr-5 */
      }
    `}</style>
  </div>
);

export { NavbarTwoColumns };