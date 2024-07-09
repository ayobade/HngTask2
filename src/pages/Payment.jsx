import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../global.css';
import './payment.css';
import {
  Frame14,
  Group41,
  ClarityAvatarLine,
  PepiconsPencilCv,
  Group43,
  Rectangle_50_1_xkyx30_c_scale,
  Group49,
  Frame,
  Frame1,
  Radio,
  Rectangle123,
  Rectangle49_2,
  Group10,
  ClarityEnvelopeSolid,
  Group10_1,
} from '../images';

const Payment = () => {
  const [recentQuantities, setRecentQuantities] = useState([1, 1, 1]);

  const handleIncrement = (index) => {
    setRecentQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const handleDecrement = (index) => {
    setRecentQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src={Frame14} alt="Logo" />
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">
                  <img src={Group41} alt="Home Icon" />
                  Home
                </Link>
                <Link to="/about">
                  <img src={ClarityAvatarLine} alt="About Icon" />
                  About
                </Link>
                <Link to="/products">
                  <img src={PepiconsPencilCv} alt="Products Icon" />
                  Products
                </Link>
                <Link to="/cart">
                  <img src={Group43} alt="Cart Icon" />
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="hero">
        <img src={Rectangle_50_1_xkyx30_c_scale} alt="Ring" className="hero-img2" />
        <div className="progress">
          <p>Cart</p>
          <span className="line"></span>
          <p>Address</p>
          <span className="line"></span>
          <p>Payment</p>
        </div>
      </section>

      <div className="cart-container">
        <div className="cart">
          <div className="shopping-cart">
            <div className="row1">
              <p>Payment</p>
              <p className="subtext">All transactions are secure and encrypted.</p>
            </div>

            <div className="payment-method">
              <div className="left">
                <img src={Radio} alt="Radio button" />
                <p>Credit Card</p>
              </div>
              <div className="right">
                <img src={Frame} alt="Visa" />
                <img src={Frame1} alt="MasterCard" />
              </div>
            </div>

            <form>
              <div>
                <input type="text" id="cardnumber" name="cardnumber" placeholder="Card number" required />
                <input type="text" id="cardname" name="cardname" placeholder="Card name" required />
              </div>
              <div className="name">
                <input type="text" id="expdate" name="expdate" placeholder="Exp Date (MM/YY)" />
                <input type="text" id="cvv" name="cvv" placeholder="CVV" />
              </div>
              <button className="btn" type="submit">PAY NOW</button>
            </form>
          </div>
        </div>

        <div className="order-summary">
          <div className="shopping-cart">
            <div className="row1">
              <p>
                <img src={Group49} alt="Order Summary Icon" />
                Order Summary
              </p>
            </div>
            <div className="row2">
              <h2>Price Details (4)</h2>
              <div className="details">
                <div>
                  <p>Sub Total</p>
                  <p className="price">$415.000</p>
                </div>
                <div>
                  <p>Item Discount</p>
                  <p className="price">$0.00</p>
                </div>
                <div>
                  <p>Coupon Discount</p>
                  <p className="price">$0.00</p>
                </div>
                <div>
                  <p>Shipping Fee</p>
                  <p className="price">$100.00</p>
                </div>
                <div>
                  <p>Total Amount</p>
                  <p className="price">$516.00</p>
                </div>
              </div>
              <button className="btn2" type="submit">CHECKOUT</button>
              <p className="discount">$200 Off your next order!</p>
            </div>
            <div className="padding-box-top"></div>
            <div className="padding-box-down"></div>
          </div>
        </div>
      </div>

      <div className="recent">
        <h2>Recently Viewed</h2>
        <div className="card-container">
          {recentQuantities.map((quantity, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <img src={Rectangle123} alt="Product" />
                <div className="background"></div>
                <p className="title">Chunky Ring</p>
                <p className="amount">$308,000</p>
                <div className="bottom">
                  <div className="item-number">
                    <button onClick={() => handleDecrement(index)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </div>
                  <div>
                    <button className='addtocart'>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section4-container">
        <section className="section4">
          <img src={Rectangle49_2} alt="Background" />
          <div className="section4-content">
            <h1>Sign Up to Receive Updates on Our New Blings!</h1>
            <div className="row-subscribe">
              <div className="search-container">
                <input type="text" placeholder="Search" />
              </div>
              <button className="subscribe">Subscribe</button>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="box">
          <div className="top">
            <img src={Frame14} alt="Logo" />

            <div>
              <ul>
                <li>
                  <Link to="#" className="footer-link">Home</Link>
                  <Link to="#" className="footer-link">About</Link>
                  <Link to="#" className="footer-link">
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            <p>07040525298</p>
          </div>
          <hr className="horizontal-line" />
          <div className="down">
            <p>@2024 All the Rights Reserved - Blings</p>
          </div>
        </div>
      </footer>    </div>
  );
};

export default Payment;
