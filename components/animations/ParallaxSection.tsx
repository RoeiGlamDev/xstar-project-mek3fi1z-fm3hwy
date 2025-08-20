import React from 'react';
import './ParallaxSection.css'; // Importing CSS for styling

const ParallaxSection: React.FC = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-background"></div>
      <div className="parallax-content">
        <h1 className="parallax-title">Luxury Awaits</h1>
        <p className="parallax-description">
          Discover the elegance of FashionTV cosmetics.
        </p>
        <button className="parallax-button">Shop Now</button>
      </div>
    </div>
  );
};

export default ParallaxSection;