import React, { useState, useEffect } from 'react'
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import OrdersDisplay from './OrdersDisplay';

const OrdersContainer = () => {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(()=> {
    if (user) {
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => {
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <OrdersDisplay orders={orders} />
  )
}

export default OrdersContainer
