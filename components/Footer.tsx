// import FooterArrow from "../public/footer_arrow.svg?svgr";
// import InstagramLogo from "../public/instagram.svg?svgr";
// import TwitterLogo from "../public/twitter.svg?svgr";
// import LinkedInLogo from "../public/linkedin.svg?svgr";
// import YouTubeLogo from "../public/youtube.svg?svgr";

import FooterArrow from "../public/footer_arrow.svg";
import InstagramLogo from "../public/instagram.svg";
import TwitterLogo from "../public/twitter.svg";
import LinkedInLogo from "../public/linkedin.svg";
import YouTubeLogo from "../public/youtube.svg";

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
    <footer className="flex flex-col gap-16 bg-footer pt-14 pb-8 px-4 lg:px-16 font-arboria-book">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        <h1 className="font-arboria-medium text-6xl md:text-9xl max-w-4xl">
          {sitename}
        </h1>
        <button className="rounded-full w-24 h-24 flex justify-center items-center bg-blue-600 flex-shrink-0 lg:translate-y-5 lg:-translate-x-8">
          <span>
            <FooterArrow />
          </span>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-sm">
        <ul className="flex gap-2 items-center">
          <li>GMP © 2023</li>
          <li>
            <a href={social.instagram}>
              <InstagramLogo />
            </a>
          </li>
          <li>
            <a href={social.linkedin}>
              <LinkedInLogo />
            </a>
          </li>
          <li>
            <a href={social.twitter}>
              <TwitterLogo />
            </a>
          </li>
          <li>
            <a href={social.youtube}>
              <YouTubeLogo />
            </a>
          </li>
        </ul>
        <ul className="flex gap-2 items-center">
          {footer.map((item) => (
            <li key={item.alias}>{item.pagetitle}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
