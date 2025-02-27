import React from 'react';
import Products from '../components/Products';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <div className="container my-4">
        <h1>Bem-vindo à Loja de Informática</h1>
        <Products />
        <Contact />
      </div>
    </>
  );
};

export default Home;