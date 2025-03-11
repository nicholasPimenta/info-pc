import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2025 InfoPC. Todos os direitos reservados.</p>
      <div>
        <a
          href="#"
          className="text-white link-primary me-3 text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-white link-primary me-3 text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="mailto:contato@infoPC.com.br"
          className="text-white link-primary text-decoration-none"
        >
          E-mail
        </a>
      </div>
    </footer>
  );
};

export default Footer;
