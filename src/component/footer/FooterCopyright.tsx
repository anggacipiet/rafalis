import { AppConfig } from '../../utils/AppConfig';
import Link from 'next/link';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}
    <br />
    <Link href="">Privacy Policy</Link>

    <style jsx>{`
      .footer-copyright :global(a) {
        @apply text-primary-500;
      }

      .footer-copyright :global(a:hover) {
        @apply underline;
      }
    `}</style>
  </div>
);

export { FooterCopyright };