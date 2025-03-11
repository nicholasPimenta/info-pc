import React, { useContext } from "react";
import { allProducts } from "../utils/ProductsData";
import { CartContext } from "../context/CartContext";

interface ProductsProps {
  selectedCategory: string | null;
}

const Products: React.FC<ProductsProps> = ({ selectedCategory }) => {
  const { addToCart } = useContext(CartContext);

  // Filtrando os produtos com base na categoria selecionada
  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="container my-4">
      {/* Pôster promocional */}
      <div className="promo-banner text-center mb-5">
        <img
          src="/Banner InfoPC.png"
          alt="Promoção Especial!"
          className="img-fluid"
          style={{
            width: "100%",
            maxWidth: "1920px",
            maxHeight: "400px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Lista de Produtos */}
      <h2>Produtos</h2>
      {filteredProducts.length === 0 ? (
        <p>Nenhum produto encontrado nesta categoria.</p>
      ) : (
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top mx-auto d-block"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p
                    className="card-text flex-grow-1"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                    }}
                  >
                    {product.description}
                  </p>
                  <p className="card-text">Preço: R$ {product.price}</p>
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => addToCart(product)}
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
