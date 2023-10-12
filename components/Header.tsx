interface MenuItem {
  alias: string;
  pagetitle: string;
  menutitle: string;
  uri: string;
}

type Menu = MenuItem[];

const Header = ({ menu }: { menu: Menu }) => {
  return (
    <header>
      <img src="/einzelwerk.svg" alt="logo" />
      <div>
        <ul>
          {menu.map((menuItem) => (
            <li key={menuItem.pagetitle}>{menuItem.pagetitle}</li>
          ))}
        </ul>
        <div>lang_picker_placeholder</div>
      </div>
      <button>Contact Us</button>
      <img src="/menu.svg" alt="menu" />
    </header>
  );
};
export default Header;
