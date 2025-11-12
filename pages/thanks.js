import Head from "next/head";
import Link from "next/link";
import hero from "../styles/hero.module.css";
import buttons from "../styles/buttons.module.css";

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank you from CTM | Trucking Quote</title>
        <meta
          name="description"
          content="Thank you for your trucking quote request. A member of the CTM team will be in touch with you shortly."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>Thank You!</h2>

          <p>
            <strong>Your quote request has been successfully submitted.</strong>
          </p>

          <p>
            A member of our team is now reviewing your details. We will be in
            touch shortly with your quote or any additional questions.
          </p>

          <p>
            <strong>Need to Speak With Us Sooner?</strong>
          </p>

          <p>If your request is urgent, you can also contact us directly at:</p>

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
            For all trucking quotes and dispatch:
            <br />
            <strong>contact@ctmbox.com</strong>
          </p>

          <div className={buttons.buttonContainer}>
            <button className={buttons.button}>
              <Link href="book">Quote Again?</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
