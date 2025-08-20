import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset; // Get current scroll position
    setScrollPosition(position);
    setIsVisible(position > 100); // Change visibility based on scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Attach scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);

  return { scrollPosition, isVisible }; // Return scroll position and visibility status
};

export default useScrollAnimation;