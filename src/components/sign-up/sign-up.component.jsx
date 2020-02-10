import React, { useState } from 'react';
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { startUserSignUp } from "../../redux/user/user.action";

import './sign-up.styles.scss';


const SignUp = ({ startSignUp }) => {

  const [userInfo, setUserInfo ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  { email, password, confirmPassword, displayName } = userInfo;


  const handleSubmit = async event => {
    
    event.preventDefault();    

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
        
    try {
      await startSignUp({email, password});       

      setUserInfo({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value})
  };

 
  
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  startSignUp: (email, password) => dispatch(startUserSignUp(email, password))
})

export default connect(null, mapDispatchToProps)(SignUp);