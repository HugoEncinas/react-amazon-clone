import React from 'react';

import './Product.css'

const ProductDisplay = ({id, title, image, price, rating, addToBasket}) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
      </div>

      <img src={image} alt={title} />
      
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default ProductDisplay

