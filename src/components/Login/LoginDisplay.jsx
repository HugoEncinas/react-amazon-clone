import React  from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const LoginDisplay = ({email, password, inputHandler, signIn, register}) => {
  return (
    <div className="login">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
          className="login__logo" alt="amazon logo"/>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e)=>{inputHandler(e, 'email')}}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={(e)=>{inputHandler(e, 'password')}}/>

          <button type="submit" className="login__signInButton"
           onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to AMAZON FAKE
          CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice
          and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default LoginDisplay
