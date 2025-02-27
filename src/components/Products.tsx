import React, { useContext } from 'react';
import { CartContext, Product } from '../context/CartContext';

const products: Product[] = [
  { id: 1, name: 'Notebook A', price: 3500, imageUrl: 'url-do-imagem-a.jpg', description: 'Notebook potente para jogos e produtividade.' },
  { id: 2, name: 'Notebook B', price: 4500, imageUrl: 'url-do-imagem-b.jpg', description: 'Ideal para trabalho remoto e multitarefas.' },
  { id: 3, name: 'Notebook C', price: 5500, imageUrl: 'url-do-imagem-c.jpg', description: 'Alta performance e design premium.' },
  { id: 4, name: 'Placa de Vídeo X', price: 2000, imageUrl: 'url-da-imagem-x.jpg', description: 'Placa de vídeo ideal para edição e games.' },
  { id: 5, name: 'Placa de Vídeo Y', price: 2500, imageUrl: 'url-da-imagem-y.jpg', description: 'Performance incrível para jogos em 4K.' },
  { id: 6, name: 'Processador Z', price: 1500, imageUrl: 'url-da-imagem-z.jpg', description: 'Processador eficiente para tarefas diárias.' },
];

const Products: React.FC = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container my-4">
      {/* Pôster promocional */}
      <div className="promo-banner text-center mb-5">
        <img
          src="url-do-poster-promocional.jpg"
          alt="Promoção Especial!"
          className="img-fluid"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
        />
        <h3 className="my-3">Promoção Especial - Só Hoje!</h3>
        <p>Descontos imperdíveis em produtos de informática! Aproveite agora.</p>
      </div>

      {/* Lista de Produtos */}
      <h2>Produtos</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Preço: R$ {product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;