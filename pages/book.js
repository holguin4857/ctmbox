import Head from "next/head";
// The Link component is no longer needed for the button, but may be used elsewhere.
import Link from "next/link"; 
// 1. We need to import the Script component from Next.js
import Script from 'next/script'; 
import hero from "../styles/hero.module.css";
import buttons from "../styles/buttons.module.css";

export default function Book() {
  return (
    <>
      <Head>
        <title>CTM Book</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>Ready to Ship? Start Your Booking Here</h2>
          <p></p>

          <p>
            Don&apos;t waste time navigating complicated booking processes. Our
            streamlined form makes it simple to request a quote and book your
            shipment. We are here to answer any questions you may have along the
            way.
          </p>
          
          <p></p>
          
          {/* 2. THIS IS THE NEW BUTTON
            The old button with the <Link> inside has been replaced by this.
            It combines your styles with the required 'involveme_popup' class
            and includes the necessary data attributes for the script.
          */}
          <button 
            className={`${buttons.button} involveme_popup`}
            data-project="trexco-personalized-quote"
            data-embed-mode="popup"
            data-trigger-event="button"
            data-popup-size="medium"
            data-organization-url="https://trexco.involve.me"
          >
            Book Now
          </button>
        </div>
        
      </section>

      {/* 3. ADD THE SCRIPT HERE
        This loads the involve.me JavaScript. By placing it here with the
        'afterInteractive' strategy, we ensure it doesn't slow down your
        page's initial load time.
      */}
      <Script 
        src="https://trexco.involve.me/embed?type=popup" 
        strategy="afterInteractive" 
      />
    </>
  );
}
