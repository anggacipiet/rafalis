import { ReactNode } from 'react';
import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <nav>
      <ul className="navbar mt-5 flex flex-wrap justify-center font-medium text-base text-gray-800">
        {props.children}
      </ul>
    </nav>

    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>{`
      .navbar :global(li) {
        margin-left: 0.5rem; /* Tailwind class equivalent: mx-2 */
        margin-right: 0.5rem; /* Tailwind class equivalent: mx-2 */
      }

      @media (min-width: 640px) {
        .navbar :global(li) {
          margin-left: 1rem; /* Tailwind class equivalent: sm:mx-4 */
          margin-right: 1rem; /* Tailwind class equivalent: sm:mx-4 */
        }
      }
    `}</style>
  </div>
);

export { CenteredFooter };