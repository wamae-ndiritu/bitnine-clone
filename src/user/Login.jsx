import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.scss";
import { useGlobalContext } from "../context/store";

const Login = () => {
  const navigate = useNavigate();

  const { loading, error, userInfo, loginUser, authenticate } =
    useGlobalContext();

  const [showPass, setShowPass] = useState(false);
  const [details, setDetails] = useState({
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
    e.preventDefault();
    loginUser(details);
  };

  useEffect(() => {
    if (userInfo) {
      if (userInfo.token) {
        authenticate();
        navigate("/");
      }
    }
  }, [userInfo, navigate]);
  return (
    <form onSubmit={handleSubmit}>
      <h4>Sign In</h4>
      {error && <span className='text-danger'>{error}</span>}
      {loading && <span className='text-warning'>Loading...</span>}
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
      <span onClick={togglePass}>
        <i
          className={`fa ${showPass ? "fa-eye-slash" : "fa-eye"}`}
          aria-hidden='true'
        ></i>
        Check Password
      </span>
      <div className='mb-3'>
        <button type='submit' className='btn-submit'>
          Sign In
        </button>
      </div>
      <p>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </form>
  );
};

export default Login;
