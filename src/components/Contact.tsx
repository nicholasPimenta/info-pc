import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container my-5">
      <h2>Contato</h2>
      <p>Se você tiver alguma dúvida ou precisar de mais informações, entre em contato conosco!</p>
      <div className="row">
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
  );
};

export default Contact;