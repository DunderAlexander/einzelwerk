import Logo from "../public/einzelwerk.svg?svgr";
import BurgerMenu from "../public/menu.svg?svgr";

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
      <div className="flex gap-4 items-center">
        <div className="hidden">lang_picker_placeholder</div>
        <button className="bg-button py-3 px-4 rounded-2xl">Contact us</button>
        <BurgerMenu className="md:hidden" />
      </div>
    </>
  );
};
export default Header;
