import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import Login from "./pages/Login";
import QuoteRequest from "./pages/QuoteRequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quote-request" element={<QuoteRequest />} />
        {/* Redirect jika path salah */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;