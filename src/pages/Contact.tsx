import GoogleMapEmbed from "../components/GoogleMapEmbed"

export default function Contact() {
    return (
      <>
          <h1>Contactez Laurent Pineau, conseiller bâtiment d'élevage chez Stab' Alp</h1>
  <section id="contact-details">
      <p>
        par téléphone au{" "}
        <a className="phone phone-black" href="tel:0686534205">
          06.86.53.42.05
        </a>
      </p>
      <p>
        ou par mail à{" "}
        <a className="email email-black"
          href="mailto:laurent.pineau73@gmail.com"
        >
          laurent.pineau73@gmail.com
        </a>
      </p>
    </section>
    <section className="contact-adress" id="contact-map">
      <GoogleMapEmbed address="3 Rue de la Ribeyre, 15320 Lorcières" width="700" height="525" />
      <h2>Adresse</h2>
      <p>3 Rue de la Ribeyre, 15320 Lorcières, Cantal, Auvergne-Rhône-Alpes</p>
      <a className="linkCabestan" href="https://maps.app.goo.gl/gSZ2R41n6dXQPhTP7" target="_blank" rel="noopener noreferrer">Voir sur Google Maps</a>
    </section>
    </>
    )
  }
  