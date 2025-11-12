import Head from "next/head";
import Link from "next/link";
// --- CORRECTED PATHS ---
import form from "../../styles/form.module.css";
import hero from "../../styles/hero.module.css";
import buttons from "../../styles/buttons.module.css";

export default function Book() {
  return (
    <>
      <Head>
        <title>Obtener Cotización de Transporte | CTM</title>
        <meta
          name="description"
          content="¿Listo para enviar? Complete nuestro sencillo formulario para obtener una cotización rápida y confiable para su envío FTL o LTL."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={hero.container}>
        {/* This is our new 2-column layout container */}
        <div className={form.pageLayout}>
          {/* --- LEFT SIDE (FORM) --- */}
          <div className={form.formWrapper}>
            <h2>Obtenga una Cotización de Transporte Rápida y Gratuita</h2>
            <p>
              Complete el formulario a continuación y nuestro equipo se
              comunicará con usted en breve con una cotización personalizada con
              todo incluido para su envío.
            </p>

            <form
              action="https://n8n.ctmbox.com/webhook/73578180-8939-4fe5-aedb-acd9835d79a7"
              method="POST"
              className={form.formElement}
            >

              {/* --- ESTE ES EL CAMPO OCULTO --- */}
            <input type="hidden" name="formLanguage" value="es" />
            
              {/* --- Tipo de Carga --- */}
              <div className={form.formGroup}>
                <label htmlFor="load-type" className={form.label}>
                  Tipo de Carga
                </label>
                <select
                  id="load-type"
                  name="load-type"
                  className={form.select}
                  required
                >
                  <option value="">Por favor seleccione...</option>
                  <option value="FTL (Carga Completa)">
                    FTL (Carga Completa)
                  </option>
                  <option value="LTL (Carga Consolidada)">
                    LTL (Carga Consolidada)
                  </option>
                </select>
              </div>

              {/* --- Descripción de la Carga --- */}
              <div className={form.formGroup}>
                <label htmlFor="cargo" className={form.label}>
                  Descripción de la Carga
                </label>
                <textarea
                  id="cargo"
                  name="cargo-description"
                  className={form.textarea}
                  placeholder="Ej: 24 palets de piezas de máquina, dimensiones, peso..."
                  required
                ></textarea>
              </div>

              {/* --- Dirección de Recolección --- */}
              <div className={form.formGroup}>
                <label htmlFor="collection" className={form.label}>
                  Dirección de Recolección
                </label>
                <textarea
                  id="collection"
                  name="collection-address"
                  className={form.textarea}
                  placeholder="Calle, Ciudad, Estado, Código Postal"
                  required
                ></textarea>
              </div>

              {/* --- Dirección de Entrega --- */}
              <div className={form.formGroup}>
                <label htmlFor="delivery" className={form.label}>
                  Dirección de Entrega
                </label>
                <textarea
                  id="delivery"
                  name="delivery-address"
                  className={form.textarea}
                  placeholder="Calle, Ciudad, Estado, Código Postal"
                  required
                ></textarea>
              </div>

              {/* --- Detalles de Contacto --- */}
              <div className={form.formGroup}>
                <label htmlFor="name" className={form.label}>
                  Su Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={form.input}
                  required
                />
              </div>

              <div className={form.formGroup}>
                <label htmlFor="email" className={form.label}>
                  Su Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={form.input}
                  required
                />
              </div>

              {/* --- Su Teléfono --- */}
              <div className={form.formGroup}>
                <label htmlFor="phone" className={form.label}>
                  Su Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={form.input}
                  placeholder="(555) 555-1234"
                  required
                />
              </div>

              {/* --- Botón de Envío --- */}
              <div className={buttons.buttonContainer}>
                <button type="submit" className={buttons.button}>
                  Solicita Cotización
                </button>
              </div>
            </form>
          </div>

          {/* --- RIGHT SIDE (INFO BOX) --- */}
          <div className={form.infoWrapper}>
            <h3>Contáctenos Directamente</h3>
            <p>
              ¿Prefiere hablar? Llámenos o envíenos un correo electrónico
              directamente. Estamos aquí para ayudar.
            </p>
            <p>
              <strong>Teléfono:</strong>
              <br />
              +1-520-352-7255
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              contact@ctmbox.com
            </p>
            <p>
              <strong>Dirección:</strong>
              <br />
              791 E Evans Blvd
              <br />
              Tucson, AZ 85713
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
