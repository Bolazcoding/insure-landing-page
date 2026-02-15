import { useState } from "react";
import Logo from "../../public/images/logo.svg?react";
import Image from "./Image";
import { NavLink } from "react-router-dom";
import MobileNavMenu from "./MobileNavMenu";
import PageNav from "./PageNav";

function Header() {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="maxWidth flex items-center justify-between py-4 max-[650px]:py-6">
          <Logo />
          <div>
            {IsOpen ? (
              <button
                className="min-[650px]:hidden"
                onClick={() => setIsOpen(false)}
              >
                <Image src="/images/icon-close.svg" alt="icon-close" />
              </button>
            ) : (
              <button
                className="min-[650px]:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Image src="/images/icon-hamburger.svg" alt="icon-hamburger" />
              </button>
            )}
          </div>

          {IsOpen ? (
            <MobileNavMenu />
          ) : (
            <nav className="navList max-[650px]:hidden min-[650px]:block overflow-hidden">
              <ul className="flex items-center justify-center gap-8 text-text-secondary text-[1.1rem] font-bold max-[950px]:text-[1rem] max-[750px]:text-[0.87rem] max-[750px]:gap-5 ">
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
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
