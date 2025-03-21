import React from "react";
import { BsFillXDiamondFill } from "react-icons/bs";
import { FaTruck, FaShieldAlt } from "react-icons/fa";

const InfoSection: React.FC = () => {
  return (
    <div className="bg-dark text-white py-4 shadow-lg">
      <div className="container text-center">
        <div className="row">
          {/* Frete Grátis */}
          <div className="col-md-4">
            <FaTruck size={50} className="text-primary mb-2" />
            <h5>Frete Grátis</h5>
            <p>Para todo o Brasil em compras acima de R$ 2000.</p>
          </div>

          {/* Desconto no Pix */}
          <div className="col-md-4">
            <BsFillXDiamondFill size={50} className="text-success mb-2" />
            <h5>Desconto no Pix</h5>
            <p>Ganhe 15% de desconto pagando via Pix.</p>
          </div>

          {/* Garantia */}
          <div className="col-md-4">
            <FaShieldAlt size={50} className="text-warning mb-2" />
            <h5>Garantia de 3 Meses</h5>
            <p>Todos os produtos com garantia de 3 meses.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;