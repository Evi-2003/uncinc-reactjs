import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  loggedIn: boolean;
  logIn: (form: FormData) => void;
  logOut: () => void;
  redirectOnLogin: boolean;
  setRedirectOnLogin: (b: boolean) => void;
  loginFailed: boolean;
};

// Aanmaken van de context
export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  logIn: () => {},
  logOut: () => {},
  redirectOnLogin: false,
  setRedirectOnLogin: () => {},
  loginFailed: false,
});

// Hook voor het gebruik van de context
export function useAuth() {
  return useContext(AuthContext);
}

// Props voor de authenticatie provider
type AuthProviderProps = {
  children: ReactNode;
};

// Authenticatie (regelen van de state mangement)
export function AuthProvider({ children }: AuthProviderProps) {
  const [loggedIn, setLoggedIn] = useState(() => {
    const loggedInValue = localStorage.getItem("isLoggedIn");
    return loggedInValue ? JSON.parse(loggedInValue) : false;
  });
  const [loginFailed, setloginFailed] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);

  // Inloggen
  function logIn(form: FormData) {
    const loginData: { [key: string]: FormDataEntryValue } = {};

    form.forEach((value: FormDataEntryValue, key: string) => {
      if (typeof value === "string") {
        loginData[key] = value;
      }
    });
    // Login hardcoded, ivm geen backend
    if (
      loginData.gebruikersnaam === "uncinc" &&
      loginData.wachtwoord === "letmein"
    ) {
      setLoggedIn(true);
      setloginFailed(false);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      setLoggedIn(false);
      setloginFailed(true);
      localStorage.setItem("isLoggedIn", "false");
    }
  }

  // Functie voor het uitloggen
  function logOut() {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  // Waardes beschikbaar maken
  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logIn,
        logOut,
        redirectOnLogin,
        setRedirectOnLogin,
        loginFailed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
