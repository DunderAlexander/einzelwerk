"use client";

import { useEffect, useRef, useState } from "react";
import Menu from "../public/menu.svg";
// import Menu from "../public/menu.svg?svgr";

interface MenuItem {
  alias: string;
  pagetitle: string;
  menutitle: string;
  uri: string;
}

type Menu = MenuItem[];

interface BurgerMenuProps {
  menu: Menu;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, [isOpen]);

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="self-center">
      <Menu onClick={toggleMenu} className="md:hidden" />
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full py-10 bg-header-background transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-5">
          {menu.map((menuItem) => (
            <li key={menuItem.pagetitle}>{menuItem.pagetitle}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
