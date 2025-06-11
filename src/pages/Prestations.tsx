import prestations from "../assets/data/prestations.ts"
import Prestation from "../components/Prestation.tsx";
import { useState } from "react";

import "../assets/styles/prestations.css";

export default function Prestations() {
  const [index, setIndex] = useState(0);
  const setDisplay = (key: number) => {
    setIndex(key);
  };
  return (
    <>
    <main className="main-prestations">
      <h1 className="firstTitle">Mes prestations</h1>
      <section className="presta-section">
          <Prestation
            key={prestations[index].name}
            prestation={{
              ...prestations[index],
              image: Array.isArray(prestations[index].image)
                ? prestations[index].image
                : [prestations[index].image],
              imageAlt: Array.isArray(prestations[index].imageAlt)
                ? prestations[index].imageAlt
                : [prestations[index].imageAlt],
            }} />
      </section>

    </main>
    <div className="menu-prestations">
          {prestations.map((prestation, key) => (
          <h3 onClick={() => setDisplay(key)} className={`${key === index ? "presta-active" : "presta-inactive"}`}>{prestation.name}</h3>
    ))}</div>
    </>
  );
}
