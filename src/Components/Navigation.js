import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationMenu from "./NavigationMenu";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  let menuMask;

  if (showMenu) {
    menu = (
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">
        <NavigationMenu closeMenu={setShowMenu(false)} />
      </div>
    );
    menuMask = (
      <div
        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {menuMask}
      {menu}
    </nav>
  );
}
export default Navigation;
