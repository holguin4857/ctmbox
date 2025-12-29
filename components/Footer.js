import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  // 1. Detect Language
  const isSpanish = router.pathname.startsWith("/es");

  // 2. Helper to keep user in the correct language lane
  const getPath = (path) => {
    return isSpanish ? `/es${path}` : path;
  };

  return (
    <>
      <footer className="footer">
        <div className="cont">
          <div className="row">
            {/* Column 1: Terms */}
            <div className="footer-col">
              <h4>{isSpanish ? "Términos" : "Terms"}</h4>
              <ul>
                <li>
                  <Link href={getPath("/terms")}>
                    {isSpanish
                      ? "Términos y condiciones"
                      : "Terms and conditions"}
                  </Link>
                </li>
                <li>
                  <Link href={getPath("/pri")}>
                    {isSpanish ? "Política de privacidad" : "Privacy policy"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: About Us (Cleaned up) */}
            <div className="footer-col">
              <h4>{isSpanish ? "Nosotros" : "About us"}</h4>
              <ul>
                <li>
                  <Link href={isSpanish ? "/es" : "/"}>
                    {isSpanish ? "Inicio" : "Home"}
                  </Link>
                </li>
                <li>
                  <Link href={getPath("/about")}>
                    {isSpanish ? "Nosotros" : "About us"}
                  </Link>
                </li>
                <li>
                  <Link href={getPath("/contact")}>
                    {isSpanish ? "Contacto" : "Contact us"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Booking */}
            <div className="footer-col">
              <h4>{isSpanish ? "Reservas" : "Booking"}</h4>
              <ul>
                <li>
                  <Link href={getPath("/services")}>
                    {isSpanish ? "Servicios" : "Services"}
                  </Link>
                </li>
                <li>
                  <Link href={getPath("/live")}>
                    {isSpanish ? "Despacho" : "Dispatcher"}
                  </Link>
                </li>
                <li>
                  <Link href={getPath("/book")}>
                    {isSpanish ? "Reservar" : "Book now"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow us (Added Blog Here) */}
            <div className="footer-col">
              <h4>{isSpanish ? "Síguenos" : "Follow us"}</h4>
              <ul>
                <li>
                  <Link href="https://www.facebook.com/ctmbox" target="_blank">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/ctmbox"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </li>

                {/* --- MOVED BLOG LINK HERE --- */}
                <li style={{ marginTop: "10px" }}>
                  <Link href={getPath("/blog")}>
                    {isSpanish ? "CTM Noticias / Blog" : "CTM News / Blog"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
