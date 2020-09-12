import React from 'react';

import Subtotal from './Subtotal/Subtotal'

import './Checkout.css'

const CheckoutDisplay = ({basketTotal, basketNum}) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt="checkout ad"/>

        <div>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal basketTotal={basketTotal} basketNum={basketNum}/>
      </div>
    </div>
  )
}

export default CheckoutDisplay

