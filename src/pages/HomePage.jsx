import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
  font-size: 2.5rem;
  font-family:Roboto;
  background: linear-gradient(270deg, black, blue, green, black);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 5s ease infinite;
`;
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Title>Best Sealing Products</Title>
      <ProductsList />
      <Footer/>
    </div>
  );
}

export default HomePage;
