import React, { useEffect, useState } from 'react'

import { useStateValue } from '../../StateProvider';
import CheckoutDisplay from './CheckoutDisplay';

const CheckoutContainer = (props) => {

  const [{ basket }] = useStateValue();
  const [ basketTotal, setBasketTotal ] = useState(0);

  const getBasketTotal = (basketArray) => {
    return basketArray.reduce((a,b) => {
        return a + b.price;
    }, 0);
  }

  useEffect(() => {
    setBasketTotal(getBasketTotal(basket))
  }, [basket]);

  return (
    <CheckoutDisplay {...props} basketTotal={basketTotal}
    ></CheckoutDisplay>
  )
}

export default CheckoutContainer
