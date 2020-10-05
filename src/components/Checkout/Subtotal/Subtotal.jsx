import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';

import './Subtotal.css';

const Subtotal = ({ basketTotal, basketNum }) => {
  const history = useHistory();
  const goToPage = () => {
    history.push('/payment')
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value = 0) => (
          <>
            <p>
              Subtotal ({basketNum} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"/>
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={goToPage}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
