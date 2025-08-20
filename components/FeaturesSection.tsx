import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <h2 className="features-title">Why Choose Our Cosmetics?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3 className="feature-title">Luxury Ingredients</h3>
                        <p className="feature-description">Our products are crafted with the finest ingredients for a premium experience.</p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Elegant Packaging</h3>
                        <p className="feature-description">Each product is elegantly packaged, perfect for gifting or personal use.</p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Cruelty-Free</h3>
                        <p className="feature-description">We are committed to cruelty-free practices, ensuring no harm to animals.</p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Sustainable Practices</h3>
                        <p className="feature-description">Our brand focuses on sustainability, using eco-friendly materials and processes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;