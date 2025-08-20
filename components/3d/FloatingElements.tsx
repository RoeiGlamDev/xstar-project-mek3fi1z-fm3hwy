import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff; // white background for elegance
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #ff69b4; // pink color for luxury feel
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite; // floating animation

  @keyframes float {
    0%, 100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-20px);
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ left: '10%', top: '20%' }} />
      <FloatingElement style={{ right: '15%', top: '40%' }} />
      <FloatingElement style={{ left: '30%', bottom: '10%' }} />
      <FloatingElement style={{ right: '25%', bottom: '30%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;