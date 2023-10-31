// Cart.js
// import React from 'react';

// const Cart = ({ cart, onRemoveFromCart }) => {
//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - Quantity: {item.quantity}
//             <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total: ₹{calculateTotal(cart)}</p>
//     </div>
//   );
// };

// export default Cart;

// function calculateTotal(cart) {
//   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
// }
