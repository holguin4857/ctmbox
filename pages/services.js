import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../styles/hero.module.css";
import features from "../styles/features.module.css";
import milestones from "../styles/milestones.module.css";

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
            of your business. From cross-border ground transport to global air
            and sea shipments, our experienced team ensures your cargo is
            delivered efficiently, securely, and on time.
          </p>

          <button className={hero.button1}>
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
            Leveraging our extensive network and Rogelio Romo hands-on
            experience as a trucking company owner, we ensure secure,
            door-to-door delivery. We manage all aspects of ground
            transportation, including efficient border crossing procedures,
            comprehensive cargo security, and, where applicable, real-time
            tracking to provide you with complete visibility and peace of mind
            from pickup to final destination.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/flatrack.png"
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
            src="/images/cargoship.png"
            alt="Container ship"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/cargoship.png"
          />
        </div>
      </div>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Air freight</h2>
          <p>
            <strong>
              For urgent or time-sensitive cargo, choose our expedited air
              services.
            </strong>{" "}
            When speed and reliability are paramount, our air freight services
            provide the fastest possible transit times for your critical
            shipments. Designed for urgent, high-value, or time-sensitive cargo,
            we offer expedited solutions that ensure your goods meet the
            tightest deadlines, worldwide.
          </p>
          <p>
            Leveraging a robust network of global airline partners, we provide
            secure and dependable transport for everything from spare parts and
            essential components to high-value goods and perishable items. Our
            team manages all aspects of air cargo logistics, including swift
            customs clearance, meticulous handling, and precise scheduling,
            guaranteeing that your valuable cargo arrives at its destination
            quickly and safely, minimizing downtime for your operations.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/airplane.png"
            alt="Cargo plane"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/airplane.png"
          />
        </div>
      </div>

      <div className={milestones.cards}>
        <div className={milestones.card}>
          <h3>9000+</h3>
          <p>Crates Shipped by Air and Road</p>
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
          <button className={hero.button}>
            <Link href="https://trexco.involve.me/trexco-personalized-quote">
              Book now
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
