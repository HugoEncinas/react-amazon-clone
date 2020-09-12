import React from 'react';
import Product from '../Product';
import { productsInfo } from './productsInfo'
import './Home.css';

const HomeDisplay = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>

        <div className="home__row">
          <Product {...productsInfo[0]} />
          <Product {...productsInfo[1]} />
        </div>
        <div className="home__row">
          <Product {...productsInfo[2]} />
          <Product {...productsInfo[3]} />
          <Product {...productsInfo[4]} />
        </div>
        <div className="home__row">
          <Product {...productsInfo[5]} />
        </div>
      </div>
    </div>
  )
}

export default HomeDisplay

