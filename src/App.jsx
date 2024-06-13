import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { Appbar } from "./components/Appbar";
import { OurStory } from "./pages/OurStory";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";
import { Services } from "./pages/Services";
import { MachiningShop } from "./pages/MachiningShop";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <div>
            <Appbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/machining-shop" element={<MachiningShop />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
