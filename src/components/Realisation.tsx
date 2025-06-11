import { useState, useEffect, useRef } from "react";
import "../assets/styles/prestations.css";
import "../assets/styles/progress.css";
import "../assets/styles/popUp.css";
import "../assets/styles/realisation.css"

type RealisationProps = {
  realisation: {
    name: string;
    image: string[];
    imageAlt: string[];
    description: string;
    localisation: string;
    subTitle: string;
  };
};

export default function Realisation({ realisation }: RealisationProps) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const isUpdatingIndex = useRef(false);
  //RESET PROGRESS BAR SUR CHANGEMENT D'INDEX
  useEffect(() => {
    setProgress(0);
  }, [index]);
  //SCROLLER AUTOMATIQUE
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          if (!isUpdatingIndex.current) {
            isUpdatingIndex.current = true;
            setIndex((prevIndex) => {
              const newIndex = prevIndex < realisation.image.length - 1 ? prevIndex + 1 : 0;
              console.log("Nouvel index calculé : ", newIndex);
              isUpdatingIndex.current = false;
              return newIndex;
            });
          }
          return 0;
        }
      });
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [realisation.image.length]);
  //INTERRACTION CLAVIER
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : realisation.image.length - 1));
      } else if (event.key === "ArrowRight") {
        setIndex((prevIndex) => (prevIndex < realisation.image.length - 1 ? prevIndex + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [realisation.image.length]);

  return (
    <article key={realisation.name} className="presta-article-carte">
      <div className="presta-div-image">
      { realisation.image.length === 1 ? "" : 
            <div
            onClick={() =>
              setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : realisation.image.length - 1))
            }
            className="nav-arrow left  arrow-main"
          />
      }
      <img
        src={realisation.image[index]}
        alt={realisation.imageAlt[index]}
        className="presta-image"
        loading="lazy"
        onClick={() => {
            setPopupIndex(index);
            setIsPopupOpen(true);
          }}
      />
      { realisation.image.length === 1 ? "" : 
      <div
        onClick={() =>
          setIndex((prevIndex) => (prevIndex < realisation.image.length - 1 ? prevIndex + 1 : 0))
        }
        className="nav-arrow right  arrow-main"
      />
      }
      { realisation.image.length === 1 ? "" :
              <div className="progress-wrapper">
              {realisation.image.map((_, i) => (
                <div key={i} className="progress-segment">
                  {i === index && <div className="progress-fill" style={{ width: `${progress}%` }} />}
                </div>
              ))}
            </div>
      }
      </div>
     
      <div className="presta-text">
      <h2 className="presta-titre subTitle">{realisation.name}</h2>
      <p>{realisation.localisation}</p>
      <h3>{realisation.subTitle}</h3>
      <p className="presta-desc">{realisation.description}</p>
      </div>
      {isPopupOpen && (
  <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
    { realisation.image.length === 1 ? "" :
      <div
        className="nav-arrow arrow-popup left popLeft arrow-white"
        onClick={() =>
          setPopupIndex((popupIndex - 1 + realisation.image.length) % realisation.image.length)
        }
      />
}
      <img
        src={realisation.image[popupIndex]}
        alt={realisation.imageAlt[popupIndex]}
        className="popup-image fade-image"
      />
       { realisation.image.length === 1 ? "" :
      <div
        className="nav-arrow arrow-popup right popRight arrow-white"
        onClick={() =>
          setPopupIndex((popupIndex + 1) % realisation.image.length)
        }
      />
}
      <button onClick={() => setIsPopupOpen(false)} className="close-btn">
        ✕
      </button>
    </div>
  </div>
)}
    </article>
  );
}
