import React, { FormEvent, useContext } from "react";
import { AuthContext } from "../auth/auth";

export default function LoginForm() {
  const { logIn, loginFailed } = useContext(AuthContext);
  // Formulier meesturen naar de logIn functie
  const sendLogIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = new FormData(e.currentTarget);
    logIn(loginData);
  };

  return (
    <>
      {loginFailed && <h2>Gebruikersnaam of wachtwoord fout</h2>}
      <form onSubmit={sendLogIn}>
        <label htmlFor="gebruikersnaam">Gebruikersnaam</label>
        <input type="text" id="gebruikersnaam" name="gebruikersnaam" required />

        <label htmlFor="wachtwoord">Wachtwoord</label>
        <input type="password" id="wachtwoord" name="wachtwoord" required />

        <button type="submit" name="inloggen">
          Inloggen
        </button>
      </form>
    </>
  );
}
