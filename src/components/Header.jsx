import Logo from "../../public/images/logo.svg?react";
import Image from "./Image";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="maxWidth">
      <div className="flex items-center justify-between py-4">
        <Logo />
        <nav className="navList">
          <ul className="flex items-center justify-center gap-8 text-text-secondary text-[1.1rem] font-bold max-[950px]:text-[1rem] max-[750px]:text-[0.87rem] max-[750px]:gap-5 max-[650px]:hidden">
            <li className="cursor effectNav">
              <NavLink>How we work</NavLink>
            </li>
            <li className="cursor effectNav">
              <NavLink>Blog</NavLink>
            </li>
            <li className="cursor effectNav">
              <NavLink>Account</NavLink>
            </li>
            <li className="cursor effectNav">
              <NavLink>
                <button className="navBtnList">View plans</button>
              </NavLink>
            </li>
          </ul>
          <Image
            src="/images/icon-hamburger.svg"
            alt="icon-hamburger"
            className="min-[650px]:hidden"
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
