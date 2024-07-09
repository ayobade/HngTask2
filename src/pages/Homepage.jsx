import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../global.css";
import "../App.css";
import {
  Frame14,
  Group41,
  ClarityAvatarLine,
  PepiconsPencilCv,
  Group43,
  HeroImg,
  Group47,
  Rectangle123,
  Rectangle49_2,
  Group10,
  ClarityEnvelopeSolid,
  Group10_1,
} from "../images";

const Homepage = () => {
  const [itemCounts, setItemCounts] = useState(Array(8).fill(1));

  const incrementItem = (index) => {
    setItemCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const decrementItem = (index) => {
    setItemCounts((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index && count > 1 ? count - 1 : count
      )
    );
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
        <img src={HeroImg} alt="Ring Image" className="hero-img" />
        <h1>
          Unveil Your Inner Radiance with Our Exclusive <span>Jewelry</span>{" "}
          Collections.
        </h1>
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img src={Group47} alt="Search" />
          </button>
        </div>
        <Link to="#" className="btn">
          Explore our Collections
        </Link>
      </section>

      <section className="section2">
        <h1>
          Discover Timeless Jewelry Creations Just for <span>You!</span>
        </h1>
        <ul>
          <li>
            <Link to="#">NEW ARRIVALS</Link>
            <Link to="#">CATEGORIES</Link>
            <Link to="#">BEST SELLING</Link>
          </li>
        </ul>
      </section>

      <div className="card-container">
        {[...Array(8)].map((_, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <img src={Rectangle123} alt="Product" />
              <div className="background"></div>
              <p className="title">Chunky Ring</p>
              <p className="amount">$308,000</p>
              <div className="bottom">
                <div className="item-number">
                  <button onClick={() => decrementItem(index)}>-</button>
                  <p>{itemCounts[index]}</p>
                  <button onClick={() => incrementItem(index)}>+</button>
                </div>
                <div>
                  <button className="addtocart">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section4-container">
        <section className="section4">
          <img src={Rectangle49_2} alt="Background" />
          <div className="section4-content">
            <h1>
              Sign Up to Receive Updates on Our New <span>Blings!</span>
            </h1>
            <div className="row-subscribe">
              <div className="search-container">
                <input type="text" placeholder="Search" />
              </div>
              <Link to="/subscribe" className="subscribe">
                Subscribe
              </Link>
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
      </footer>
    </div>
  );
};

export default Homepage;
