import React from 'react';

const data = [
  {
    "id": "1",
    "description": "LAKMÉ LIP LOVE LIP MASK",
    "price": "₹ 325",
    "image": "lipmask.webp"
  },
  {
    "id": "2",
    "description": "LAKMÉ ABSOLUTE EXPLORE EYE PAINT",
    "price": "₹ 500",
    "image": "eyepaint.webp"
  },
  {
    "id": "3",
    "description": "9TO5 PRIMER + MATTE LIPSTICK TRIO",
    "price": "₹ 1,099",
    "image": "lipstick.webp"
  },
  {
    "id": "4",
    "description": "LAKMÉ EYECONIC CURLING MASCARA.",
    "price": "₹ 400",
    "image": "mascara.webp"
  },
  // {
  //   "id": "5",
  //   "description": "Experience the excellence of Product 5.",
  //   "price": "59.99",
  //   "image": "https://example.com/product5.jpg"
  // },
  // {
  //   "id": "6",
  //   "description": "Experience the excellence of Product 5.",
  //   "price": "59.99",
  //   "image": "https://example.com/product5.jpg"
  // },
  // {
  //   "id": "7",
  //   "description": "Experience the excellence of Product 5.",
  //   "price": "59.99",
  //   "image": "https://example.com/product5.jpg"
  // },
  // {
  //   "id": "8",
  //   "description": "Experience the excellence of Product 5.",
  //   "price": "59.99",
  //   "image": "https://example.com/product5.jpg"
  // }
];

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="image">
      <img className="images" src={product.image} alt={product.description} />
      </div>
      <div className="info">
        {/* <h2 >{product.name}</h2> */}
        <p className='descript'>{product.description}</p>
        <p className='price'>{product.price}</p>
        <button className='button'>Add to cart</button>
      </div>
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
