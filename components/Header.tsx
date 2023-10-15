import Logo from "../public/einzelwerk.svg?svgr";
import BurgerMenu from "./BurgerMenu";
import LanguagePicker from "./LanguagePicker";

interface MenuItem {
  alias: string;
  pagetitle: string;
  menutitle: string;
  uri: string;
}

type Menu = MenuItem[];

const Header = ({ menu }: { menu: Menu }) => {
  return (
    <>
      <Logo />
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex gap-4">
          {menu.map((menuItem) => (
            <li key={menuItem.pagetitle}>{menuItem.pagetitle}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-stretch">
        <LanguagePicker />
        <button className="bg-button py-3 px-4 rounded-2xl">Contact us</button>
        <BurgerMenu menu={menu} />
      </div>
    </>
  );
};
export default Header;
