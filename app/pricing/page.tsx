import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: white; // White background for elegance
  color: #d5006d; // Pink text color for luxury feel
  padding: 40px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
`;

const PricingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #d5006d; // Pink header
  color: white;
  padding: 15px;
`;

const TableCell = styled.td`
  border: 1px solid #d5006d; // Pink border for cells
  padding: 15px;
  text-align: center;
`;

const PricingPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>Luxury FashionTV Cosmetics Pricing</Title>
      <PricingTable>
        <thead>
          <tr>
            <TableHeader>Product</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Description</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>Luxury Lipstick</TableCell>
            <TableCell>$35</TableCell>
            <TableCell>Rich, vibrant colors for every occasion.</TableCell>
          </tr>
          <tr>
            <TableCell>Silk Foundation</TableCell>
            <TableCell>$50</TableCell>
            <TableCell>Flawless coverage with a silky finish.</TableCell>
          </tr>
          <tr>
            <TableCell>Exquisite Eyeshadow Palette</TableCell>
            <TableCell>$65</TableCell>
            <TableCell>A collection of luxurious shades.</TableCell>
          </tr>
        </tbody>
      </PricingTable>
    </PageContainer>
  );
};

export default PricingPage;