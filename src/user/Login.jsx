import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./user.scss";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePass = () => {
    setShowPass(!showPass);
  };
  return (
    <form>
      <h4>Sign In</h4>
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
      <span onClick={togglePass}>
        <i
          className={`fa ${showPass ? "fa-eye-slash" : "fa-eye"}`}
          aria-hidden='true'
        ></i>
        Check Password
      </span>
      <div className='mb-3'>
        <button className='btn-submit'>Sign In</button>
      </div>
      <p>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </form>
  );
};

export default Login;
