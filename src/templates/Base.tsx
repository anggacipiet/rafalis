import { Meta } from '@/component/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { Features } from './Features';
import { HowToOrders } from './HowToOrder';
import { FAQ } from './Faq';
import { Steps } from './Step';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Features />
    <HowToOrders />
    <Steps />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

export { Base };