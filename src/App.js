import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useGlobalContext } from "./context/store";

function AuthLayout() {
  const { userInfo } = useGlobalContext();

  if (userInfo.token) {
    return <Outlet />;
  }
  return <Navigate to={"/login"} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
