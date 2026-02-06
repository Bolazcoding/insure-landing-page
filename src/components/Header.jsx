import Logo from "../../public/images/logo.svg?react";

function Header() {
  return (
    <header className="maxWidth">
      <div className="flex items-center justify-between py-4">
        <Logo />
        <nav className="navList">
          <ul className="flex items-center justify-center gap-8 text-text-secondary text-[1.1rem] font-medium">
            <li className="cursor">How we work</li>
            <li className="cursor">Blog</li>
            <li className="cursor">Account</li>
            <li className="cursor">
              <button className="navBtnList">View plans</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
