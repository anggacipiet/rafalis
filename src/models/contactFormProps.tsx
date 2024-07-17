import { ReactNode, FormEvent } from "react";

export type IContactFormProps = {
  name: string;
  email: string;
  phone: string;
  message: string;
  button: ReactNode;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setMessage: (message: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};