import React from "react";
import { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const SignIn = lazy(() => import("./pages/sign-in/SignIn"));
const SignUp = lazy(() => import("./pages/sign-up/SignUp"));

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/home" element={<Dashboard />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
