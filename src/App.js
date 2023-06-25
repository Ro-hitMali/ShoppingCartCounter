import "./styles.css";
import { useState } from "react";

export default function App() {
  const [productCount, setProductCount] = useState(0);

  const handleAddProduct = () => {
    setProductCount(productCount + 1);
  };

  const handleRemoveProduct = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };
  return (
    <div className="App">
      <h1 className="title">Shopping Cart Counter</h1>
      <div className="card-container">
        <h2 className="product-count">Product Count is: {productCount}</h2>
        <div className="buttons-container">
          <button className="add-button" onClick={handleAddProduct}>
            Add Product
          </button>
          <button className="remove-button" onClick={handleRemoveProduct}>
            Remove Product
          </button>
        </div>
      </div>
    </div>
  );
}
