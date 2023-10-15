import { Dispatch, SetStateAction } from "react";
import ContactUsModalSelect from "./ContactUsModalSelect";

type ContactUsModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ContactUsModal: React.FC<ContactUsModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
      />
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 rounded-2xl drop-shadow-2xl bg-white text-gray-900 p-6 w-3/4 max-w-lg z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <h1 className="text-4xl font-arboria-medium">Drop us a line</h1>
        <p>
          Our documentary campaigns feature leading figures, organisations and
          leaders, in open and candid discussions.
        </p>
        <form className="flex flex-col gap-4">
          <input
            className="bg-gray-100 p-4 rounded-2xl border border-gray-200"
            type="text"
            placeholder="Name"
            name="name"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              className="bg-gray-100 p-4 rounded-2xl border border-gray-200"
              type="tel"
              placeholder="Phone"
              name="tel"
            />
            <input
              className="bg-gray-100 p-4 rounded-2xl border border-gray-200"
              type="email"
              placeholder="E-mail"
              name="email"
            />
          </div>
          <ContactUsModalSelect />
          <div className="flex gap-4">
            <input className="w-5 rounded-2xl" type="checkbox" name="agree" />
            <label htmlFor="agree">
              I&apos;m agree with every data you collect
            </label>
          </div>
          <button
            className="bg-blue-700 p-3 rounded-full text-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactUsModal;
