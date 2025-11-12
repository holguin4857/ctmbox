import Head from "next/head";
import Link from "next/link";
import hero from "../../styles/hero.module.css";
import buttons from "../../styles/buttons.module.css";

export default function Gracias() {
  return (
    <>
      <Head>
        <title>
          Cotización Recibida - Gracias | CTM 
        </title>
        <meta
          name="description"
          content="Gracias por su solicitud de cotización de transporte. Un miembro del equipo de CTM se pondrá en contacto con usted en breve."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>¡Gracias!</h2>

          <p>
            <strong>Su solicitud de cotización ha sido enviada con éxito.</strong>
          </p>

          <p>
            Un miembro de nuestro equipo está revisando sus detalles. Nos
            pondremos en contacto en breve con su cotización o si tenemos
            preguntas adicionales.
          </p>

          <p>
            <strong>¿Necesita Hablar Con Nosotros Antes?</strong>
          </p>

          <p>
            Si su solicitud es urgente, también puede contactarnos directamente
            al:
          </p>
          <p>
            <strong>Tel:</strong>
            <br />
            +1-520-352-7255 <br />
            Llámenos y seleccione su idioma de preferencia. Para Inglés,
            presione 1. Para Español, presione 2.
          </p>

          <p>
            <strong>Email:</strong>
            <br />
            Para todas las cotizaciones y servicios de transporte:
            <br />
            <strong>contact@ctmbox.com</strong>
          </p>

          <div className={buttons.buttonContainer}>
            <button className={buttons.button}>
              <Link href="/es/book">¿Cotizar de Nuevo?</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
