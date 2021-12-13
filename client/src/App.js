import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Cart from "./components/views/Cart";
import LandingPage from "./components/views/LandingPage/LandingPage"
import LoginPage from "./components/views/LoginPage/LoginPage"
import RegisterPage from "./components/views/RegisterPage/RegisterPage"
// import Auth  from "./hoc/auth"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/register" element={<RegisterPage/>} />
          <Route exact path="/cart" element={<Auth><Cart/></Auth>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
