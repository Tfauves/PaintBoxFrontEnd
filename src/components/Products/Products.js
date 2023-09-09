import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`http://localhost:8080/api/paint`);
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
    };
    setLoading(true);
    fetchProducts();
  }, []);

  return (
    <div>
      {product.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};
export default Products;
