import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import OptionsPage from "./pages/OptionsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dash" element={<DashboardPage />} />
        <Route path="options" element={<OptionsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route index element={<DashboardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
