import { AppConfig } from "@/utils/AppConfig";

type ILogoProps = {
  xl?: boolean; // Optional prop to determine if the logo should be extra large
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? "font-semibold text-2xl"
    : "font-semibold text-lg";

  return (
    <span className={`text-gray-900 inline-flex items-center gap-x-2 ${fontStyle}`}>
      <img
        src="/assets/images/rafalis.jpeg" // Replace with your JPEG image path
        alt="Rafalis Logo" // Descriptive alt text for SEO
        className="h-10 w-auto sm:h-12 sm:w-auto md:h-16 md:w-auto lg:h-20 lg:w-auto" // Responsive sizes with automatic width
      />
    </span>
  );
};

export { Logo };