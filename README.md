import React from 'react';

const Readme: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
      <h1 style={{ color: '#D5006D' }}>Luxury FashionTV Cosmetics</h1>
      <p>Welcome to the Luxury FashionTV Cosmetics website!</p>
      <h2>Overview</h2>
      <p>
        This website is designed to showcase our high-end cosmetics products with an elegant and luxurious feel.
        The color scheme features soft pink and white tones to enhance the luxurious experience.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Elegant design with a focus on luxury</li>
        <li>Responsive layout for all devices</li>
        <li>High-quality product images</li>
        <li>Easy navigation and user-friendly interface</li>
      </ul>
      <h2>Getting Started</h2>
      <p>To get started, clone the repository and install the dependencies:</p>
      <pre>
        <code>
          git clone https://github.com/yourusername/luxury-fashion-tv-cosmetics.git
          <br />
          cd luxury-fashion-tv-cosmetics
          <br />
          npm install
        </code>
      </pre>
      <h2>Running the Application</h2>
      <p>To run the application in development mode, use the following command:</p>
      <pre>
        <code>npm start</code>
      </pre>
      <h2>Contributing</h2>
      <p>We welcome contributions! Please fork the repository and submit a pull request.</p>
      <h2>License</h2>
      <p>This project is licensed under the MIT License.</p>
    </div>
  );
};

export default Readme;