import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { reducer } from "./reducers";
import { API_ENDPOINT } from "../Url";

const AuthContext = createContext();

const initialState = {
  loading: false,
  error: false,
  userInfo: {},
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

  return (
    <AuthContext.Provider
      value={{
        ...state,
        registerUser,
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
