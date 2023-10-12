interface FooterItem {
  alias: string;
  pagetitle: string;
  menutitle: string;
  uri: string;
}
interface Social {
  instagram: string;
  linkedin: string;
  twitter: string;
  youtube: string;
}

type Footer = FooterItem[];

const Footer = ({
  footer,
  social,
  sitename,
}: {
  footer: Footer;
  social: Social;
  sitename: string;
}) => {
  return (
    <footer>
      <div>
        <h1>{sitename}</h1>
      </div>
      <div>
        <ul>
          <li>GMP © 2023</li>
          <li>Insta</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
        <ul>
          {footer.map((item) => (
            <li key={item.alias}>{item.pagetitle}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
