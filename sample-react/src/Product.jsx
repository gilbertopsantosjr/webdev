import { React } from "react";

function Product(product) {
  const props = product.product;
  return (
    <>
      <li key={props.id} style={{ marginBottom: "1em" }}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <strong>Price: ${props.price}</strong>
      </li>
    </>
  );
}

export default Product;
