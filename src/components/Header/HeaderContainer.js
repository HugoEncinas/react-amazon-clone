import React from 'react'
import { useStateValue } from '../../StateProvider';
import HeaderDisplay from './HeaderDisplay';
import { auth } from '../../firebase';

const HeaderContainer = () => {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <HeaderDisplay basketNum={basket?.length}
      user={user} handleAuthentication={handleAuthentication} />
  )
}

export default HeaderContainer
