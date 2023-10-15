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
    <div className="flex justify-between items-center px-4 py-2 mt-4 w-full rounded-3xl bg-header-background text-white">
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
    </div>
  );
};
export default Header;
