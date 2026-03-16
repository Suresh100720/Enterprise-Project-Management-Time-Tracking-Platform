import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import TimeTracking from "./pages/TimeTracking";


// Protected Route Component
function PrivateRoute({ children }) {

  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/" />;

}

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />


        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />

        <Route
          path="/time"
          element={
            <PrivateRoute>
              <TimeTracking />
            </PrivateRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}