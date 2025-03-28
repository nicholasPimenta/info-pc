import { FaMinus, FaPlus } from "react-icons/fa";
import { getRandomProducts } from "../utils/ProductsData"; // Importando a lista simplificada
import { CartContext, Product } from "../context/CartContext";
import React, { useContext, useEffect, useState } from "react";

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, addToCart } = useContext(CartContext);
  const [randomProducts, setRandomProducts] = useState<
    Omit<Product, "description" | "category">[]
  >([]);

  useEffect(() => {
    setRandomProducts(getRandomProducts(6));
  }, []);

  const handleQuantityChange = (id: number, quantity: number | undefined) => {
    const newQuantity = quantity ?? 1; // Garante que sempre há um número válido
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
      <h2 className="text-center text-md-start">Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-center text-md-start">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="list-group mb-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between border rounded-3 shadow-sm p-2 p-md-3 mb-2"
              >
                <div>
                  <strong>{item.name}</strong> - R$ {item.price} <br />
                  <div className="d-flex align-items-center mt-2">
                  Quantidade:
                    <button
                      className="btn btn-sm me-2 border-0"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      <FaMinus />
                    </button>
                    <span className="fw-bold">{item.quantity}</span>
                    <button
                      className="btn btn-sm ms-2 border-0"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      <FaPlus />
                    </button>
                  </div>
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

          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: R$ {getTotal().toFixed(2)}</h4>
            <button className="btn btn-success">Finalizar Compra</button>
          </div>
        </>
      )}

      {/* Carrossel de Produtos Aleatórios */}
      <h3 className="my-4 text-center text-md-start">
        Confira outros produtos
      </h3>
      <div
        id="randomProductsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {randomProducts
            .reduce(
              (
                acc: Omit<Product, "description" | "category">[][],
                product,
                index
              ) => {
                if (index % 3 === 0) {
                  acc.push([]);
                }
                acc[acc.length - 1].push(product);
                return acc;
              },
              []
            )
            .map((group, slideIndex) => (
              <div
                key={slideIndex}
                className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center flex-wrap flex-md-nowrap">
                  {group.map((product) => (
                    <div
                      key={product.id}
                      className="card mx-2 mb-3 d-flex flex-column"
                      style={{ width: "18rem", minHeight: "350px" }}
                    >
                      <img
                        src={product.imageUrl}
                        className="card-img-top mx-auto d-block"
                        alt={product.name}
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "contain",
                        }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.name}</h5>

                        <div className="mt-auto">
                          <p className="card-text">R$ {product.price}</p>
                          <button className="btn btn-primary w-100" onClick={() => addToCart(product)}>
                            Adicionar ao Carrinho
                          </button>
                        </div>
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