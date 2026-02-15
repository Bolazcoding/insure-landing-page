import { NavLink } from "react-router-dom";
import Image from "./Image";
import PageNav from "./PageNav";

function MobileNavMenu() {
  return (
    <nav className="navList fixed inset-0 bg-text-primary text-white z-40 mt-21.5 transform transition-transform duration-300 translate-y-0 min-[650px]:hidden">
      <PageNav />
    </nav>
  );
}

export default MobileNavMenu;
