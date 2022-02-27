import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./components/Table/AdminPage";
import LoginPage from "./components/LoginPage/LoginPage";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage/>}/>

    </Routes>

  );
};

export default App;
