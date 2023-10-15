"use client";
import Image from "next/image";
import { useState } from "react";
import Arrow from "/arrow.svg";

const options = [
  { value: "en", label: "En", flag: "/Flag_of_the_United_Kingdom.svg" },
  { value: "de", label: "De", flag: "/Flag_of_Germany.svg" },
];

const LanguagePicker = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-transparent py-3 px-4 border border-gray-500 rounded-2xl flex gap-4 items-center justify-between"
      >
        <Image
          src={selectedOption.flag}
          alt={selectedOption.label}
          width={64}
          height={64}
          className="rounded-full w-6 h-6 object-cover"
        />
        <span>{selectedOption.label}</span>
        <Arrow
          className={`h-5 w-5 transition-all ${
            isOpen ? "transform rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-4 absolute w-full mt-2 py-4 bg-white text-gray-900 rounded-2xl shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="flex gap-4 px-3 py-1 hover:bg-gray-100 cursor-pointer"
            >
              <Image
                src={option.flag}
                alt={option.label}
                width={64}
                height={64}
                className="rounded-full w-6 h-6 object-cover"
              />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguagePicker;
