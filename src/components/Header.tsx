import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const Header: React.FC = () => {
  const { cartCount } = useContext(CartContext); // Acessando a quantidade de itens no carrinho

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">
        <i className="fas fa-laptop-house"></i> {/* Ícone de informática (ou o que preferir) */}
        Loja de Informática
      </Link>

      {/* Toggle do menu em dispositivos menores */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto"> {/* "ms-auto" para alinhar à direita */}
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/carrinho" className="nav-link d-flex align-items-center">
              <i className="fas fa-shopping-cart me-2"></i> {/* Ícone de carrinho */}
              Carrinho
              {cartCount > 0 && ( // Mostra o contador de itens se houver itens no carrinho
                <span className="badge bg-primary ms-2">{cartCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;