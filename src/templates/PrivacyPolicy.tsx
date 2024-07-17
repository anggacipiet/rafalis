import LegalDocument from '@/component/compliance/LegalDocument';
import { PRIVACY_POLICY } from '@/component/constants/privacy-policy.const';
import { Meta } from '@/component/layout/Meta';
import { Section } from '@/component/layout/Section';
import { AppConfig } from '@/utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const PrivacyPolicy = () => (
  <div className="antialiased text-gray-600">
    <Navbar />
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Section
      title="Kebijakan Privacy"
      description="Baca kebijakan privasi kami dengan cermat. Jika Anda memiliki pertanyaan, hubungi kami."
    >
      <LegalDocument text={PRIVACY_POLICY} />
      <Banner />
    </Section>
    <Footer />
  </div>
);

export { PrivacyPolicy };
