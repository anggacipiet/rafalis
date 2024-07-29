import ModalVideo from '@/component/video/ModalVideo';
import Link from 'next/link';
import { Button } from '@/component/button/MovingBorder';
import { Spotlight } from '@/component/background/Spotlight';
import { Navbar } from './Navbar';
import VideoThumb from '@/public/assets/images/main.svg';

const Herox = () => {
  return (
    <section className="relative bg-black-600">
      <Navbar></Navbar>
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}

        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-white" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Bermitra dengan kami</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 text-white" data-aos="zoom-y-out" data-aos-delay="150">produsen dan supplier beton pracetak (precast), berkomitmen memberikan pelayanan yang terbaik kepada klien dan customer loyal kami. produk yang berkualitas, respon cepat, dan memenuhi standar kualitas yang telah ditentukan. Dengan pengalaman dan keahlian kami di bidang industri konstruksi.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <Link legacyBehavior href="/products">
                  <a>
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
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/assets/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  )
}

export { Herox };