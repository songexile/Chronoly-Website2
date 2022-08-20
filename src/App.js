import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import OptionsPage from "./pages/OptionsPage";
import ProfilePage from "./pages/ProfilePage";
import RacetrackPage from "./pages/GraphPages/RacetrackPage";

//App, mainly used for routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="options" element={<OptionsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="g-racetrack" element={<RacetrackPage />} />
        <Route index element={<DashboardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
