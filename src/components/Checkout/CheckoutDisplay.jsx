import React from 'react';

import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal/Subtotal'
import { useStateValue } from '../../StateProvider';

import './Checkout.css'



const CheckoutDisplay = ({basketTotal}) => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt="checkout ad"/>

        <div> 
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={`${index}-${item.id}`}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal basketTotal={basketTotal} basketNum={basket?.length} />
      </div>
    </div>
  )
}

export default CheckoutDisplay

