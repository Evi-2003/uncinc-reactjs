import React, { useEffect } from "react";
import LoginForm from "../components/loginForm";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/auth";

export default function Login() {
  const { loggedIn, redirectOnLogin, setRedirectOnLogin } = useAuth();

  useEffect(() => {
    if (redirectOnLogin) {
      setRedirectOnLogin(false);
    }
  }, [redirectOnLogin, setRedirectOnLogin]);

  if (loggedIn || redirectOnLogin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <main>
        <h1>Login</h1>
        <LoginForm />
      </main>
    </>
  );
}
