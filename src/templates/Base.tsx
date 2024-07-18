import { Meta } from '@/component/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { Features } from './Features';
import { FAQ } from './Faq';
import { Steps } from './Step';
import { Location } from './Location';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Features />
    <Steps />
    <FAQ />
    <Location />
    <Banner />
    <Footer />
  </div>
);

export { Base };