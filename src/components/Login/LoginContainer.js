import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import LoginDisplay from './LoginDisplay';
import { auth } from '../../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputHandler = (e, field) => {
    const value = e.target.value;
    if(field === 'email') {
      setEmail(value)
    } else if (field === 'password') {
      setPassword(value)
    }
  }

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created new user
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <LoginDisplay email={email} password={password}
      inputHandler={inputHandler}
      signIn={signIn}
      register={register}
    />
  )
}

export default Login
