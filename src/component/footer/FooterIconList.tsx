import { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex flex-wrap justify-center md:justify-start">
    {props.children}

    <style jsx>{`
      .footer-icon-list :global(a:not(:last-child)) {
        margin-right: 0.75rem; /* Tailwind class equivalent: mr-3 */
      }

      .footer-icon-list :global(a) {
        color: #6b7280; /* Tailwind class equivalent: text-gray-500 */
      }

      .footer-icon-list :global(a:hover) {
        color: #374151; /* Tailwind class equivalent: text-gray-700 */
      }

      .footer-icon-list :global(svg) {
        fill: currentColor; /* Tailwind class equivalent: fill-current */
        width: 1.25rem; /* Tailwind class equivalent: w-5 */
        height: 1.25rem; /* Tailwind class equivalent: h-5 */
      }
    `}</style>
  </div>
);

export { FooterIconList };