import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ChurchCalendar from "./pages/ChurchCalendar.jsx";
import LocationContact from "./pages/LocationContact.jsx";
import WhatWeBelieve from "./pages/WhatWeBelieve.jsx";
import History from "./pages/History.jsx";
import WaysToGive from "./pages/WaysToGive.jsx";
import ThingsToKnow from "./pages/ThingsToKnow.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<ChurchCalendar />} />
        <Route path="/contact" element={<LocationContact />} />
        <Route path="/beliefs" element={<WhatWeBelieve />} />
        <Route path="/history" element={<History />} />
        <Route path="/give" element={<WaysToGive />} />
        <Route path="/12things" element={<ThingsToKnow />} />
      </Routes>
    </Router>
  );
};

export default App;
