import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './Subtotal.css';

const Subtotal = ({ basketTotal, basketNum }) => {
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

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
