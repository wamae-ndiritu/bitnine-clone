import React from "react";
import "./user.scss";

const Register = () => {
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
        <input type='password' className='form-control' id='pass' />
      </div>
    </form>
  );
};

export default Register;
