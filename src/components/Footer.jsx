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
            className="w-7 h-7 cursor hover:bg-bg-primary transition-colors"
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
      <div className="flex gap-44 mt-12 max-[1100px]:gap-32 max-[913px]:gap-22">
        <div>
          <nav className="navList">
            <p className="navFooterHeader">Our company</p>
            <ul className="navFooterList flex flex-col gap-2 ">
              <li className="footerNav">How we work</li>
              <li className="footerNav">Why insure?</li>
              <li className="footerNav">View plans</li>
              <li className="footerNav">Reviews</li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="navList">
            <p className="navFooterHeader">Help me</p>
            <ul className="navFooterList flex flex-col gap-2">
              <li className="footerNav">Faq</li>
              <li className="footerNav">Terms of use</li>
              <li className="footerNav">Privacy Policy</li>
              <li className="footerNav">Cookies</li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="navList">
            <p className="navFooterHeader">Contact</p>
            <ul className="navFooterList flex flex-col gap-2">
              <li className="footerNav">Sales</li>
              <li className="footerNav">Support</li>
              <li className="footerNav">Live chat</li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="navList">
            <p className="navFooterHeader">Others</p>
            <ul className="navFooterList flex flex-col gap-2">
              <li className="footerNav">Careers</li>
              <li className="footerNav">Press</li>
              <li className="footerNav">Licenses</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
