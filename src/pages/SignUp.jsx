import React from "react";
import Register from "../user/Register";

const SignUp = () => {
  return (
    <div className='user'>
      <div className='user-left'></div>
      <div className='user-right'>
        <Register />
      </div>
    </div>
  );
};

export default SignUp;
