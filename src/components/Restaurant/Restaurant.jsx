import React from 'react';
import './Restaurant.css';


const Restaurant = ({ resData }) => {
  const { name, imageUrl, rating, email, cuisine,menu ,address} = resData;
  return (
    <div className="restaurant-card">
      <div className="img-container">
        <img className="img-logo" src={imageUrl} alt={name} />
        <div className="img-overlay">Items from ₹99</div> {/* Optional Promo */}
      </div>
      <div className="restaurant-details">
        <p className="restaurant-name">{name}</p>
        <p className="restaurant-email">{email}</p> 
        <p className='res-menu'>{address.city}</p>
        <p className="restaurant-cuisine">{cuisine?.join(", ")}</p>
        <p className="restaurant-rating">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default Restaurant;
