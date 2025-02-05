import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Product from "./Product";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products); // Set products to state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Test</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </ul>
      <Link to="/"> Go Back</Link>
    </>
  );
}

export default ProductsList;
