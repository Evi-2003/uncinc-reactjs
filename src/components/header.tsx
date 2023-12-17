import React from "react";
export default function Header() {
  return (
    <>
      <header>
        <img src="/logo-uncinc.webp" alt="Logo van Unc Inc" />
        <nav aria-label="Navigatie">
          <a href="/" aria-label="Homepagina">
            Home
          </a>
          <a href="/login" aria-label="Loginpagina">
            Login
          </a>
          <a href="/dashboard" aria-label="Dashboardpagina">
            Dashboard
          </a>
        </nav>
      </header>
    </>
  );
}
