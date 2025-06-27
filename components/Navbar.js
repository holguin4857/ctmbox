import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavItem from "../components/NavItem";
import { useRouter } from "next/router";

// --- MODIFIED MENU_LIST ---
const MENU_LIST = [
  { enText: "Home", esText: "Inicio", href: "/" },
  { enText: "Services", esText: "Servicios", href: "/services" },
  { enText: "About Us", esText: "Nosotros", href: "/about" }, // Changed to "Nosotros" for common Spanish usage
  { enText: "Contact", esText: "Contacto", href: "/contact" },
  { enText: "Book now", esText: "Reservar Ahora", href: "/book" }, // Changed to "Reservar Ahora"
];
// --- END MODIFIED MENU_LIST ---

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();

  // Determine the current language based on the path
  const isSpanish = router.pathname.startsWith("/es");

  // Function to toggle language
  const toggleLanguage = () => {
    let newPath;
    if (isSpanish) {
      newPath = router.pathname.replace("/es", "") || "/";
      if (newPath === '') newPath = '/';
    } else {
      newPath = `/es${router.pathname}`;
      if (newPath === '/es/') newPath = '/es';
    }
    router.push(newPath);
  };

  // Optional: Highlight active navigation item based on current route
  useEffect(() => {
    const currentPath = router.pathname;
    const currentBaseHref = isSpanish ? currentPath.replace('/es', '') || '/' : currentPath;

    const currentIdx = MENU_LIST.findIndex(
      (menu) => menu.href === currentBaseHref
    );
    if (currentIdx !== -1 && activeIdx !== currentIdx) {
      setActiveIdx(currentIdx);
    }
  }, [router.pathname, activeIdx, isSpanish]);


  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"} className="Logo-container">
          <Image
            src="/images/ctm-logo.png"
            alt="CTM Cargo Logo"
            width={143}
            height={36}
            className="logo"
            priority
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
          {MENU_LIST.map((menu, idx) => {
            // Determine the text based on the current language
            const displayText = isSpanish ? menu.esText : menu.enText;

            // Adjust href for Spanish pages if current language is Spanish
            const adjustedHref = isSpanish ? `/es${menu.href === '/' ? '' : menu.href}` : menu.href;
            const finalHref = adjustedHref === '/es/' ? '/es' : adjustedHref;

            return (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.enText} // Use enText as key for consistency
              >
                {/* Pass the dynamic text and adjusted href to NavItem */}
                <NavItem active={activeIdx === idx} text={displayText} href={finalHref} />
              </div>
            );
          })}

          {/* Language Toggle Button */}
          <div className="language-toggle">
            <button
              onClick={toggleLanguage}
              className="language-button"
            >
              {isSpanish ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;