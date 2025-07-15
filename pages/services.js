import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../styles/hero.module.css";
import features from "../styles/features.module.css";
import milestones from "../styles/milestones.module.css";
import buttons from "../styles/buttons.module.css";

export default function Services() {
  return (
    <>
      <Head>
        <title>CTM Services</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={hero.container}>
        <div className={hero.content}>
          <h2>Our Comprehensive Freight Forwarding Services</h2>

          <p>
            At CTM Cargo Transportation Management LLC, we provide a full
            spectrum of logistics solutions designed to meet the diverse needs
            of your business. From cross-border ground transport to global sea
            shipments, our experienced team ensures your cargo is delivered
            efficiently, securely, and on time.
          </p>

          <button className={buttons.button1}>
            <Link href="contact">Talk to an expert</Link>
          </button>
        </div>
      </div>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Road Freight</h2>
          <p>
            <strong>
              Ship your cargo confidently across the Arizona-Sonora corridor and
              beyond.
            </strong>{" "}
            Our road freight solutions are the backbone of efficient
            cross-border trade between Mexico and the United States, with
            specialized expertise in the dynamic Arizona-Sonora corridor. We
            offer reliable, flexible, and tailored ground transport services for
            a wide range of goods, whether you require Full Truckload (FTL) for
            large volumes or Less Than Truckload (LTL) for smaller, more
            cost-effective shipments.
          </p>
          <p>
            Leveraging our extensive network and hands-on experience as trucking
            company owners, we ensure secure, door-to-door delivery. We manage
            all aspects of ground transportation, including efficient border
            crossing procedures, comprehensive cargo security, and, where
            applicable, real-time tracking to provide you with complete
            visibility and peace of mind from pickup to final destination.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/truck.png"
            alt="Flat rack"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/flatrack.png"
          />
        </div>
      </div>
      <div className={features.container}>
        <div className={features.content}>
          <h2>Sea Freight</h2>
          <p>
            <strong>
              Optimize your international shipments with our flexible ocean
              solutions.
            </strong>{" "}
            For businesses seeking cost-effective and reliable transportation
            for large volumes of goods across global distances, our sea freight
            services are the ideal choice. We offer both Full Container Load
            (FCL) options, providing you with exclusive use of a container for
            maximum security and efficiency, and Less than Container Load (LCL)
            solutions, where your cargo shares space with other shipments to
            optimize costs.
          </p>
          <p>
            With a global network of partners and carriers, we facilitate
            seamless international movements, handling diverse cargo types from
            general goods to specialized equipment. Our expertise extends to
            managing complex customs procedures, documentation, and coordinating
            port-to-door deliveries, ensuring your goods reach their
            international destinations efficiently and economically.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/ship.png"
            alt="Container ship"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/cargoship.png"
          />
        </div>
      </div>

      <div className={milestones.cards}>
        <div className={milestones.card}>
          <h3>9000+</h3>
          <p>Shipments by Road</p>
        </div>
        <div className={milestones.card}>
          <h3>600+</h3>
          <p>Full containers shipped by sea</p>
        </div>
        <div className={milestones.card}>
          <h3>35000+</h3>
          <p>Happy Clients</p>
        </div>
      </div>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>How we make a difference</h2>
          <p>
            CTM Cargo Transportation Management LLC offers a complete suite of
            logistics and freight forwarding services, ensuring seamless
            movement of your goods, whether across the border or around the
            globe. We provide tailored solutions backed by extensive experience
            and a commitment to efficiency and reliability.
          </p>
          <button className={buttons.button}>
            <Link href="book">Book now</Link>
          </button>
        </div>
      </section>
    </>
  );
}
