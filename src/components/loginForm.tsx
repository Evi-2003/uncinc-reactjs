import React, { FormEvent } from "react";
import { InlogContext } from "../auth/auth";

export default function LoginForm() {
  const { aanmelden, fout } = React.useContext(InlogContext);

  const inloggen = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = new FormData(e.currentTarget);
    aanmelden(loginData);
  };

  return (
    <>
      {fout && <h2>Gebruikersnaam of wachtwoord fout</h2>}
      <form onSubmit={inloggen}>
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
