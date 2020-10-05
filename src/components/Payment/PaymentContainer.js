import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import axios from '../../axios';
import { db } from '../../firebase';
import { getBasketTotal } from "../../selectors";
import { useStateValue } from '../../StateProvider';
import PaymentDisplay from './PaymentDisplay'

const PaymentContainer = () => {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {

      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        })

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders');
    })
  }

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error? event.error.message : "");
  }

  useEffect(() => {
    console.log('basket', basket)
    console.log('user', user)
    const getClientSecret = async () => {
      const currencySubUnits = 100;
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * currencySubUnits}`
      });
      console.log('response', response)
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [basket]);

  return (
    <PaymentDisplay 
      basket={basket}
      user={user}
      basketTotal={getBasketTotal(basket)}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      error={error}
      disabled={disabled}
      processing={processing}
      succeeded={succeeded}
    />
  )
}

export default PaymentContainer
