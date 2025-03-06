import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="p-4 bg-light rounded-4 shadow border" style={{ borderColor: "#dee2e6" }}>
        <h2 className="text-center">Contato</h2>
        <p className="text-center">
          Se você tiver alguma dúvida ou precisar de mais informações, entre em contato conosco!
        </p>
        <div className="row text-center">
          <div className="col-md-6">
            <h5>Email:</h5>
            <p>contato@loja-informatica.com.br</p>
          </div>
          <div className="col-md-6">
            <h5>Telefone:</h5>
            <p>(11) 98765-4321</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;