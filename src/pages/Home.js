import React from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const categories = ["Electrical", "Plumbing", "Hardware"];
  return (
    <div className="page">
      <h1>Our Products</h1>
      <div className="grid">
        {categories.map((cat, i) => (
          <ProductCard key={i} title={cat} />
        ))}
      </div>
    </div>
  );
}

export default Home;
