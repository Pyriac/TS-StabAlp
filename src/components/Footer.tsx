import Logo from "../assets/images/logo-white.png";
import "../assets/styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerContact">
        <img src={Logo} alt="Logo de Stab' Alp société de conseil en bâtiment d'èlevage" />
        <p>Laurent Pineau</p>
        <p>Conseiller agricole</p>
        <div className="phone">
        <p>06 86 53 42 05</p>
        </div>
        <div className="email">
        <p>laurent.pineau73@gmail.com</p>
        </div>
        </div>
        <div>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/prestations">Prestations</a></li>
                <li><a href="/realisations">Réalisations</a></li>
                <li><a href="/innovations">Innovations</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <p>© 2025 Stab'Alp - Laurent Pineau</p>
        <p>
          <a href="/mentions-legales">Mentions légales</a> |{" "}
          <a href="/politique-de-confidentialite">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}