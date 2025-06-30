import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../styles/hero.module.css";
import features from "../styles/features.module.css";
import testimonials from "../styles/testimonials.module.css";
import milestones from "../styles/milestones.module.css";
import why from "../styles/why.module.css";
import services from "../styles/services.module.css";
import buttons from "../styles/buttons.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cargo Transportation Management</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={hero.container}>
        <div className={hero.content}>
          <h1>cross-border logistics, simplified</h1>

          <p>
            Your trusted partner for seamless US-Mexico trade in the
            Arizona-Sonora corridor.
          </p>
          <button className={hero.button}>
            <Link href="book">Get started</Link>
          </button>
          <button className={hero.button1}>
            <Link href="contact">Talk to an expert</Link>
          </button>
        </div>
      </div>

      <section className={services.columns}>
        <article className={services.column}>
          <Image
            src="/images/flatrack.png"
            alt="Flatrack"
            width={200}
            height={200}
          />
          <h2>Road Freight</h2>
          <p>
            Ship your cargo confidently across the Arizona-Sonora corridor and
            beyond. Efficient, reliable, and tailored ground transport for all
            your goods.
          </p>
        </article>
        <article className={services.column}>
          <Image
            src="/images/cargoship.png"
            alt="Ship"
            width={200}
            height={200}
          />
          <h2>Sea Freight</h2>
          <p>
            Optimize your international shipments with our flexible ocean
            solutions. Full Container Load (FCL) or Less than Container Load
            (LCL) for cost-effective global reach.
          </p>
        </article>
        <article className={services.column}>
          <Image
            src="/images/airplane.png"
            alt="plane"
            width={200}
            height={200}
          />
          <h2>Air Freight</h2>
          <p>
            For urgent or time-sensitive cargo, choose our expedited air
            services. Fast, secure, and dependable transport to meet your tight
            deadlines, worldwide.
          </p>
        </article>
      </section>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Trust Your Shipments to the Experts</h2>
          <p>
            We connect exporters from around the world with the US market, with
            an unmatched specialization in the Mexico-US corridor, ensuring your
            goods move smoothly, reliably, and without hassle across the border.
            Partner with us for trusted logistics solutions that drive your
            success.
          </p>
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

      <div className={why.container}>
        <div className={why.content}>
          <h2>Why choose CTM?</h2>

          <ul>
            <li>
              <strong>Integrated US & Mexico Expertise:</strong> With our Tucson
              office, we provide a cohesive and streamlined logistics solution
              that truly understands both sides of the border.
            </li>
            <li>
              <strong>FTZ 60 Specialization:</strong> Unlock significant cost
              savings and operational efficiencies. We possess knowledge and
              experience in managing cargo flow in and out of Foreign Trade Zone
              60, ensuring compliance and maximizing your benefits
            </li>
            <li>
              <strong>Comprehensive Service:</strong> We manage the entire
              shipping process, from collection and loading to customs clearance
              and delivery, taking the complexity out of international
              transport.
            </li>
            <li>
              <strong>Arizona-Sonora Corridor Focus:</strong> We are your
              dedicated experts for this vital trade artery. Our local insights,
              network, and direct experience mean faster transit, fewer delays,
              and more reliable service for your shipments between Sonora and
              Arizona.
            </li>
            <li>
              <strong>End-to-End Solutions:</strong> From customs brokerage
              coordination to efficient transportation and warehousing, we
              manage every detail of your supply chain, allowing you to focus on
              your core business.
            </li>
            <li>
              <strong>Reliability & Transparency: </strong> Your cargo&apos;s
              journey is our priority. We commit to clear communication, precise
              execution, and dependable service every step of the way.
            </li>
          </ul>

          <button className={hero.button1}>
            <Link href="contact">Talk to an expert</Link>
          </button>
        </div>
      </div>

      <div className={testimonials.container1}>
        <div className={testimonials.content}>
          <p>
            CTM has been a game changer for our cross border shipments. Their
            road freight service from Sonora to Arizona is incredibly reliable.
            We never worry about customs or delays, and their team is always
            responsive. Highly recommend them for seamless border operations.
            <br />
            <br /> Maria Sanchez, Export Manager.
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
          <p>
            For our urgent parts that need to cross continents, CTMs air freight
            service is our first call. They handle everything with speed and
            precision, ensuring our operations never miss a beat. Its peace of
            mind when deadlines are tight. <br />
            <br /> David Chen, Operations
          </p>
        </div>
      </div>
      <div className={testimonials.container1}>
        <div className={testimonials.content}>
          <p>
            Trabajar con CTM es siempre una experiencia fluida. Su equipo es
            profesional y siempre logran que nuestros productos lleguen a
            destino a tiempo y sin complicaciones. Son un socio verdaderamente
            confiable para nuestras necesidades de logistica. <br />
            <br /> Ricardo Lopez, Gerente de Logistica
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
          <p>
            As a Mexican exporter, having a team like CTM in Tucson that is
            fully bilingual and understands both sides of the border has made
            all the difference. Their clear communication and expertise are
            invaluable for our trade.
            <br />
            <br />
            Carlos Ramirez, Director de Compras
          </p>
        </div>
      </div>
      <div className={testimonials.container1}>
        <div className={testimonials.content}>
          <p>
            CTM has consistently provided exceptional service for our
            warehousing and distribution needs. Their team is proactive and
            always goes the extra mile to ensure our cargo is handled with care
            and efficiency. They are a true asset. <br />
            <br />
            Emily White, Supply Chain Manager
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
          <p>
            Hemos resuelto varios desafios logisticos complejos gracias a CTM.
            Su capacidad para encontrar soluciones efectivas y su compromiso con
            la entrega son impresionantes. Los consideramos una extension vital
            de nuestro equipo. <br />
            <br />
            Javier Soto, CEO
          </p>
        </div>
      </div>
      <div className={testimonials.container1}>
        <div className={testimonials.content}>
          <p>
            CTM container shipping service is very good. They provided a secure
            and cost-effective solution for my business, ensuring my cargo
            arrived safely and on time. Highly recommended for all your
            container shipping needs! <br />
            <br />
            Helena Rosa Menendez
          </p>
        </div>
      </div>
      <div className={testimonials.container2}>
        <div className={testimonials.content}>
          <p>
            Gracias a CTM, logramos superar un desafio logistico muy complejo
            con nuestra carga especial. Su equipo fue increiblemente proactivo y
            encontro la solucion perfecta. Su experiencia en el cruce fronterizo
            es inigualable. <br />
            <br />
            Miguel Fuentes, Director de Operaciones
          </p>
        </div>
      </div>

      <div className={features.container}>
        <div className={features.content}>
          <h2>shipping with confidence</h2>
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
      </div>
    </>
  );
}
