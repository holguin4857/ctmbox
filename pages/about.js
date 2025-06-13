import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import about from "../styles/about.module.css";
import buttons from "../styles/buttons.module.css";
import features from "../styles/features.module.css";
import hero from "../styles/hero.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={about.container}>
        <div className={about.content}>
          <h2>Reasons to count on CTM</h2>
          <p>
            At CTM Cargo Transportation Management LLC, we are dedicated to
            providing seamless and efficient freight forwarding solutions for
            businesses looking to operate in the Sonora-Arizona corridor. Our
            expertise lies in connecting exporters with the US market, ensuring
            your goods move smoothly and reliably across the border.{" "}
          </p>
        </div>
      </section>
      <div className={features.container}>
        <div className={features.content}>
          <p>
            <strong>Rogelio Romo: </strong>Bringing over 15 years of extensive
            experience to CTM Cargo Transportation Management LLC, Rogelio is a
            seasoned expert in the trucking and logistics sector. He currently
            operates his own trucking company, managing a fleet of 7 trucks,
            which provides him with invaluable, hands-on insight into road
            freight operations. As a freight broker and owner based in Tucson,
            he possesses a comprehensive understanding of transportation
            dynamics and warehousing.
          </p>
          <p>
            Rogelio is fluent in both English and Spanish, coupled with his
            extensive connections in Mexico, makes him an unparalleled resource
            for navigating the complexities of cross-border shipping between
            Sonora and Arizona. He is committed to optimizing your supply chain
            and ensuring your cargo reaches its destination efficiently.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/romo.jpeg"
            alt="Rogelio Romo"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/romo.jpeg"
          />
        </div>
      </div>
      <div className={features.container}>
        <div className={features.content}>
          <p>
            <strong>Omar Holguin: </strong>Omar brings a robust international
            perspective and nearly two decades of freight forwarding expertise
            to our team. For the past 20 years, Omar has been successfully
            running Trexco International Limited, a freight forwarding agency
            based in London, UK. His extensive experience spans the complex UK
            to South America export market, with a strong focus on both
            container shipping and airfreight.
          </p>
          <p>
            Fully bilingual in English and Spanish and with deep understanding of
            global logistics, coupled with his proven track record in
            international trade, significantly enhances CTM Cargo Transportation
            Management LLC's capability to offer comprehensive and reliable
            solutions, especially for clients with broader international
            shipping needs beyond the immediate Sonora-Arizona corridor.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/holguin.png"
            alt="Omar Holguin"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/holguin.png"
          />
        </div>
      </div>

      <section className={about.container}>
        <div className={about.content}>
          <h2>We are here to help you</h2>
          <p>
            Our success is built on a foundation of deep industry knowledge and
            a commitment to customer satisfaction. We understand the intricacies
            of cross-border logistics and leverage our extensive network to your
            advantage.{" "}
          </p>

          <button className={hero.button}>
            <Link href="contact">Talk to an expert</Link>
          </button>
          <button className={hero.button1}>
            <Link href="contact">Get started</Link>
          </button>
        </div>
      </section>
    </>
  );
}
