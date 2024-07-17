import { Meta } from "@/component/layout/Meta";
import { IContactFormProps } from "@/models/contactFormProps";
import { AppConfig } from "@/utils/AppConfig";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Section } from '@/component/layout/Section';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ContactForm } from "@/component/contact-form/contactForm";
import { MeetingPoint } from "./MeetingPoint";

const Contact = (props: IContactFormProps) => {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    handleSubmit,
    button,
  } = props;

  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <Section title="Hubungi Kami" description="Hubungi kami jika anda mempunyai pertanyaan mengenai harga dan spesifikasi tentang produk kami.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
            <FaEnvelope className="text-primary-500 text-3xl mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>marketing@rafalis.com</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
            <FaPhone className="text-primary-500 text-3xl mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Telp Office</h3>
              <p>+62 812-9421-2524</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
            <FaMapMarkerAlt className="text-primary-500 text-3xl mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p>Kp. Binong RT.03 RW.05 Desa Situsari Kec. Cileungsi Kab. Bogor</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex-grow">
              <MeetingPoint />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex-grow flex items-start">
              <ContactForm
                name={name}
                email={email}
                phone={phone}
                message={message}
                button={button}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
                setMessage={setMessage}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export { Contact };