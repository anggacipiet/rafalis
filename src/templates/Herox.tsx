import ModalVideo from '@/component/video/ModalVideo';
import Link from 'next/link';
import { Button } from '@/component/button/MovingBorder';
import { Spotlight } from '@/component/background/Spotlight';
import { Navbar } from '@/component/navigation';
import { WhatsappButton } from "@/component/whatsappButton/WhatsappButton";

const Herox = () => {
  return (
    <section className="bg-black-600">
      <Navbar />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-white"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Bermitra dengan kami
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p 
                className="text-xl text-gray-600 mb-8 text-white"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                produsen dan supplier beton pracetak (precast), berkomitmen memberikan pelayanan yang terbaik kepada klien dan customer loyal kami. produk yang berkualitas, respon cepat, dan memenuhi standar kualitas yang telah ditentukan. Dengan pengalaman dan keahlian kami di bidang industri konstruksi.
              </p>
              <div 
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <Link legacyBehavior href="/products">
                  <a aria-label="Go to marketplace">
                    <Button
                      borderRadius="1.75rem"
                      className="bg-white bg-black-600 px-4 py-2 rounded-xl text-base font-normal text-white border-neutral-200 border-slate-800"
                    >
                      Marketplace →
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <ModalVideo
              thumb="/assets/images/main.svg"
              thumbWidth={768}
              thumbHeight={432}
              thumbAlt="Promotional video thumbnail showing main content"
              video="/assets/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080}
              aria-label="Watch the promotional video"
            />
          </div>
        </div>
      </div>
      
      <WhatsappButton />
    </section>
  );
};

export { Herox };