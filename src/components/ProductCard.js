import React from "react";

function ProductCard({ title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Explore our {title} range with top brands.</p>
    </div>
  );
}

export default ProductCard;
