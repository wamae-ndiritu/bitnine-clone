import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.scss";
import { useGlobalContext } from "../context/store";

const Register = () => {
  const navigate = useNavigate();

  const { loading, error, userInfo, registerUser } = useGlobalContext();

  const [showPass, setShowPass] = useState(false);
  const [pass_2, setPass_2] = useState("");
  const [passError, setPassError] = useState(null);
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDetails((prev) => {
      const newState = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  };

  const togglePass = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    setPassError(null);
    e.preventDefault();
    if (details.password !== pass_2) {
      setPassError("Password do not match!");
    } else {
      registerUser(details);
    }
  };

  useEffect(() => {
    if (userInfo) {
      if (userInfo.register) {
        navigate("/login");
      }
    }
  }, [userInfo, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <h4>Sign Up</h4>
      {error && <span className='text-danger'>{error}</span>}
      {loading && <span className='text-warning'>Loading...</span>}
      <div className='mb-3'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          className='form-control'
          name='username'
          onChange={handleChange}
          id='username'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-control'
          name='email'
          onChange={handleChange}
          id='email'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='pass'>Password</label>
        <input
          type={`${showPass ? "text" : "password"}`}
          className='form-control'
          name='password'
          onChange={handleChange}
          id='pass'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='pass-2'>Confirm Password</label>
        <input
          type={`${showPass ? "text" : "password"}`}
          className='form-control'
          name='pass_2'
          onChange={(e) => setPass_2(e.target.value)}
          id='pass-2'
        />
        {passError && <span className='text-danger'>{passError}</span>}
      </div>
      <span onClick={togglePass}>
        <i
          className={`fa ${showPass ? "fa-eye-slash" : "fa-eye"}`}
          aria-hidden='true'
        ></i>
        Check Password
      </span>
      <div className='mb-3'>
        <button type='submit' className='btn-submit'>
          Sign Up
        </button>
      </div>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </form>
  );
};

export default Register;
