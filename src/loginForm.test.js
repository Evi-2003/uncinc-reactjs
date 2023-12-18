import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./components/loginForm";
import { AuthContext } from "./auth/auth";
import { MemoryRouter, Route, Routes, Navigate } from "react-router-dom";

const testLogin = jest.fn();
const testLoginGegegvens = {
  logIn: testLogin,
  loginFailed: false,
};

test("stuurt door naar dashboard na succesvolle login", () => {
  render(
    <AuthContext.Provider value={testLoginGegegvens}>
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route
            path="/dashboard"
            element={<div data-testid="dashboard">Dashboard Pagina</div>}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
});
