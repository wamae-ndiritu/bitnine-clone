import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./user.scss";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePass = () => {
    setShowPass(!showPass);
  };

  return (
    <form>
      <h4>Sign Up</h4>
      <div className='mb-3'>
        <label htmlFor='username'>Username</label>
        <input type='text' className='form-control' id='username' />
      </div>
      <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <input type='email' className='form-control' id='email' />
      </div>
      <div className='mb-3'>
        <label htmlFor='pass'>Password</label>
        <input
          type={`${showPass ? "text" : "password"}`}
          className='form-control'
          id='pass'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='pass-2'>Confirm Password</label>
        <input
          type={`${showPass ? "text" : "password"}`}
          className='form-control'
          id='pass-2'
        />
      </div>
      <span onClick={togglePass}>
        <i
          className={`fa ${showPass ? "fa-eye-slash" : "fa-eye"}`}
          aria-hidden='true'
        ></i>
        Check Password
      </span>
      <div className='mb-3'>
        <button className='btn-submit'>Sign Up</button>
      </div>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </form>
  );
};

export default Register;
