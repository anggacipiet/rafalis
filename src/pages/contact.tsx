import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { Contact } from '@/templates/Contact';

const ContactPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
      message,
    };

    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (rawResponse.status !== 201) {
      // Handle errors
      console.error(`Error: ${rawResponse.status}`);
      return;
    }

    // Reset the form fields
    setMessage("");
    setPhone("");
    setName("");
    setEmail("");

    // Redirect to the success page
    router.push("/success");
  };

  return (
    <Contact
      name={name}
      email={email}
      phone={phone}
      message={message}
      button={
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Kirim
        </button>
      }
      setName={setName}
      setEmail={setEmail}
      setPhone={setPhone}
      setMessage={setMessage}
      handleSubmit={handleSubmit}
    />

  );
};

export default ContactPage;
