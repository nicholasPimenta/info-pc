import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header: React.FC = () => {
  const { cartCount } = useContext(CartContext); // Acessando a quantidade de itens no carrinho

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between align-items-center">
      {/* Logo da Loja (Agora é um link para a Página Inicial) */}
      <Link to="/" className="navbar-brand">
        <i className="fas fa-laptop-house me-2"></i> {/* Ícone da Loja */}
        Loja de Informática
      </Link>

      {/* Aba do Carrinho */}
      <Link to="/carrinho" className="nav-link d-flex align-items-center text-light">
        <i className="fas fa-shopping-cart me-2"></i> {/* Ícone do Carrinho */}
        Carrinho
        {cartCount > 0 && (
          <span className="badge bg-primary ms-2">{cartCount}</span>
        )}
      </Link>
    </nav>
  );
};

export default Header;
