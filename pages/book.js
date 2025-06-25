import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
         

          <button className={buttons.button}>
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
       
      </section>
    </>
  );
}
