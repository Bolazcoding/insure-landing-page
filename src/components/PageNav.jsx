import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <>
      <ul className="flex flex-col items-center justify-center gap-8 text-center text-text-tertiary text-[1.4rem] font-bold mt-12">
        <li className="cursor effectNav">
          <NavLink>How we work</NavLink>
        </li>
        <li className="cursor effectNav">
          <NavLink>Blog</NavLink>
        </li>
        <li className="cursor effectNav">
          <NavLink>Account</NavLink>
        </li>
        <button className="navMobileList">
          <NavLink>View plans</NavLink>
        </button>
      </ul>
    </>
  );
}

export default PageNav;
