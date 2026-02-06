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
            className="w-7 h-7"
          />
          <Image
            src="/images/icon-twitter.svg"
            alt="icon-twitter"
            className="w-7 h-7"
          />
          <Image
            src="/images/icon-pinterest.svg"
            alt="icon-pinterest"
            className="w-7 h-7"
          />
          <Image
            src="/images/icon-instagram.svg"
            alt="icon-instagram"
            className="w-7 h-7"
          />
        </div>
      </div>
      <hr className="mt-7 text-text-secondary" />
    </div>
  );
}

export default Footer;
