import React from "react";
import { useAuth } from "../auth/auth";

export default function Dashboard() {
  const { logOut } = useAuth();
  return (
    <>
      <h1>Dashboard</h1>
      <p>Je bent momenteel ingelogd</p>
      <button onClick={logOut}>Uitloggen</button>
    </>
  );
}
