import { useState } from "react";
import Arrow from "/arrow.svg";

const INIT_OPTION = {
  value: "",
  label: "Your Skill",
};

const options = [
  { value: "junior", label: "Junior" },
  { value: "middle", label: "Middle" },
  { value: "senior", label: "Senior" },
  { value: "lead", label: "Lead" },
  { value: "cto", label: "CTO" },
];

const ContactUsModalSelect = () => {
  const [selectedOption, setSelectedOption] = useState(INIT_OPTION);
  const [isOpen, setIsOpen] = useState(false);
  const [isChosen, setIsChosen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsChosen(true);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        type="button"
        className={`flex justify-between bg-gray-100 w-full p-4 rounded-2xl border border-gray-200 ${
          isChosen ? "text-gray-900 font-arboria-medium" : "text-gray-400"
        }`}
      >
        <span>{selectedOption.label}</span>
        <Arrow
          className={`h-5 w-5 transition-all fill-gray-900 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <ul className="flex flex-col absolute w-full bg-white text-gray-900 rounded-2xl shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="flex p-3 hover:bg-gray-100 hover:rounded-2xl cursor-pointer border-b border-gray-200 last:border-none"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ContactUsModalSelect;
