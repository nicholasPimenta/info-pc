import React from "react";
import { FaTruck, FaCreditCard, FaShieldAlt } from "react-icons/fa"; // Ícones para visual mais profissional

const InfoSection: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        {/* Frete Grátis */}
        <div className="col-md-4">
          <FaTruck size={50} className="text-primary mb-2" />
          <h5>Frete Grátis</h5>
          <p>Para todo o Brasil em compras acima de R$ 300.</p>
        </div>

        {/* Desconto no Pix */}
        <div className="col-md-4">
          <FaCreditCard size={50} className="text-success mb-2" />
          <h5>Desconto no Pix</h5>
          <p>Ganhe 10% de desconto pagando via Pix.</p>
        </div>

        {/* Garantia */}
        <div className="col-md-4">
          <FaShieldAlt size={50} className="text-warning mb-2" />
          <h5>Garantia de 3 Meses</h5>
          <p>Todos os produtos com garantia de 3 meses.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;