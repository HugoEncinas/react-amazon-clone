import React from 'react'
import { useStateValue } from '../../StateProvider';
import ProductDisplay from './ProductDisplay';

const ProductContainer = (props) => {
  const [{ basket }, dispatch] = useStateValue();
  const {id, title, image, price, rating} = props;

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }
  
  return (
    <ProductDisplay {...props} addToBasket={addToBasket}></ProductDisplay>
  )
}

export default ProductContainer
