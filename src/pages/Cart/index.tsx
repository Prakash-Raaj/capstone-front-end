import React, { useState } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import OrderSummary from '../../Components/OrderSummary';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const navigate = useNavigate();
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Product 1', quantity: 2, price: 100 },
    { id: 2, name: 'Product 2', quantity: 1, price: 200 },
    // Add more items as needed
  ]);

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="w-100 p-4">
      <div className="main-container w-100">
        <div className="left-container">
          <h2>Shopping Cart</h2>
          <div className="divider"></div>
          <div className="headings">
            <div className="left-heading">
              <h3>Products Details</h3>
            </div>
            <div className="right-heading">
              <h3>Quantity</h3>
              <h3>Price</h3>
              <h3>Total</h3>
            </div>
          </div>
          <div className="items-container">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="left-heading">
                  <p>{item.name}</p>
                </div>
                <div className="right-heading">
                  <p>{item.quantity}</p>
                  <p>${item.price}</p>
                  <p>${item.quantity * item.price}</p>
                  <button className="bg-orange-500 text-white px-2 py-1 rounded cursor-pointer" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <button className="cnt-btn" onClick={() => navigate('/products')}>
            <HiOutlineArrowNarrowLeft className="icon" /> Continue Shopping
          </button>
        </div>
        <div className="right-container">
          <h2>Order Summary</h2>
          <div className="divider"></div>
          <div className="headings">
            <h3><OrderSummary cartItems={cartItems} /></h3>
          </div>
          <div className="shipping-container">
            <h3>shipping</h3>
            <select name="shippingMethod" id="shippingMethod">
              <option value="standard">Standard Delivery - $5</option>
              <option value="express">Express Shipping - $10</option>
              <option value="overnight">
                Overnight Shipping - $20
              </option>
            </select>
          </div>
          <div className="promo-container">
            <h3>promo code</h3>
            <input type="text" placeholder="Enter Promo Code" />
            <button className="apply-btn">apply</button>
            <div className="divider"></div>
          </div>
          <button className="checkout-btn" onClick={() => navigate('/checkout')}>checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;