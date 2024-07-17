import Link from 'next/link';

import { Button } from '@/component/button/Button';
import { CTABanner } from '@/component/cta/CTABanner';
import { Section } from '@/component/layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Marketplace facebook kami"
      subtitle=""
      button={
        <Link legacyBehavior href="">
          <a target="_blank">
            <Button>Kunjungi</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
