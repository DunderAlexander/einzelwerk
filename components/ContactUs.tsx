"use client";
import { useState } from "react";
import ContactUsModal from "./ContactUsModal";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ContactUsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="bg-button py-3 px-4 rounded-2xl"
      >
        Contact us
      </button>
    </div>
  );
};
export default ContactUs;
