import Head from "next/head";
import Link from "next/link";
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
            At CTM Cargo Transportation Management LLC, with our headquarters in
            Tucson, Arizona and our combined 40 years of logistics expertise to
            the table, we are perfectly positioned to manage your freight
            requirements, from local and cross-border trucking to comprehensive
            international freight forwarding.
            <strong> Get in touch! </strong> We are ready to answer your questions and provide you with a customized quote.
          </p>
          
          <p>
            <strong>Address:</strong><br />Cargo Transportation Management LLC, 791 E
            Evans Blvd. Tucson, AZ ZIP 85713
          </p>
          <p>
            <strong>Tels:</strong><br />+1-520-358-9236, +1-480-318-7397{" "}
          </p>
          <p>
            <strong>Email:</strong><br />
            For general enquiries and trucking services:<br />
            - Rogelio Romo: <strong>rogelio@ctmbox.com</strong><br />
            For international freight forwarding and other inquiries:<br />
            - Omar Holguin: <strong>omar@ctmbox.com</strong>
          </p>
         
          <p></p>

          <button className={buttons.button}>
            <Link href="book">
              Book now
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
