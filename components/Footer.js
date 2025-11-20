import Link from "next/link";

export default function Footer () {
    return ( 
        <>
        <footer className="footer">
          <div className="cont">
            <div className="row">
              <div className="footer-col">
                <h4>Terms</h4>
                <ul>
                  <li><Link href="terms">Terms and conditions</Link></li>
                  <li><Link href="pri">Privacy policy</Link></li>
                  
                </ul>
              </div>
              <div className="footer-col">
                <h4>About us</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="about">About us</Link></li>
                  <li><Link href="contact">Contact us</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Booking</h4>
                <ul>
                  <li><Link href="services">Services</Link></li>
                  <li><Link href="live">Dispatcher</Link></li>
                  <li><Link href="book">Book now</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Follow us</h4>
                <ul>
                  <li><Link href="https://www.facebook.com/ctmbox">Facebook</Link></li>
                  <li><Link href="https://twitter.com">Twitter</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        
        </>
    )
}