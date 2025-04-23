import React from 'react';
import '../styles/Products.css';

const Products = () => {
  return (
    <div className="product-section">
      <div className="content-wrapper">
        <h1 className="title">Dairy Delights Coming <span>Soon!</span></h1>
        <p className="description">
          Coming soon to your doorstep are our most-requested dairy essentials: Desi Ghee, Curd, Paneer, and more – all made from our same trusted milk.
        </p>
        <button className="notify-button">
          <span className="bell-icon">🔔</span>
          Notify Me
        </button>
        <div className="product-display">
          <img src="/dairy products.png" alt="Dairy Products" />
        </div>
      </div>
    </div>
  );
};

export default Products;