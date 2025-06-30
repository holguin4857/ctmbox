import Head from "next/head";
import Link from "next/link";
import hero from "../../styles/hero.module.css";
import buttons from "../../styles/buttons.module.css";

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
          <h2>
            Hable con nosotros: El primer paso para sus soluciones logísticas
          </h2>
          <p></p>

          <p>
            En CTM Cargo Transportation Management LLC, con sede en Tucson
            (Arizona), aportamos 40 años de experiencia combinada en logística.
            Estamos perfectamente posicionados para gestionar sus necesidades de
            transporte de carga, desde el transporte local y transfronterizo
            hasta servicios integrales de transporte internacional.{" "}
            <strong>¡Contacte con nosotros!</strong> Estamos a su disposición
            para resolver sus dudas y ofrecerle un presupuesto personalizado.
          </p>

          <p>
            <strong>Dirección:</strong>
            <br />
            Cargo Transportation Management LLC, 791 E Evans Blvd. Tucson, AZ
            ZIP 85713
          </p>
          <p>
            <strong>Teléfonos:</strong>
            <br />
            +1-520-358-9236, +1-480-318-7397{" "}
          </p>
          <p>
            <strong>Correo electrónico:</strong>
            <br />
            Para consultas generales y servicios de transporte terrestre:
            <br />- Rogelio Romo: <strong>rogelio@ctmbox.com</strong>
            <br />
            Para transporte de carga internacional y otras consultas:
            <br />- Omar Holguin: <strong>omar@ctmbox.com</strong>
          </p>

          <p></p>

          <button className={buttons.button}>
            <Link href="book">Reservar ahora</Link>
          </button>
        </div>
      </section>
    </>
  );
}
