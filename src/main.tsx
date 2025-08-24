import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import "./index.css";
import Prestations from "./pages/Prestations.tsx";
import Realisations from "./pages/Realisations.tsx";
import Innovations from "./pages/Innovations.tsx";
import Contact from "./pages/Contact.tsx";
import MentionsLegales from "./pages/Mentions_legales.tsx";
import PolitiqueDeConfidentialite from "./pages/Politiques_de_confidentialite.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { 
        path: "/prestations", 
        element: <Prestations /> 
      },
      {
        path: "/realisations",
        element: <Realisations />,
      },
      { 
        path: "/innovations", 
        element: <Innovations /> 
      },
      { 
        path: "/contact", 
        element: <Contact /> 
      },
      {
        path: "/mentions-legales",
        element: <MentionsLegales />
      }
      ,
      {
      path: "/politique-de-confidentialite",
      element: <PolitiqueDeConfidentialite />
      }
      ,
      {
        path: "*", 
        element: <Home />,
      }
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found');
}
