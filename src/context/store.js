import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { reducer } from "./reducers";
import { API_ENDPOINT } from "../Url";

const AuthContext = createContext();

const initialUserInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const initialState = {
  loading: false,
  error: false,
  userInfo: initialUserInfo,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (user) => {
    try {
      dispatch({ type: "USER_REGISTER_REQUEST" });

      const { data } = await axios.post(`${API_ENDPOINT}/users/register`, user);
      dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
    } catch (err) {
      let error = err.response ? err.response.data.message : err.message;
      if (
        error ===
        '"password" with value "12" fails to match the required pattern: /^[a-zA-Z0-9]{3,30}$/'
      ) {
        error = "Password too weak!";
      }
      dispatch({ type: "USER_REGISTER_FAIL", payload: error });
    }
  };

  const loginUser = async (user) => {
    try {
      dispatch({ type: "USER_LOGIN_REQUEST" });

      const { data } = await axios.post(`${API_ENDPOINT}/users/login`, user);
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      let error = err.response ? err.response.data.message : err.message;
      dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    }
  };

  const authenticate = async () => {
    try {
      const token = state.userInfo.token;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${API_ENDPOINT}/users/auth`);
    } catch (err) {
      let error = err.response ? err.response.data.message : err.message;
      console.log(error);
      if (
        error === "Not authorized, token failed" ||
        error === "Not authorized, no token"
      ) {
        logout();
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
        logout,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { useGlobalContext };
export default AuthProvider;
