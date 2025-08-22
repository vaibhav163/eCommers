import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="product-card">
      {/* Product Image */}
      <img
        src={selectedColor.image}
        alt={product.name} 
        className="product-image"
      />

      {/* Product Info */}
      <div className="product-info">
        <h2>{product.name}</h2>
        <p><img data-v-bee3c753=""  srcset="https://img.icons8.com/?size=206w&amp;id=8ggStxqyboK5&amp;format=png 1x, https://img.icons8.com/?size=512w&amp;id=8ggStxqyboK5&amp;format=png 2x" width="20" height="20" alt="Star icon" />
        <img data-v-bee3c753=""  srcset="https://img.icons8.com/?size=206w&amp;id=8ggStxqyboK5&amp;format=png 1x, https://img.icons8.com/?size=512w&amp;id=8ggStxqyboK5&amp;format=png 2x" width="20" height="20" alt="Star icon" />
        <img data-v-bee3c753=""  srcset="https://img.icons8.com/?size=206w&amp;id=8ggStxqyboK5&amp;format=png 1x, https://img.icons8.com/?size=512w&amp;id=8ggStxqyboK5&amp;format=png 2x" width="20" height="20" alt="Star icon" />
        <var><var></var></var></p>
        <p className="price">₹{product.price}</p>

        {/* Colors */}
        <div className="color-options">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className={`color-btn ${
                selectedColor.name === color.name ? "active" : ""
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;