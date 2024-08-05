import { ReactNode } from 'react';
import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  menu: ReactNode;
  qr: ReactNode;
  contactInfo: ReactNode;
  iconList: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Column 1: Logo */}
      <div className="flex flex-col justify-center md:justify-start items-start mb-4 md:mb-0">
        {props.logo}
      </div>

      {/* Column 2: Menu */}
      <div className="flex flex-col justify-center md:justify-start items-start mb-4 md:mb-0">
        <h2 className="text-xl font-bold mb-2">Company</h2>
        <ul className="space-y-2 text-gray-800 font-medium">
          {props.menu}
        </ul>
      </div>

      {/* Column 3: QR Code */}
      <div className="flex flex-col justify-center md:justify-start items-start mb-4 md:mb-0">
        <h2 className="text-xl font-bold mb-2">Scan Me</h2>
        {props.qr}
      </div>

      {/* Column 4: Contact Info */}
      <div className="flex flex-col justify-center md:justify-start items-start mb-4 md:mb-0">
        {props.contactInfo}
      </div>

      {/* Column 5: Social Icons */}
      <div className="flex flex-col justify-center md:justify-start items-start">
        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
        <div className="flex flex-wrap gap-2">
          <FooterIconList>{props.iconList}</FooterIconList>
        </div>
      </div>
    </div>

    <div className="mt-8 text-sm text-center">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };