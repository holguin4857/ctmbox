import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../styles/hero.module.css";
import buttons from "../styles/buttons.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>CTM Contact</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>Contact CTM: Your shipping solutions start here</h2>
          <p></p>

          <p>
          Have questions about shipping your cargo? We are here to help!.
          </p>
          <p>
            <strong>- Address:</strong> Cargo Transport Management LLC, 791 E Evans Blvd. Tucson, AZ ZIP 85713
          </p>
          <p><strong>- Tel:</strong> +1-520-358-9236, +1-480-318-7397 </p>
          <p><strong>- Email Rogelio Romo:</strong> rogelio@ctmbox.com</p>
          <p><strong>- Email Omar Holguin:</strong> omar@ctmbox.com</p>
          <p></p>
         

          <button className={buttons.button}>
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
        <div className="image">
          <Image
            src="/images/cargoship.png"
            alt="loading"
            width={550}
            height={550}
          />
        </div>
      </section>
    </>
  );
}
