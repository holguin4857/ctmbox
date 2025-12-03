import Head from "next/head";
import Link from "next/link";
import hero from "../styles/hero.module.css";
import buttons from "../styles/buttons.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact CTM for a Free Shipping Quote</title>
        <meta
          name="description"
          content="Ready to ship? Contact the experts at CTM today for a free quote on your cross-border road or sea freight needs. Let&apos;s simplify your logistics."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>Contact CTM: Your shipping solutions start here</h2>
          <p></p>

          <p>
            At CTM Cargo Transportation Management LLC, with our headquarters in
            Tucson, Arizona and our combined 40 years of logistics expertise to
            the table, we are perfectly positioned to manage your freight
            requirements, from local and cross-border trucking to comprehensive
            international freight forwarding.
            <strong> Get in touch! </strong> We are ready to answer your
            questions and provide you with a customized quote.
          </p>

          <p>
            <strong>Address:</strong>
            <br />
            Cargo Transportation Management LLC, 791 E Evans Blvd. Tucson, AZ
            ZIP 85713
          </p>
          <p>
            <strong>Tel:</strong>
            <br />
            +1-520-352-7255 <br />
            Call us and select your preferred language. For English, press 1,
            Para Español, oprima 2.
          </p>

          <p>
            <strong>Email:</strong>
            <br />
            For general enquiries:
            <br />
            <strong>contact@ctmbox.com</strong>
          </p>
        

          <p></p>

          <div className={buttons.buttonContainer}>
            <button className={buttons.button}>
              <Link href="book">Book now</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
