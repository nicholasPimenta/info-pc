import React, { useState } from "react";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Categories from "../components/Categories";
import InfoSection from "../components/InfoSection";

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <div className="container my-4">
        <h1>Bem-vindo à Loja de Informática</h1>
        <Categories setCategory={setSelectedCategory} />
        <Products selectedCategory={selectedCategory} />
        <InfoSection />
        <Contact />
      </div>
    </>
  );
};

export default Home;