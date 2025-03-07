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
          src="url-do-poster-promocional.jpg"
          alt="Promoção Especial!"
          className="img-fluid"
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
        <h3 className="my-3">Promoção Especial - Só Hoje!</h3>
        <p>
          Descontos imperdíveis em produtos de informática! Aproveite agora.
        </p>
      </div>

      {/* Lista de Produtos */}
      <h2>Produtos</h2>
      {filteredProducts.length === 0 ? (
        <p>Nenhum produto encontrado nesta categoria.</p>
      ) : (
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p
                    className="card-text"
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
      )}
    </div>
  );
};

export default Products;
