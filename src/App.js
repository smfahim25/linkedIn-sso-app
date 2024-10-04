// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import LinkedInCallback from "./component/Auth/LinkedInCallback";
import Navbar from "./component/shared/Navbar";
import LinkedInLogin from "./component/Auth/Login";
import PrivateRoute from "./component/shared/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LinkedInLogin />} />
        <Route path="/auth/callback" element={<LinkedInCallback />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
