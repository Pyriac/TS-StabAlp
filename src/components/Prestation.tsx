import { useState, useEffect, useRef } from "react";
import "../assets/styles/prestations.css";
import "../assets/styles/progress.css";
import "../assets/styles/popUp.css";

type PrestationProps = {
  prestation: {
    name: string;
    image: string[];
    imageAlt: string[];
    description: string;
  };
};

export default function Prestation({ prestation }: PrestationProps) {
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
              const newIndex = prevIndex < prestation.image.length - 1 ? prevIndex + 1 : 0;
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
  }, [prestation.image.length]);
  //INTERRACTION CLAVIER
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prestation.image.length - 1));
      } else if (event.key === "ArrowRight") {
        setIndex((prevIndex) => (prevIndex < prestation.image.length - 1 ? prevIndex + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prestation.image.length]);

  return (
    <article key={prestation.name} className="presta-article-carte">
      <div className="presta-div-image">
      { prestation.image.length === 1 ? "" : 
            <div
            onClick={() =>
              setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prestation.image.length - 1))
            }
            className="nav-arrow left"
          />
      }
      <img
        src={prestation.image[index]}
        alt={prestation.imageAlt[index]}
        className="presta-image"
        loading="lazy"
        onClick={() => {
            setPopupIndex(index);
            setIsPopupOpen(true);
          }}
      />
      { prestation.image.length === 1 ? "" : 
      <div
        onClick={() =>
          setIndex((prevIndex) => (prevIndex < prestation.image.length - 1 ? prevIndex + 1 : 0))
        }
        className="nav-arrow right"
      />
      }
      { prestation.image.length === 1 ? "" :
              <div className="progress-wrapper">
              {prestation.image.map((_, i) => (
                <div key={i} className="progress-segment">
                  {i === index && <div className="progress-fill" style={{ width: `${progress}%` }} />}
                </div>
              ))}
            </div>
      }
      </div>
     
      <div className="presta-text">
      <h2 className="presta-titre subTitle">{prestation.name}</h2>
      <p className="presta-desc">{prestation.description}</p>
      </div>
      {isPopupOpen && (
  <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
    { prestation.image.length === 1 ? "" :
      <div
        className="nav-arrow arrow-popup left popLeft"
        onClick={() =>
          setPopupIndex((popupIndex - 1 + prestation.image.length) % prestation.image.length)
        }
      />
}
      <img
        src={prestation.image[popupIndex]}
        alt={prestation.imageAlt[popupIndex]}
        className="popup-image fade-image"
      />
       { prestation.image.length === 1 ? "" :
      <div
        className="nav-arrow arrow-popup right popRight"
        onClick={() =>
          setPopupIndex((popupIndex + 1) % prestation.image.length)
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
