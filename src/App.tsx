import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/header";
import Login from "./routes/login";
import Home from "./routes/home";
import { Inloggen } from "./auth/auth";
// import Dashboard from "./routes/dashboard"; -> Zodra ik authenticatie heb geregeld
function App() {
  return (
    <React.StrictMode>
      <Inloggen>
        <Header />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Inloggen>
    </React.StrictMode>
  );
}

export default App;
