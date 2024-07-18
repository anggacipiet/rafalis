import { QRScanMeLocation } from '@/component/location/QRScanMeLocation';
import { HoverEffect } from "@/component/card/card-hover-effect";
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { Section } from "@/component/layout/Section";

const Location = () => {
  // URL Google Maps yang ingin dituju
  const googleMapsUrl = 'https://www.google.com/maps/place/107.00659177478612,-6.4326057629037';

  const howToDotos = [
    {
      title: "Find Us",
      description: "Find our store location using Google Maps",
      link: googleMapsUrl,
      icon: <QRScanMeLocation mapUrl={googleMapsUrl} />,
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      link: "/contact-us",
      icon: (
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
            <a href="tel:+123456789" className="text-gray-800 dark:text-gray-300">+123456789</a>
          </div>
        </div>
      ),
    },
    {
      title: "Email Us",
      description: "Send us an email",
      link: "mailto:your-email@example.com",
      icon: (
        <div className="flex items-center space-x-4">
          <MailIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
          <a href="mailto:your-email@example.com" className="text-gray-800 dark:text-gray-300">your-email@example.com</a>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
      <Section>
      <HoverEffect items={howToDotos} />
      </Section>
    </div>  
  );
};

export { Location };