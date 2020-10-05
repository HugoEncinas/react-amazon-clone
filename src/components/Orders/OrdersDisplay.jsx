import React from 'react'
import Order from './Order'
import './Orders.css'

const OrdersDisplay = ({ orders }) => {
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  )
}

export default OrdersDisplay
