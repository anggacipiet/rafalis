import { Meta } from "@/component/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Message } from "./Message";
import { Navbar } from "./Navbar";

const Success = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar/>
    <Message></Message>
    <Banner />
    <Footer />
  </div>
);

export { Success };

