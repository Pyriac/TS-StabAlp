import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#239fc0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s, background-color 0.3s',
        pointerEvents: isVisible ? 'auto' : 'none',
        zIndex: 1000,
        border: 'none',
        padding: 0
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2396b6ff')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#239fc0')}
    >
      {/* Flèche “pointe” vers le haut */}
      <div
        style={{
          width: '12px',
          height: '12px',
          borderTop: '2px solid white',
          borderRight: '2px solid white',
          transform: 'rotate(-45deg) translateY(2px) translateX(-2px)'
        }}
      />
    </button>
  );
};

export default ScrollToTopButton;