import React from "react";
import { ProductContainer, ProductName, ProductPrice } from "./ProductStyles";

const products = [
  {
    name: "Product 1",
    description: "Description of product 1",
    price: "$10.99",
  },
  {
    name: "Product 2",
    description: "Description of product 2",
    price: "$24.99",
  },
  {
    name: "Product 3",
    description: "Description of product 3",
    price: "$15.49",
  },
];

// const ProductContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
// `;

// const ProductName = styled.div`
//   font-weight: bold;
//   font-size: 20px;
// `;

// const ProductPrice = styled.div`
//   color: red;
//   &:hover {
//     color: green;
//   }
// `;

function ProductList() {
  return (
    <div>
      {products.map((product, index) => (
        <ProductContainer key={index}>
          <ProductName>{product.name}</ProductName>
          <div>{product.description}</div>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductContainer>
      ))}
    </div>
  );
}

export default ProductList;
