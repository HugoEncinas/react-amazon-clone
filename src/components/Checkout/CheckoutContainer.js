import React from 'react'

import { getBasketTotal } from "../../selectors";
import { useStateValue } from '../../StateProvider';
import CheckoutDisplay from './CheckoutDisplay';

const CheckoutContainer = (props) => {

  const [{ basket }] = useStateValue();

  return (
    <CheckoutDisplay {...props} basketTotal={getBasketTotal(basket)}
    ></CheckoutDisplay>
  )
}

export default CheckoutContainer
