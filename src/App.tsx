import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;