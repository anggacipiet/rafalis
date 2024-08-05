import Link from 'next/link';
import { QRScanMeLocation } from '@/component/location/QRScanMeLocation';
import { CenteredFooter } from '@/component/footer/CenteredFooter';
import { Logo } from './Logo';

const googleMapsUrl = 'https://www.google.com/maps/place/107.00659177478612,-6.4326057629037';

const Footer = () => (
  <footer className="bg-gray-100 py-8 px-4">
    <CenteredFooter
      logo={<Logo />}
      menu={
        <>
          <li>
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Store">
              <a>Product</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/meeting-point">
              <a>Lokasi</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </>
      }
      qr={<QRScanMeLocation mapUrl={googleMapsUrl} />}
      contactInfo={
        <div className="flex flex-col gap-2 text-left">
          <div>
            <h2 className="text-2xl font-bold">Address</h2>
            <p>
              Kp. Binong RT.03 RW.05 <br />
              Desa Situsari Kec. Cileungsi Kab. Bogor
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Telp</h2>
            <p>+62 812-9421-2524</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Email</h2>
            <p>marketing@rafalis.com</p>
          </div>
        </div>
      }
      iconList={
        <>
          <Link legacyBehavior href="">
            <a target="_blank" className="flex items-center space-x-2">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" fill="#758CA3" />
              </svg>
              <span className="hidden md:inline">@facebook_username</span>
            </a>
          </Link>
          <Link legacyBehavior href="">
            <a target="_blank" className="flex items-center space-x-2">
              <svg width="24px" height="24px" viewBox="49.605 0 2834.65 2834.65" xmlns="http://www.w3.org/2000/svg"><circle cx="1466.93" cy="1417.324" r="1417.324" fill="#758CA3"/><path d="M1892.128 726.379h-850.395c-147.639 0-265.749 118.11-265.749 265.749v850.394c0 147.639 118.11 265.748 265.749 265.748h850.395c147.638 0 265.749-118.109 265.749-265.748V992.127c0-147.638-118.112-265.748-265.749-265.748zm76.772 159.449h29.527V1122.048h-236.221v-236.22H1968.9zm-696.851 389.765c41.338-59.056 118.11-100.395 194.882-100.395s153.544 41.339 194.882 100.395c29.527 41.338 47.244 88.582 47.244 141.732 0 135.826-112.205 242.126-242.126 242.126-129.922 0-242.126-106.299-242.126-242.126-.001-53.15 17.716-100.394 47.244-141.732zm750.001 566.929c0 70.867-59.056 129.922-129.922 129.922h-850.395c-70.866 0-129.922-59.055-129.922-129.922v-566.929h206.693c-17.717 41.338-29.527 94.488-29.527 141.732 0 206.693 171.26 377.953 377.953 377.953s377.953-171.26 377.953-377.953c0-47.244-11.812-100.395-29.527-141.732h206.692l.002 566.929z" fill="#ffffff"/></svg>
              <span className="hidden md:inline">@instagram_username</span>
            </a>
          </Link>
          <Link legacyBehavior href="">
            <a target="_blank" className="flex items-center space-x-2">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.56c-.883.392-1.83.656-2.828.775a4.932 4.932 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.127 1.196 4.916 4.916 0 0 0-8.367 4.482A13.95 13.95 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.557 4.902 4.902 0 0 1-2.229-.616c-.054 2.07 1.444 4.023 3.637 4.457a4.935 4.935 0 0 1-2.224.085 4.923 4.923 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 21.54a13.94 13.94 0 0 0 7.548 2.213c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.014-.636a10.025 10.025 0 0 0 2.466-2.548" fill="#758CA3" />
              </svg>
              <span className="hidden md:inline">@twitter_username</span>
            </a>
          </Link>
        </>
      }
    />
  </footer>
);

export { Footer };