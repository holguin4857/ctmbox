import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../../styles/hero.module.css";
import features from "../../styles/features.module.css";
import testimonials from "../../styles/testimonials.module.css";
import milestones from "../../styles/milestones.module.css";
import why from "../../styles/why.module.css";
import services from "../../styles/services.module.css";
import buttons from "../../styles/buttons.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Logística Transfronteriza México-EE.UU. | CTM</title>
        <meta
          name="description"
          content="CTM simplifica el comercio entre México y EE.UU. con servicios expertos de transporte terrestre y marítimo en el corredor Sonora-Arizona. ¡Cotice hoy!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={hero.container}>
        <div className={hero.content}>
          <h1>cruzando fronteras, simplificando su negocio</h1>

          <p>
            Su aliado estrategico para el comercio internacional por el corredor
            Arizona-Sonora.
          </p>
          <div className={buttons.buttonContainer}>
            <button className={buttons.button}>
              <Link href="/es/book">Reservar Ahora</Link>
            </button>
            <button className={buttons.button1}>
              <Link href="/es/contact">Hable con un experto</Link>
            </button>
          </div>
        </div>
      </div>

      <section className={services.columns}>
        <article className={services.column}>
          <h2>Transporte Terrestre</h2>
          <p>
            Transporte su carga con total confianza a través del corredor
            Arizona-Sonora y más allá. Ofrecemos un servicio de transporte
            terrestre eficiente, confiable y personalizado para su carga.
          </p>
        </article>
        <article className={services.column}>
          <h2>Transporte Marítimo</h2>
          <p>
            Envíos internacionales más rentables con nuestras soluciones
            marítimas flexibles. Ofrecemos servicio de Contenedor Completo
            (FCL), Flat racks y Carga Consolidada (LCL).
          </p>
        </article>
      </section>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Sus envíos en manos de expertos</h2>
          <p>
            Conectamos a exportadores de todo el mundo con el mercado de EE.UU.,
            y contamos con especialización en el comercio transfronterizo con
            México. Nos aseguramos de que su carga cruce la frontera sin
            contratiempos y con la máxima fiabilidad.
          </p>
        </div>
      </div>

      <div className={milestones.cards}>
        <div className={milestones.card}>
          <h3>9000+</h3>
          <p>Envíos por Tierra</p>
        </div>
        <div className={milestones.card}>
          <h3>600+</h3>
          <p>FCL Contenedores vía Marítima</p>
        </div>
        <div className={milestones.card}>
          <h3>35000+</h3>
          <p>Clientes Satisfechos</p>
        </div>
      </div>

      <div className={why.container}>
        <div className={why.content}>
          <h2>¿Por qué elegir CTM?</h2>

          <ul>
            <li>
              <strong>Experiencia Mexico-USA Integrada:</strong> Desde nuestra
              oficina en Tucson, ofrecemos una solución logística integrada y
              eficiente, con un profundo conocimiento de ambos lados de la
              frontera.
            </li>
            <li>
              <strong>Especialización en Zona Franca (FTZ 60):</strong> Genere
              importantes ahorros en costes y gane eficiencia operativa.
              Contamos con la experiencia para gestionar el flujo de carga en la
              Zona de Libre Comercio FTZ 60, garantizando el cumplimiento
              normativo y maximizando sus beneficios.
            </li>

            <li>
              <strong>Servicio Integral:</strong> Gestionamos todo el proceso de
              envío, desde la recogida y carga hasta el despacho de aduanas y la
              entrega final, simplificando la complejidad del transporte
              internacional.
            </li>

            <li>
              <strong>Enfoque en el Corredor Arizona-Sonora:</strong> Somos sus
              expertos en esta arteria comercial vital. Nuestro conocimiento
              local, red de contactos y experiencia directa se traducen en
              tránsitos más rápidos, menos retrasos y un servicio más confiable
              para sus envíos entre Sonora y Arizona.
            </li>
            <li>
              <strong>Soluciones de Puerta a Puerta:</strong> Desde la
              coordinación del agenciamiento aduanal hasta el transporte y
              almacenaje, gestionamos cada detalle de su cadena de suministro,
              permitiéndole centrarse en su negocio principal.
            </li>
            <li>
              <strong>Confiabilidad y Transparencia:</strong> El recorrido de su
              carga es nuestra prioridad. Nos comprometemos a una comunicación
              clara, una ejecución precisa y un servicio fiable en cada paso del
              proceso.
            </li>
          </ul>

          <div className={buttons.buttonContainer}>
            <button className={buttons.button1}>
              <Link href="/es/contact">Hable con un experto</Link>
            </button>
          </div>
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
          <h2>Transporte con Confianza</h2>
          <p>
            CTM Cargo Transportation Management LLC ofrece una gama completa de
            servicios de logística y transporte internacional, garantizando el
            movimiento fluido de sus mercancías, tanto a nivel transfronterizo
            como global. Ofrecemos soluciones a la medida, respaldadas por una
            amplia experiencia y nuestro compromiso con la eficiencia y la
            confiabilidad.
          </p>
          <div className={buttons.buttonContainer}>
            <button className={buttons.button}>
              <Link href="/es/book">Reservar Ahora</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
