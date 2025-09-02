import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./assets/styles/app.css";
import "./assets/styles/titles.css";


function App() {

  const location = useLocation();
  const meta: Record<string, { title: string; description: string }> = {
    "/": {
      title: "Stab'Alp | Laurent Pineau - expert bâtiment d'élevage en Auvergne-Rhône-Alpes",
      description: "Conseil en bâtiment agricole depuis 1996. Stab'Alp accompagne vos projets de construction et rénovation de bâtiments d’élevage."
  },
  "/prestations": {
    title: "Prestations bâtiment d’élevage – Stab'Alp | Laurent Pineau",
    description: "Découvrez les services proposés par Laurent Pineau : conception, rénovation et mise aux normes de bâtiments agricoles."
  },
  "/realisations": {
    title: "Réalisations bâtiments d’élevage – Stab'Alp | Laurent Pineau",
    description: "Exemples de projets accompagnés par Stab'Alp : bâtiments d’élevage, fromageries et ateliers agricoles en montagne."
  },
  "/innovations": {
    title: "Innovations bâtiment agricole – Stab'Alp | Laurent Pineau",
    description: "Laurent Pineau propose des solutions innovantes pour la construction et la rénovation de bâtiments d’élevage."
  },
  "/contact": {
    title: "Contact – Laurent Pineau | Stab'Alp bâtiment d’élevage",
    description: "Contactez Laurent Pineau, conseiller en bâtiment d’élevage, pour vos projets agricoles en Auvergne-Rhône-Alpes."
  }
};
  const { title, description } = meta[location.pathname] || {
    title: "Stab'Alp | Conseil en bâtiment agricole",
    description: "Stab'Alp est un bureau d'études spécialisé en bâtiments d’élevage, fondé par Laurent Pineau.",
  };

const baseJsonLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Stab'Alp",
  "description": description,
  "image": "https://stabalp.fr/assets/logo-DIRAi4Dq.png",
  "url": "https://www.stabalp.fr",
  "telephone": "+33 6 86 53 42 05",
  "email": "laurent.pineau73@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 Rue de la Ribeyre",
    "addressLocality": "Lorcières",
    "postalCode": "15320",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.957875622044206, 
    "longitude": 3.2709880707845542
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Auvergne-Rhône-Alpes"
  },
  "founder": {
    "@type": "Person",
    "name": "Laurent Pineau"
  },
  "foundingDate": "1996"
};

// Ajouter hasOfferCatalog seulement sur /prestations
const jsonLD = location.pathname === "/prestations"
  ? {
      ...baseJsonLD,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Prestations bâtiment agricole",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conception de bâtiments agricoles" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rénovation de bâtiments d'élevage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mise aux normes" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DEXEL" } }
        ]
      }
    }
  : baseJsonLD;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Lorcières" />
        <meta name="geo.position" content="44.957875622044206;3.2709880707845542" />
        <meta name="ICBM" content="44.957875622044206,3.2709880707845542" />
        <meta property="og:url" content={`https://www.stabalp.fr${location.pathname}`} />
        <meta property="og:image" content="https://www.stabalp.com/assets/images/Portrait_Laurent_Pineau.png" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLD)}
        </script>
      </Helmet>
      <NavBar />
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
