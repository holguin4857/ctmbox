import Head from "next/head";
import Script from "next/script";
import hero from "../../styles/hero.module.css";
import buttons from "../../styles/buttons.module.css";

export default function Book() {
  return (
    <>
      <Head>
        <title>Reserve su Envío México-EE.UU. | CTM</title>
        <meta
          name="description"
          content="¿Listo para enviar? Use nuestro sencillo formulario para programar su envío terrestre o marítimo entre México y EE.UU. Obtenga una cotización rápida y confiable."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>Obtenga una cotización experta y rápida</h2>
          <p></p>

          <p>
            ¿Listo para su envío? Nuestro formulario es más que una simple
            solicitud de precios: es el primer paso para diseñar su solución
            logística a medida. La información clave que nos facilita (tipo de
            carga, ruta y requisitos aduaneros){" "}
            <strong>
              pone en marcha nuestro motor de 40 años de experiencia.
            </strong>
            .
          </p>
          <p>
            Esto nos permite asignarle el transporte idóneo, prever los desafíos
            del cruce fronterizo y entregarle una cotización competitiva y
            precisa. El objetivo es claro: un plan de envío optimizado y sin
            sorpresas para usted.
          </p>

          <p></p>

          {/* 2. THIS IS THE NEW BUTTON
            The old button with the <Link> inside has been replaced by this.
            It combines your styles with the required 'involveme_popup' class
            and includes the necessary data attributes for the script.
          */}

          <div className={buttons.buttonContainer}>
            <button
              className={`${buttons.button} involveme_popup`}
              data-project="CTM-quote"
              data-embed-mode="popup"
              data-trigger-event="button"
              data-popup-size="medium"
              data-organization-url="https://trexco.involve.me"
              data-title="CTM Quote"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* 3. ADD THE SCRIPT HERE
        This loads the involve.me JavaScript. By placing it here with the
        'afterInteractive' strategy, we ensure it doesn't slow down your
        page's initial load time.
      */}
      <Script
        src="https://trexco.involve.me/embed?type=popup"
        strategy="afterInteractive"
      />
    </>
  );
}
