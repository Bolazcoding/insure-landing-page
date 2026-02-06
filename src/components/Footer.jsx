import Image from "./Image";
import Logo from "../../public/images/logo.svg?react";

function Footer() {
  return (
    <div className="maxWidth">
      <div className="flex justify-between">
        <Logo />
        <div className="flex gap-6">
          <Image
            src="/images/icon-facebook.svg"
            alt="icon-facebook"
            className="w-7 h-7 cursor"
          />
          <Image
            src="/images/icon-twitter.svg"
            alt="icon-twitter"
            className="w-7 h-7 cursor"
          />
          <Image
            src="/images/icon-pinterest.svg"
            alt="icon-pinterest"
            className="w-7 h-7 cursor"
          />
          <Image
            src="/images/icon-instagram.svg"
            alt="icon-instagram"
            className="w-7 h-7 cursor"
          />
        </div>
      </div>
      <hr className="mt-9 text-text-secondary" />
      {/* <hr className="border-t border-dotted border-text-secondary"></hr> */}
      {/* <div className="w-full h-px bg-text-secondary" /> */}
      <div className="flex gap-47 mt-12">
        <div>
          <nav className="navList">
            <p className="navFooterHeader">Our company</p>
            <ul className="navFooterList flex flex-col gap-2">
              <li>How we work</li>
              <li>Why insure?</li>
              <li>View plans</li>
              <li>Reviews</li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="navList">
            <p className="navFooterHeader">Help me</p>
            <ul className="navFooterList flex flex-col gap-2">
              <li>Faq</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="navList">
            <p className="navFooterHeader">Contact</p>
            <ul className="navFooterList flex flex-col gap-2">
              <li>Sales</li>
              <li>Support</li>
              <li>Live chat</li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="navList">
            <p className="navFooterHeader">Others</p>
            <ul className="navFooterList flex flex-col gap-2">
              <li>Careers</li>
              <li>Press</li>
              <li>Licenses</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
