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
      title: "Accueil | Stab'Alp - Laurent Pineau, conseiller agricole",
      description: "Conseil en bâtiment agricole depuis 1996. Stab'Alp accompagne vos projets en montagne.",
    },
    "/prestations": {
      title: "Prestations | Stab'Alp – Bâtiments agricoles de montagne | Stab'Alp",
      description: "Découvrez les prestations proposées par Laurent Pineau : construction, rénovation, mise aux normes de bâtiments d’élevage.",
    },
    "/realisations": {
      title: "Réalisations | Stab'Alp – Projets agricoles",
      description: "Exemples de projets accompagnés par Stab'Alp : bâtiments d’élevage, fromageries, ateliers agricoles, etc.",
    },
    "/innovations": {
      title: "Innovations | Stab'Alp - Techniques et approches nouvelles",
      description: "Laurent Pineau propose des solutions innovantes adaptées aux contraintes des zones de montagne.",
    },
    "/contact": {
      title: "Contact – Laurent Pineau | Conseil en bâtiment agricole",
      description: "Besoin d’un conseil ou d’un accompagnement ? Contactez Laurent Pineau, conseiller indépendant.",
    },
  };
  const { title, description } = meta[location.pathname] || {
    title: "Stab'Alp | Conseil en bâtiment agricole",
    description: "Stab'Alp est un bureau d'études spécialisé en bâtiments d’élevage, fondé par Laurent Pineau.",
  };

const baseJsonLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Stab'Alp",
  "description": description,
  "image": "https://stabalp.fr/assets/logo-DIRAi4Dq.png",
  "url": "https://www.stabalp.fr",
  "telephone": "+33 6 86 53 42 05",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Le Bourg",
    "addressLocality": "Lorcières",
    "postalCode": "15320",
    "addressCountry": "France"
  },
  "areaServed": {
    "@type": "Place",
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
        <meta property="og:url" content={`https://www.stabalp.fr${location.pathname}`} />
        <meta property="og:image" content="https://https://www.stabalp.com/assets/images/Portrait_Laurent_Pineau.png" />
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
