import { Meta } from "@/component/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { Banner } from "./Banner";
import { Description } from "./Description";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const About = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar/>
    <Description />
    <Banner />
    <Footer />
  </div>
);

export { About };

