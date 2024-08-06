import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./views/home.jsx"
import Login from "./views/login.jsx";
import Register from "./views/register.jsx"
import ResetPassword from "./views/resetPassword.jsx"
import Missing from "./views/missing.jsx"
import Detail from "./views/detail.jsx"
import Donation from "./views/donation.jsx"
import AboutPage from "./views/aboutPage.jsx"
import Report from "./views/report.jsx"
import Founded from "./views/founded.jsx"


function App() {

return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/missing" element={<Missing />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/report" element={<Report />} />
      <Route path="/founded" element={<Founded />} />
    </Routes>
  </div>
);
}

export default App;
