import permisImage from "../images/stab_permis.webp";
import dexelImage from "../images/DEXEL_stab.webp";
import defaultImage from "../images/defaultImage_Stab.png";
import installationClassee1 from "../images/installation-classee1.webp";
import plan1 from "../images/plan1.webp";
import plan2 from "../images/plan2.webp";
import plan3 from "../images/plan3.webp";
import plan4 from "../images/plan4.webp";
import esquisse1 from "../images/esquisse1.webp";
import esquisse2 from "../images/esquisse2.webp";
import esquisse3 from "../images/esquisse3.webp";
import chiffrage1 from "../images/chiffrage1.webp";
import chiffrage2 from "../images/chiffrage2.webp";
const prestations = [
  {
    name: "Plans et esquisses",
    image: [plan1, plan2, plan3, plan4, esquisse1, esquisse2, esquisse3],
    imageAlt:
      ["Plan 3D intérieur d'un bâtiment d'élevage fait sur ArchiTechPC par Laurent Pineau, conseiller agricole Stab'Alp",
       "Plan 3D intérieur d'un bâtiment agricole fait sur ArchiTechPC par Laurent Pineau, conseiller agricole Stab'Alp",
       "Plan 3D extérieur d'un bâtiment d'élevage fait sur ArchiTechPC par Laurent Pineau, conseiller agricole Stab'Alp", 
       "Plan 3D extérieur d'un bâtiment agricole fait sur ArchiTechPC par Laurent Pineau, conseiller agricole Stab'Alp",
       "Esquisse d'un bâtiment d'élevage fait sur ArchiTechPC par Laurent Pineau, conseiller agricole Stab'Alp",
       "Esquisse d'un bâtiment agricole fait sur ArchiTechPC par Laurent Pineau, conseiller agricole Stab'Alp",
       "Esquisse d'un bâtiment d'élevage fait sur ArchiTechPC par Laurent Pineau, conseiller agricole Stab'Alp"],
    description:
      "Après une première rencontre, je réalise d'abord des plans simplifiés de votre projet (en plusieurs versions le plus souvent). Les rencontres suivantes permettent de choisir une version définitive et de la peaufiner. La version finale est transcrite en plan, coupes, perspective qui permettent de solliciter des entreprises pour obtenir des devis. Ces éléments sont utilisés pour la réalisation du permis de construire.",
  },
  {
    name: "Chiffrage estimatif",
    image: [chiffrage1, chiffrage2],
    imageAlt: 
    ["coût estimatif détaillé d'un bâtiment d'élevage réalisé par Laurent Pineau, conseiller agricole Stab'Alp",
     "coût estimatif détaillé d'un bâtiment d'élevage résumé par lot réalisé par Laurent Pineau, conseiller agricole Stab'Alp"
    ],
    description:
      "A la demande, je réalise des chiffrages estimatif de coût de bâtiment. Je bénéficie d'une base de données de coût soient régionaux, soient nationaux. Je peux aussi consulter directement des entreprises pour avoir une idée plus précise d'un lot ou d'un équipement.",
  },
  {
    name: "Permis de construire",
    image: permisImage,
    imageAlt:
      "Première page du permis de construire officiel de l'état français",
    description:
      "Après la phase de conception du projet, je propose en partenariat avec des architectes, dessinateurs ou maîtres d'oeuvres la réalisation du dossier de demande de permis de construire. Le travail en partenariat avec des architectes est obligatoire pour tous les bâtiments de plus de 800 m2. Cette prestation fournit l'ensemble des éléments nécessaires pour obtenir son permis de construire. Il ne vous reste qu'à signer les formulaires !"
  },
  {
    name: "DEXEL",
    image: dexelImage,
    imageAlt: "Tas de lisier entouré d'un muret en béton",
    description:
      "Par le biais de la méthode DEXEL je vous propose d'estimer la capcité de stockage de fumier et de lisier de votre exploitation. Je suis agréé Dexel depuis 1996 et répertorié sur les listes du ministère de l'agriculture.",
  },
  {
    name: "Installations classées",
    image: installationClassee1,
    imageAlt: "Plan d'une installation classée pour la protection de l'environnement",
    description: " Les exploitations agricoles dépendent de 2 régimes en fonction de leur taille. Les plus petites ainsi que toutes les exploitations ovines et caprines sont en principe soumises au règlement sanitaire départemental (le RSD, qui comme son nom l'indique diffère dans chaque département). Les exploitations de plus de 50 vaches laitières ou 100 vaches allaitantes dépendent de la législation sur les Installations Classées pour la Protection de l'Environnement (ICPE, règlement national). Dans le cadre d'un projet de construction ou d'extension, la déclaration au titre des Installations Classées est obligatoire pour obtenir un permis d'exploiter. Les justificatifs sont demandés pour toute demande de permis de construire ou de subvention. Aujourd'hui, cette déclaration peut se faire en ligne.",
  },
  {
    name: "Diagnostic de site",
    image: defaultImage,
    imageAlt: "Default Image",
    description:
      "Le diagnostic de site fait le point sur les contraintes règlementaires, environnementales et urbanistiques auxquelles sont soumis les bâtiments de l'exploitation. C'est un  état des lieux le plus exhaustif possible concernant les distances d'implantation des bâtiments par rapport aux habitations, aux cours d'eau, aux routes... Il permet aussi de vérifier si vos ouvrages de stockage de fumier ou de lisier présentent les durées nécessaires ou les capacités à réaliser lors d'un projet de construction neuve ou de mise aux normes.",
  },
];

export default prestations;
