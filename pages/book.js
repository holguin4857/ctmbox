import Head from "next/head";
import Link from "next/link";
import form from "../styles/form.module.css";
import hero from "../styles/hero.module.css";
import buttons from "../styles/buttons.module.css";

export default function Book() {
  return (
    <>
      <Head>
        <title>Get a Trucking Quote | CTM</title>
        <meta
          name="description"
          content="Ready to ship? Fill out our simple form to get a fast, reliable quote for your FTL or LTL shipment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* We keep the main hero container for the background and padding */}
      <section className={hero.container}>
        {/* This is our new 2-column layout container */}
        <div className={form.pageLayout}>
          {/* --- LEFT SIDE (FORM) --- */}
          <div className={form.formWrapper}>
            <h2>Get a Fast, Free Trucking Quote</h2>
            <p>
              Fill out the form below, and our team will get back to you shortly
              with a customized, all-inclusive quote for your shipment.
            </p>

            <form
              action="https://n8n.ctmbox.com/webhook/73578180-8939-4fe5-aedb-acd9835d79a7"
              method="POST"
              className={form.formElement}
            >
             {/* --- THIS IS THE NEW HIDDEN FIELD --- */}
            <input type="hidden" name="formLanguage" value="en" />

              {/* --- Type of Load --- */}
              <div className={form.formGroup}>
                <label htmlFor="load-type" className={form.label}>
                  Type of Load
                </label>
                <select
                  id="load-type"
                  name="load-type"
                  className={form.select}
                  required
                >
                  <option value="">Please select...</option>
                  <option value="FTL (Full Truckload)">
                    FTL (Full Truckload)
                  </option>
                  <option value="LTL (Less-Than-Truckload)">
                    LTL (Less-Than-Truckload)
                  </option>
                </select>
              </div>

              {/* --- Cargo Description --- */}
              <div className={form.formGroup}>
                <label htmlFor="cargo" className={form.label}>
                  Cargo Description
                </label>
                <textarea
                  id="cargo"
                  name="cargo-description"
                  className={form.textarea}
                  placeholder="e.g., 24 pallets of machine parts, dimensions, weight..."
                  required
                ></textarea>
              </div>

              {/* --- Collection Address --- */}
              <div className={form.formGroup}>
                <label htmlFor="collection" className={form.label}>
                  Collection Address
                </label>
                <textarea
                  id="collection"
                  name="collection-address"
                  className={form.textarea}
                  placeholder="Street, City, State, ZIP"
                  required
                ></textarea>
              </div>

              {/* --- Delivery Address --- */}
              <div className={form.formGroup}>
                <label htmlFor="delivery" className={form.label}>
                  Delivery Address
                </label>
                <textarea
                  id="delivery"
                  name="delivery-address"
                  className={form.textarea}
                  placeholder="Street, City, State, ZIP"
                  required
                ></textarea>
              </div>

              {/* --- Contact Details --- */}
              <div className={form.formGroup}>
                <label htmlFor="name" className={form.label}>
                  Your Name
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
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={form.input}
                  required
                />
              </div>

              {/* --- Your Phone --- */}
              <div className={form.formGroup}>
                <label htmlFor="phone" className={form.label}>
                  Your Phone
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

              {/* --- Submit Button --- */}
              <div className={buttons.buttonContainer}>
                <button type="submit" className={buttons.button}>
                  Send Quote Request
                </button>
              </div>
            </form>
          </div>

          {/* --- RIGHT SIDE (INFO BOX) --- */}
          <div className={form.infoWrapper}>
            <h3>Contact Us Directly</h3>
            <p>
              Prefer to talk? Call us or send an email directly. We&apos;re here
              to help.
            </p>
            <p>
              <strong>Telephone:</strong>
              <br />
              +1-520-352-7255
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              contact@ctmbox.com
            </p>
            <p>
              <strong>Address:</strong>
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
