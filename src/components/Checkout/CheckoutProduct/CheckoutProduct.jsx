import React from 'react';

import { useStateValue } from '../../../StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({id, title, image, price, rating, hideButton }) => {
  const [ _, dispatch ] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }
  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image"
          src={image} alt={title} />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
            {title}
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_, i) => (
              <p key={i}>⭐</p>
            ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
    </div>
  )
}

export default CheckoutProduct
