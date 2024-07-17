import { IContactFormProps } from '@/models/contactFormProps';

const ContactForm = (props: IContactFormProps) => {
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
    button
  } = props;

  return (
    <form onSubmit={handleSubmit} className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Nama
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Masukkan Nama Anda"
          required
          minLength={3}
          maxLength={50}
          pattern="[a-zA-ZÀ-ÿ\s]+"
          title="Silakan masukkan nama yang valid"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Masukkan email Anda"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Silakan masukkan email yang benar"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="phone"
          id="phone"
          placeholder="Masukkan Ponsel Anda"
          required
          pattern="[0-9]{10}"
          title="Silahkan masukkan nomor telepon yang benar"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Masukkan pesan Anda"
          required
          minLength={10}
          maxLength={500}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">{button}</div>
    </form>
  );
};

export { ContactForm };