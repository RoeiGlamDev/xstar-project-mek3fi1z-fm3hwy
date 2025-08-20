import React from 'react';
import './AboutSection.css'; // Assuming you have a CSS file for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to FashionTV Cosmetics, where luxury meets beauty. Our products are crafted with the finest ingredients to elevate your makeup experience.
                </p>
                <p className="about-description">
                    We believe that every individual deserves to feel glamorous and confident. Our elegant range of cosmetics is designed to enhance your natural beauty.
                </p>
                <p className="about-description">
                    Join us on this journey of self-expression and sophistication. Discover the art of luxury cosmetics with FashionTV.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;