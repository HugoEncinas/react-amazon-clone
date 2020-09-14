import { Search, ShoppingBasket } from '@material-ui/icons'
import React from 'react';

import './Header.css'
import { Link } from 'react-router-dom';

const HeaderDisplay = ({basketNum, user, handleAuthentication}) => {
  return (
    <div className="header">

      <Link to="/">
        <img className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon"></Search>
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ?
              user.email : 'Guest'} </span>
            <span className="header__optionLineTwo">{user ?
              'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo headerBasketCount">{basketNum}</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default HeaderDisplay

