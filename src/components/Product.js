import React from 'react';

const data = [
  {
    "id": "1",
    "name": "Product 1",
    "description": "This is the description for Product 1. It's a great product!",
    "price": "19.99",
    "image": "https://example.com/product1.jpg"
  },
  {
    "id": "2",
    "name": "Product 2",
    "description": "Product 2 is a high-quality item with many features.",
    "price": "29.99",
    "image": "https://example.com/product2.jpg"
  },
  {
    "id": "3",
    "name": "Product 3",
    "description": "Introducing Product 3 - the latest innovation in technology.",
    "price": "39.99",
    "image": "https://example.com/product3.jpg"
  },
  {
    "id": "4",
    "name": "Product 4",
    "description": "Product 4 is designed for your convenience and comfort.",
    "price": "49.99",
    "image": "https://example.com/product4.jpg"
  },
  {
    "id": "5",
    "name": "Product 5",
    "description": "Experience the excellence of Product 5.",
    "price": "59.99",
    "image": "https://example.com/product5.jpg"
  }
];

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

const ProductList = () => {
  return (
    <div>
      <h1>Products</h1>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
