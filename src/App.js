import './styles.css';
import React from 'react';
import Slideshow from './components/Slideshow';
import styled from 'styled-components';

export default function App() {
  return (
    <main>
      <Title>Productos destacados</Title>
      <Slideshow />
    </main>
  );
}

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
