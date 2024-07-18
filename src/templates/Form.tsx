import { ContactForm } from "@/component/contact-form/contactForm";
import { IContactFormProps } from "@/models/contactFormProps";

const Form = (props: IContactFormProps) => {
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
  );
};

export default Form;
