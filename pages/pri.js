import Head from "next/head";
import hero from "../styles/hero.module.css";

export default function Pri() {
  return (
    <>
      <Head>
        <title>CTM</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={hero.container}>
        <div className={hero.content}>
          <h2>Privacy policy</h2>
          <p></p>

          <p>
            This privacy policy sets out how CTM uses and protects any
            information that you give when you use this website.
          </p>
          <p>
            CTM is committed to ensuring that your privacy is protected.
            Should we ask you to provide certain information by which you can be
            identified when using this website, then you can be assured that it
            will only be used in accordance with this privacy statement.
          </p>
          <p>
            CTM may change this policy from time to time by updating this
            page. You should check this page from time to time to ensure that
            you are happy with any changes. This policy is effective from
            24/11/2017
          </p>
          <h2>What we collect</h2>
          <p>We may collect the following information:</p>
          <ul>
            <p>full name</p>
            <p>contact information including email address</p>
            <p>demographic information such as postcode and address</p>
          </ul>
          <p></p>
          <h2>What we do with the information we gather</h2>
          <p></p>
          <p>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>
          <p>Internal record keeping</p>
          <p>
            We may use the information to improve our products and services.
          </p>
          <p>We may periodically send promotional emails about new products</p>
          <p>
            From time to time, we may also use your information to contact you
            for market research purposes
          </p>
          <p></p>
          <h2>Security</h2>
          <p></p>
          <p>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure, we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
          </p>
          <h2>How we use cookies</h2>
          <p></p>

          <p>
            We use traffic log cookies to identify which pages are being used.
            This helps us analyse data about web page traffic and improve our
            website in order to tailor it to customer needs. We only use this
            information for statistical analysis purposes and then the data is
            removed from the system.
          </p>

          <p>
            You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent
            you from taking full advantage of the website.
          </p>
        </div>
      </section>
    </>
  );
}
