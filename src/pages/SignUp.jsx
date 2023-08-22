import React from "react";
import Register from "../user/Register";

const SignUp = () => {
  return (
    <div className='user'>
      <div className='user-left'>
        <h6>Bitnine</h6>
      </div>
      <div className='user-right'>
        <Register />
      </div>
    </div>
  );
};

export default SignUp;
