import React, { createContext, useContext, useState, ReactNode } from "react";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

type AuthContextType = {
  aangemeld: boolean;
  aanmelden: (form: FormData) => void;
  afmelden: () => void;
  fout: boolean;
};

export const InlogContext = createContext<AuthContextType>({
  aangemeld: false,
  aanmelden: () => {},
  afmelden: () => {},
  fout: false,
});

export function GebruikGebruiker() {
  return useContext(InlogContext);
}
type InloggenProps = {
  children: ReactNode;
};
export function Inloggen({ children }: InloggenProps) {
  const [aangemeld, setAangemeld] = useState(false);
  const [fout, setFout] = useState(false);

  function aanmelden(form: FormData) {
    const loginGegevens: { [key: string]: FormDataEntryValue } = {};

    form.forEach((value: FormDataEntryValue, key: string) => {
      if (typeof value === "string") {
        loginGegevens[key] = value;
      }
    });
    if (
      loginGegevens.gebruikersnaam == "uncinc" &&
      loginGegevens.wachtwoord == "letmein"
    ) {
      setAangemeld(true);
      setFout(false);
      console.log("Aangemeld");
    } else {
      setAangemeld(false);
      setFout(true);
      console.log("Wachtwoord fout");
    }
  }

  function afmelden() {
    setAangemeld(false);
  }

  return (
    <InlogContext.Provider value={{ aangemeld, aanmelden, afmelden, fout }}>
      {children}
    </InlogContext.Provider>
  );
}
