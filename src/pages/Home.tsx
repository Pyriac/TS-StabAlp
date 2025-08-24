import "../assets/styles/home.css";
import "../assets/styles/button.css";
import Back from "../assets/images/background.webp";
import Portrait from "../assets/images/Portrait_Laurent_Pineau.jpg";
import Cabestan from "../assets/images/Logo_Cabestan.png";
import { Link } from "react-router-dom";
import ScrollTopButton from "../components/ScrollTopButton";

export default function Home() {
  return (
    <>
      <div
        className="homeContainer"
        style={{
          backgroundImage: `url(${Back})`,
        }}
      >
        <div itemScope itemType="https://schema.org/LocalBusiness" className="blackFilter">
          <h2>Conseil en bâtiment d'élevage depuis 1996</h2>
          <h3>Spécialiste en bâtiment agricole de montagne</h3>
          <p>
            <span itemProp="name">Stab' Alp</span> est un <span itemProp="description">bureau d'études spécialisé dans le conseil en
            bâtiment d'élevage.</span> Je vous accompagne dans la conception de vos
            projets de construction, de rénovation ou de mise aux normes de vos
            bâtiments agricoles.
            <br />
            <span itemProp="areaServed"><strong>Zone d’intervention&nbsp;: Auvergne – Rhône-Alpes</strong></span>
             
          </p>
          <div className="button button-header-home rectangle">
            <a href="#presentation">En savoir plus</a>
          </div>
        </div>
      </div>
      <section id="presentation">
        <article>
          <h1 className="firstTitle">Stab'Alp par Laurent Pineau</h1>
          <div className="presentation">
            <div>
              <p>
                Stab'Alp, c'est une entreprise indépendante de conseil en
                bâtiments agricoles et plus spécialisée sur l'élevage des
                ruminants. Le principe est de vous proposer un accompagnement
                adapté lors de l'élaboration de vos projets bâtiments. Notre
                collaboration commence dès la réflexion initiale du projet. Je
                vous fourni des documents techniques et administratifs pour sa
                réalisation.
              </p>
              <p>Pour trouver le nom, j'ai un peu fait tourner les méninges.</p>
              <p>
                <strong>Stab'Alp</strong> : <b>S</b>ervices <b>T</b>echniques
                pour l'<b>A</b>ménagement des <b>B</b>âtiments <b>A</b>gricoles{" "}
                <b>L</b>aurent <b>P</b>ineau
              </p>
              <p>
                <b>Stab</b> comme diminutif de stabulation et <b>Alp</b> comme
                référence évidente aux Alpes et à la montagne.
              </p>
            </div>
            <div className="portrait">
              <img
                src={Portrait}
                alt="Portrait de Laurent Pineau, conseiller agricole de Stab'Alp"
              />
              <p>Laurent PINEAU</p>
            </div>
          </div>

          <div className="button button-header-home rectangle marged-top button-centered">
            <Link to="/contact" className="contact-link">
              Contactez - moi
            </Link>
          </div>
        </article>
        <article>
          <h2 className="subTitle">Mon Parcours de Conseiller agricole</h2>
          <p>
            J'ai commencé ma carrière de conseiller en bâtiments d'élevage en
            1996 à la Chambre d'Agriculture de Loire Atlantique. J'y suis resté
            2 ans et demi avant de venir en Savoie où j'ai officié jusqu'en
            2013. <br />
            C'est à ce moment là que j'ai choisi de m'installer comme
            indépendant.
          </p>
          <p>
            J'ai rencontré un nombre conséquent d'exploitants agricoles pour des
            projets très divers allant de l'élevage de vaches laitières (large
            majorité de mes interventions) aux ateliers de transformation
            d'escargots en passant par les bâtiments pour troupeaux allaitants
            (vaches, brebis), élevage caprin avec atelier fromager... <br />
            Quelques interventions aussi en filière végétale (fruits, noix et
            viticulture).
          </p>
          <p>
            Je suis intervenu aussi bien en plaine (d'abord en Loire Atlantique
            puis dans les basses vallées savoyardes) qu'en haute montagne (1700
            m), ce qui m'a permis de me confronter à plusieurs modèles agricoles
            et des contraintes très diverses.
          </p>
          <div className="button button-header-home rectangle marged-top button-centered">
            <Link to="/realisations" className="contact-link">
              Mes réalisations
            </Link>
          </div>
        </article>
        <article>
          <h2 className="subTitle">Stab' Alp et Cabestan</h2>
          <p>
            Stab'Alp, c'est juste un nom commercial. En fait je suis associé
            d'une CAE (Coopérative d'Activité et d'Emploi) nommée Cabestan.
          </p>
          <p>
            Cabestan est une société anonyme d'entrepreneurs du bâtiment. On y
            retrouve autour de 250 artisans ou concepteurs du bâtiment.
          </p>
          <p>
            Cabestan gère la partie administrative de mon activité et mon
            assurance en tant que concepteur. Elle propose aussi un suivi
            technique et adminsitratif de mon activité grâce à l'appui de sa
            déléguée territoriale et des rencontres avec les autres salariés ou
            associés. Avec des valeurs partagées...
          </p>
          <div className="cabestan">
            <img
              src={Cabestan}
              alt="Logo de la coopérative d'entrepreneurs Cabestan"
            />
            <a
              href="https://www.cabestan.fr/"
              target="_blank"
              className="linkCabestan"
            >
              En savoir plus sur Cabestan
            </a>
          </div>
        </article>
      </section>
      <ScrollTopButton />
    </>
  );
}
