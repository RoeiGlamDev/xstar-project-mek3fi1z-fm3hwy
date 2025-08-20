import React from 'react';
import './AboutPage.css'; // Importing CSS for styling

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>About FashionTV Cosmetics</h1>
                <p>Your destination for luxury beauty.</p>
            </header>
            <section className="about-content">
                <h2>Our Story</h2>
                <p>
                    At FashionTV Cosmetics, we believe in enhancing your natural beauty with elegance and sophistication. 
                    Our products are crafted with the finest ingredients, designed for those who appreciate the finer things in life.
                </p>
                <h2>Our Vision</h2>
                <p>
                    We aim to empower individuals to express themselves through luxurious cosmetics that inspire confidence and allure.
                </p>
            </section>
            <footer className="about-footer">
                <p>© 2023 FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;