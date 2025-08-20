'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 200,
      reset: false,
    });

    sr.reveal('.reveal', { origin: 'bottom' }); // Customize reveal settings as needed
  }, []);

  return <div className="reveal">{children}</div>;
};

export default ScrollRevealComponent;