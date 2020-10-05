import React from 'react'
import Moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import './Order.css'
import CheckoutProduct from '../../Checkout/CheckoutProduct';

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{Moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <div className="order__id">
        <small>{order.id}</small>
      </div>
      {order.data.basket?.map((item, index) => (
        <CheckoutProduct
          key={`${index}-${item.id}`}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      /> 
      
    </div>
  )
}

export default Order
