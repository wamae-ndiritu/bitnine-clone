import React from "react";
import Login from "../user/Login";

const SignIn = () => {
  return (
    <div className='user'>
      <div className='user-left'></div>
      <div className='user-right'>
        <Login />
      </div>
    </div>
  );
};

export default SignIn;
