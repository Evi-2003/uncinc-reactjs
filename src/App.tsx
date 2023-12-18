import React from "react";
import { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./app.css";
import Header from "./components/header";
import Login from "./routes/login";
import Home from "./routes/home";
import { AuthProvider, useAuth } from "./auth/auth";
import Dashboard from "./routes/dashboard";

type PrivateRouteProps = {
  children: ReactElement;
};
// PrivateRoute controleert of de gebruiker is ingelogd.
// Als dat niet het geval is, wordt de gebruiker naar de loginpagina gestuurd.
const PrivateRoute = ({
  children,
}: PrivateRouteProps): React.ReactElement | null => {
  const { loggedIn } = useAuth();
  return loggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
