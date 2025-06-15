import React from 'react';
import './Restaurant.css';

const Restaurant = () => {
  return (
    // <>
    // <div className="search">search</div>
    <div className="restaurant-card">
      <img className='img-logo' src="https://www.superbread.com/assets/images/product/recipes/cheese-burger.webp" alt="Burger" />
      <div className="restaurant-details">
        <p className="restaurant-name">Burger Palace</p>
        <p className="restaurant-cuisine">Fast Food, American</p>
        <p className="restaurant-rating">⭐ 4.5</p>
      </div>
      </div>
    // {/* </div>
    // </> */}
  );
};

export default Restaurant;
