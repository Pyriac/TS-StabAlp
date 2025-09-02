import { Helmet } from "react-helmet";
import '../assets/styles/notFound.css';
import Image404 from '../assets/images/404.jpg';
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFoundPage">
      <Helmet>
        <title>404 – Page non trouvée | Stab'Alp</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>Oups… La page que vous cherchez n’existe pas.</h1>
        <img src={Image404} alt="Page non trouvée"/>
      <p>Mais ne vous en faites pas... l'herbe est plus verte par ici</p>
      <div className="button button-header-home rectangle marged-top button-centered">
        <Link to="/">Retourner à l'Accueil</Link>
      </div>
    </div>
  );
}