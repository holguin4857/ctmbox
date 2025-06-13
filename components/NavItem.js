// components/NavItem.js

import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  // Construct the className directly, as it will be applied to the <Link> component
  // Next.js will automatically render an <a> tag internally, which will inherit these classes.
  const linkClassName = `nav_item ${active ? "active" : ""}`;

  return (
    <Link href={href} className={linkClassName}>
      {text}
    </Link>
  );
};

export default NavItem;
