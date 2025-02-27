import React, { useContext, ChangeEvent } from "react";
import { CartContext } from "../context/CartContext";
import { Product } from "../context/CartContext"; // Se já não estiver importado

const products: Product[] = [
  { id: 1, name: "Notebook A", price: 3500, imageUrl: "link_da_imagem_a" },
  { id: 2, name: "Notebook B", price: 4500, imageUrl: "link_da_imagem_b" },
  { id: 3, name: "Notebook C", price: 5500, imageUrl: "link_da_imagem_c" },
  {
    id: 4,
    name: "Placa de Vídeo X",
    price: 2000,
    imageUrl: "link_da_imagem_x",
  },
  {
    id: 5,
    name: "Placa de Vídeo Y",
    price: 2500,
    imageUrl: "link_da_imagem_y",
  },
  { id: 6, name: "Processador Z", price: 1500, imageUrl: "link_da_imagem_z" },
];

// Função para obter produtos aleatórios
const getRandomProducts = (count: number) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const randomProducts = getRandomProducts(5); // Pegando 5 produtos aleatórios

  const handleQuantityChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <div className="container my-4">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {/* Exibindo os itens do carrinho */}
          <div className="list-group mb-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between border p-3 mb-2"
              >
                <div>
                  <strong>{item.name}</strong> - R$ {item.price} <br />
                  Quantidade:
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    style={{ width: "60px", marginLeft: "10px" }}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                  />
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          {/* Exibindo o total do carrinho */}
          <div className="d-flex justify-content-between">
            <h4>Total: R$ {getTotal().toFixed(2)}</h4>
            <button className="btn btn-success">Finalizar Compra</button>
          </div>
        </>
      )}

      {/* Carrossel de Produtos Aleatórios */}
      <h3 className="my-4">Confira outros produtos</h3>
      <div
        id="randomProductsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {randomProducts
            .reduce((acc, product, index) => {
              if (index % 3 === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(product);
              return acc;
            }, [] as Product[][])
            .map((group, slideIndex) => (
              <div
                key={slideIndex}
                className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center">
                  {group.map((product) => (
                    <div
                      key={product.id}
                      className="card mx-2"
                      style={{ width: "18rem" }}
                    >
                      <img
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">R$ {product.price}</p>
                        <button className="btn btn-primary">
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#randomProductsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#randomProductsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;