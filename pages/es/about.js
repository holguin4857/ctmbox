import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import about from "../../styles/about.module.css";
import buttons from "../../styles/buttons.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre CTM | Sus Expertos en Logística Transfronteriza</title>
        <meta
          name="description"
          content="Conozca más sobre Cargo Transportation Management (CTM), su socio dedicado para simplificar el comercio y los envíos entre Sonora, México y Arizona, EE.UU."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={about.container}>
        <div className={about.content}>
          <h2>Por qué contar con nosotros</h2>
          <p>
            En CTM Cargo Transportation Management LLC, nos dedicamos a ofrecer
            soluciones de transporte de carga fluidas y eficientes para empresas
            con operaciones en el corredor Sonora-Arizona. Nuestra especialidad
            es conectar a los exportadores con el mercado estadounidense,
            garantizando que sus mercancías se muevan de forma fluida y
            confiable a través de la frontera.{" "}
          </p>
        </div>
      </section>

      <div className={about.container}>

        <div className={about.image}>
          <Image
            src="/images/romo.png"
            alt="Rogelio Romo"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/romo.jpeg"
          />
        </div>

        <div className={about.contentimage}>
          <p>
            <strong>Rogelio Romo: </strong>Rogelio aporta a CTM Cargo
            Transportation Management LLC más de 15 años de amplia experiencia,
            siendo un experto consolidado en el sector del transporte y la
            logística. Actualmente, dirige su propia empresa de transporte con
            una flota de 7 camiones, lo que le proporciona un conocimiento
            práctico e invaluable de las operaciones de transporte terrestre.
            Como bróker de carga y propietario con sede en Tucson, posee un
            profundo conocimiento de la dinámica del transporte y del
            almacenaje.
          </p>
          <p>
            Su dominio del inglés y el español, unido a su extensa red de
            contactos en México, lo convierte en un recurso inigualable para
            navegar las complejidades del transporte transfronterizo entre
            Sonora y Arizona. Rogelio está comprometido con la optimización de
            su cadena de suministro y con garantizar que su carga llegue a su
            destino de manera eficiente.
          </p>
        </div>
      </div>

      <div className={about.container}>
        
        <div className={about.image}>
          <Image
            src="/images/holguin.png"
            alt="Omar Holguin"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/images/holguin.png"
          />
        </div>
        
        <div className={about.content}>
          <p>
            <strong>Omar Holguin: </strong>Omar aporta a nuestro equipo una
            sólida perspectiva internacional y cerca de 20 años de experiencia
            en el transporte de carga internacional. Durante los últimos 20
            años, ha dirigido con éxito Trexco International Limited, una
            agencia de transporte de carga con sede en Londres (Reino Unido). Su
            amplia experiencia abarca el complejo mercado de exportación desde
            el Reino Unido hacia Sudamérica, con un sólido enfoque tanto en el
            transporte marítimo de contenedores como en la carga aérea.
          </p>
          <p>
            El ser completamente bilingüe en inglés y español, su profundo
            conocimiento de la logística global y su probada trayectoria en el
            comercio internacional, mejoran significativamente la capacidad de
            CTM Cargo Transportation Management LLC para ofrecer soluciones
            integrales y confiables. Esto es especialmente valioso para aquellos
            clientes con necesidades de envío internacional que van más allá del
            corredor inmediato de Sonora-Arizona.
          </p>
        </div>
      </div>

      <section className={about.container}>
        <div className={about.content}>
          <h2>Estamos aquí para ayudarle</h2>
          <p>
            Nuestro éxito se asienta sobre un profundo conocimiento del sector y
            un sólido compromiso con la satisfacción de nuestros clientes.
            Conocemos al detalle las particularidades de la logística
            transfronteriza y ponemos a su alcance toda nuestra red para que
            obtenga el máximo beneficio.{" "}
          </p>

          <div className={buttons.buttonContainer}>
            <button className={buttons.button}>
              <Link href="contact">Hable con un experto</Link>
            </button>
            <button className={buttons.button1}>
              <Link href="book">Reservar Ahora</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
