import Head from "next/head";
// The Link component is no longer needed for the button, but may be used elsewhere.
import Link from "next/link";
// 1. We need to import the Script component from Next.js
import Script from "next/script";
import hero from "../styles/hero.module.css";
import buttons from "../styles/buttons.module.css";

export default function Book() {
  return (
    <>
      <Head>
        <title>Book Your US-Mexico Shipment | CTM</title>
        <meta
          name="description"
          content="Ready to ship? Use our easy booking form to schedule your road or sea freight between the US and Mexico. Get a fast, reliable quote from the experts at CTM."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>Let&apos;s Plan Your Perfect Shipment, Together.</h2>
          <p></p>

          <p>
            Every shipment has a unique story. Let&apos;s write yours. Our
            process begins with a few simple questions. Your answers help us
            understand the specifics of your cargo and its journey.
          </p>
          <p>
            With this information, our team can craft a tailored logistics plan
            and provide a clear, all-inclusive quote. No complicated processes.
            Just a straightforward plan to get your goods where they need to go.
          </p>

          <p></p>

          {/* 2. THIS IS THE NEW BUTTON
            The old button with the <Link> inside has been replaced by this.
            It combines your styles with the required 'involveme_popup' class
            and includes the necessary data attributes for the script.
          */}
          <div className={buttons.buttonContainer}>
            <button
              className={`${buttons.button} involveme_popup`}
              data-project="CTM-quote"
              data-embed-mode="popup"
              data-trigger-event="button"
              data-popup-size="medium"
              data-organization-url="https://trexco.involve.me"
              data-title="CTM Quote"
            >
              Book Now
            </button>
          </div>
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
