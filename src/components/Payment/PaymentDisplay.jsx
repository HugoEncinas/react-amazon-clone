import { CardElement } from '@stripe/react-stripe-js';
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

import CheckoutProduct from '../Checkout/CheckoutProduct';

import './Payment.css'

const PaymentDisplay = ({basket, user, basketTotal, handleSubmit, handleChange,
  error, disabled, processing, succeeded}) => {
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
            <Link to="/checkout">{basket?.length} items</Link>
          )
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Fake Street</p>
            <p>Monterrey, Mexico</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value = 0) => (
                      <h3>Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={basketTotal}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled ||
                    succeeded}>
                    <span>{processing ? 
                      <p>Processing</p> :
                      "Buy Now"}
                    </span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDisplay
