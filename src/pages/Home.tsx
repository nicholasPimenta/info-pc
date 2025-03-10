import React, { useState } from "react";
import Contact from "../components/Contact";
import Products from "../components/Products";
import Categories from "../components/Categories";
import InfoSection from "../components/InfoSection";

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <div className="container my-4">
        <Categories setCategory={setSelectedCategory} />
        <Products selectedCategory={selectedCategory} />
        <InfoSection />
        <Contact />
      </div>
    </>
  );
};

export default Home;