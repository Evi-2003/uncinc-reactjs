import React, { FormEvent } from "react";

export default function LoginForm() {
  const inloggen = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = new FormData(e.currentTarget);
    console.log(loginData);
  };

  return (
    <>
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
