import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$99</p>
                        <p className="card-description">Essential cosmetics for everyday elegance.</p>
                        <button className="btn">Choose Package</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$199</p>
                        <p className="card-description">A luxurious selection for the sophisticated you.</p>
                        <button className="btn">Choose Package</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Deluxe Package</h3>
                        <p className="card-price">$299</p>
                        <p className="card-description">The ultimate collection for the fashion-forward.</p>
                        <button className="btn">Choose Package</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;