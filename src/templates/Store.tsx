import { Meta } from '@/component/layout/Meta';
import { StoreProps } from '@/shared/props';
import { AppConfig } from '@/utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Marketplace } from './MarketPlace';
import { Navbar } from './Navbar';

const Store = ({products}: StoreProps) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar/>
    <Marketplace products={products}/>
    <Banner />
    <Footer />
  </div>
);

export { Store };

