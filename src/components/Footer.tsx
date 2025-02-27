import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2025 Loja de Informática. Todos os direitos reservados.</p>
      <div>
        <a href="https://www.instagram.com/loja_informatica" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.facebook.com/loja_informatica" className="text-white me-3" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="mailto:contato@loja-informatica.com.br" className="text-white">
          E-mail
        </a>
      </div>
    </footer>
  );
};

export default Footer;