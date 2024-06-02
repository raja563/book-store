import React from "react";
import Home from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./components/Courses";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
