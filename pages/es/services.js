import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import hero from "../../styles/hero.module.css";
import features from "../../styles/features.module.css";
import milestones from "../../styles/milestones.module.css";

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
          <h2>Nuestra Gama Completa de Servicios Logísticos</h2>

          <p>
            En CTM Cargo Transportation Management LLC, ofrecemos una gama
            completa de soluciones logísticas diseñadas para satisfacer las
            diversas necesidades de su negocio. Desde el transporte terrestre
            transfronterizo hasta envíos aéreos y marítimos globales, nuestro
            equipo experto garantiza que su carga sea entregada de forma
            eficiente, segura y puntual.
          </p>

          <button className={hero.button1}>
            <Link href="contact">Hable con un experto</Link>
          </button>
        </div>
      </div>

      <div className={features.container}>
        <div className={features.content}>
          <h2>Transporte Terrestre</h2>{" "}
          <p>
            <strong>
              Transporte su carga con total confianza por el corredor
              Arizona-Sonora y más allá.
            </strong>{" "}
            Nuestras soluciones de transporte terrestre son la columna vertebral
            del comercio transfronterizo eficiente entre México y Estados
            Unidos, con una experiencia especializada en el dinámico corredor
            Arizona-Sonora. Ofrecemos servicios de transporte terrestre
            confiables, flexibles y a la medida para una amplia gama de
            mercancías, tanto si necesita Camión Completo (FTL) para grandes
            volúmenes, como Carga Consolidada (LTL) para envíos más pequeños y
            rentables.
          </p>
          <p>
            Aprovechando nuestra amplia red y nuestra experiencia práctica al
            tener nuestra propia flota de camiones en los Estados Unidos,
            garantizamos entregas seguras de puerta a puerta. Gestionamos todos
            los aspectos del transporte terrestre, incluyendo procedimientos
            eficientes de cruce fronterizo, una seguridad de carga integral y,
            cuando corresponde, seguimiento en tiempo real para ofrecerle una
            visibilidad completa y total tranquilidad desde la recogida hasta el
            destino final
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
          <h2>Transporte Maritimo</h2>
          <p>
            <strong>
              Optimice sus envíos internacionales con nuestras flexibles
              soluciones marítimas.
            </strong>{" "}
            Para las empresas que buscan un transporte rentable y confiable para
            grandes volúmenes de mercancía, nuestros servicios de transporte
            marítimo son la opción ideal. Ofrecemos tanto opciones de Contenedor
            Completo (FCL), que le proporcionan el uso exclusivo de un
            contenedor para máxima seguridad y eficiencia, como soluciones de
            Carga Consolidada (LCL), donde su carga comparte espacio con otros
            envíos para optimizar los costos.
          </p>
          <p>
            Facilitamos movimientos internacionales sin contratiempos, manejando
            diversos tipos de carga, desde mercancías generales hasta equipos
            especializados. Nuestra experiencia abarca la gestión de
            procedimientos aduaneros, la documentación y la coordinación de
            entregas de puerto a puerta, garantizando que sus mercancías lleguen
            a sus destinos internacionales de manera eficiente y económica.
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
          <h2>Transporte Aéreo</h2>
          <p>
            <strong>
              Para su carga urgente, elija nuestros servicios aéreos.
            </strong>{" "}
            Cuando la velocidad y la fiabilidad son primordiales, nuestros
            servicios de transporte aéreo ofrecen los tiempos de tránsito más
            rápidos posibles para sus envíos críticos. Diseñadas para carga
            urgente, de alto valor o sensible al tiempo, nuestras soluciones
            prioritarias aseguran que sus mercancías cumplan con los plazos más
            exigentes, a nivel mundial.
          </p>
          <p>
            Apoyados en una sólida red de aerolíneas asociadas, proporcionamos
            un transporte seguro y confiable para todo tipo de mercancía, desde
            piezas de repuesto y componentes esenciales hasta bienes de alto
            valor y productos perecederos. Nuestro equipo gestiona todos los
            aspectos de la logística de carga aérea, incluyendo un rápido
            despacho de aduanas, una manipulación meticulosa y una programación
            precisa, garantizando que su valiosa carga llegue a su destino de
            forma rápida y segura, minimizando el tiempo de inactividad de sus
            operaciones.
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
          <p>Envíos por Aire y Tierra</p>
        </div>
        <div className={milestones.card}>
          <h3>600+</h3>
          <p>Contenedores completos por vía marítima</p>
        </div>
        <div className={milestones.card}>
          <h3>35000+</h3>
          <p>Clientes Satisfechos</p>
        </div>
      </div>

      <section className={hero.container}>
        <div className={hero.content}>
          <h2>Lo que nos hace diferentes</h2>
          <p>
            CTM Cargo Transportation Management LLC ofrece una gama completa de
            servicios de logística y transporte internacional, garantizando el
            movimiento fluido de sus mercancías, tanto a nivel transfronterizo
            como global. Ofrecemos soluciones a la medida, respaldadas por una
            amplia experiencia y nuestro compromiso con la eficiencia y la
            confiabilidad.
          </p>
          <button className={hero.button}>
            <Link href="book">Reservar Ahora</Link>
          </button>
        </div>
      </section>
    </>
  );
}
