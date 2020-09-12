import React from 'react'
import { useStateValue } from '../../StateProvider';
import HeaderDisplay from './HeaderDisplay';

const HeaderContainer = () => {
  const [{ basket }] = useStateValue();

  return (
    <HeaderDisplay basketNum={basket?.length}></HeaderDisplay>
  )
}

export default HeaderContainer
