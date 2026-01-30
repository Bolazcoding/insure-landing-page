import Logo from "../../public/images/logo.svg?react";

function Header() {
  return (
    <header className="maxWidth">
      <div className="flex items-center justify-between py-4">
        <Logo />
        <nav>
          <ul className="flex items-center justify-center gap-6 text-text-secondary text-[0.8rem] font-medium">
            <li className="navList">How we work</li>
            <li className="navList">Blog</li>
            <li className="navList">Account</li>
            <li className="navList">
              <button className="navBtnList">View plans</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
