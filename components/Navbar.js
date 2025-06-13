import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "../components/NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Services", href: "/services" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Book now", href: "/book" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"} className="Logo-container">
          <Image
              src="/images/ctm-logo.png" // The path to your logo in the public folder
              alt="CTM Cargo Logo"
              width={143} // Base width for aspect ratio
              height={36} // Base height for aspect ratio
              className="logo" // Class for specific image styling
              priority // Add priority to preload the logo as it's likely LCP
            />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
