import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
// import Contact from "./pages/contact/Contact";
// import Header from "./components/header/Header";
// import Home from "./pages/home/Home";
// import Footer from "./components/footer/Footer";
//Components
import { Header, Footer } from "./components";
//Pages
import { Home, Contact, Login, Register, Reset } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
