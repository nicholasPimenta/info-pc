import React, { useState } from "react";

interface CategoriesProps {
  setCategory: (category: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    setCategory(category);
  };

  return (
    <div className="container text-center my-4">
      <h3>Filtrar por Categoria</h3>
      <div className="btn-group">
        <button
          className={`btn ${selectedCategory === null ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => handleCategoryClick(null)}
        >
          Todos
        </button>
        <button
          className={`btn ${selectedCategory === "notebook" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => handleCategoryClick("notebook")}
        >
          Notebooks
        </button>
        <button
          className={`btn ${selectedCategory === "placa-de-video" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => handleCategoryClick("placa-de-video")}
        >
          Placas de Vídeo
        </button>
        <button
          className={`btn ${selectedCategory === "processador" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => handleCategoryClick("processador")}
        >
          Processadores
        </button>
      </div>
    </div>
  );
};

export default Categories;