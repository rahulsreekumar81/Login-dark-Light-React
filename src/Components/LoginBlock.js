import React from 'react'
import '../index.css'
import Button from './Button'
import InputFields from './InputFields'

function LoginBlock() {
  return (
    <div className='login'>
        <div className='container'>
          <div className='top'>
            <img src='logo.png'></img>
          </div>
          
          <h2>Welcome back!</h2>
          <InputFields label={"Email Address"} type={"text"} placeholder={"Enter your email address"}/>
          <InputFields label={"Password"} type={"password"} placeholder={"Enter your password"}/>
          <Button/>
          <p className='create'>Don't have an account? <span>Create New</span></p>
        </div>
        
      </div>
  )
}

export default LoginBlock