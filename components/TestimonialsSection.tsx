import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
    {
        name: "Sophia Loren",
        feedback: "These cosmetics have transformed my beauty routine. Luxurious and effective!",
        image: "/images/testimonial1.jpg", // Path to image
    },
    {
        name: "Gigi Hadid",
        feedback: "Absolutely love the quality and elegance of these products!",
        image: "/images/testimonial2.jpg", // Path to image
    },
    {
        name: "Zendaya",
        feedback: "The perfect blend of luxury and performance. Highly recommend!",
        image: "/images/testimonial3.jpg", // Path to image
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <h3 className="client-name">{testimonial.name}</h3>
                        <p className="client-feedback">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;