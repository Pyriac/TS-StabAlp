import realisations from "../assets/data/realisations.ts"
import Realisation from "../components/Realisation.tsx";
import { useState } from "react";

import "../assets/styles/prestations.css";

export default function Réalisations() {
  const [index, setIndex] = useState(0);
  const setDisplay = (key: number) => {
    setIndex(key);
  };
  return (
    <>
    <main className="main-prestations">
      <h1 className="firstTitle">Mes réalisations</h1>
      <section className="presta-section">
          <Realisation
            key={realisations[index].name}
           realisation={realisations[index]}
          />
      </section>

    </main>
    <div className="menu-prestations">
          {realisations.map((realisation, key) => (
          <h3 onClick={() => setDisplay(key)} className={`${key === index ? "presta-active" : "presta-inactive"}`}>{realisation.name}</h3>
    ))}</div>
    </>
  );
}