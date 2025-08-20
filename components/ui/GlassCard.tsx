import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1); // Glass effect
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  color: #fff; // Text color
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h2`
  font-size: 24px;
  color: #ff69b4; // Pink color for title
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #fff; // White color for description
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;