import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { Appbar } from "./components/Appbar";
import { OurStory } from "./pages/OurStory";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";

import { FilledWax } from "./pages/FilledWax";
import { RecycledWax } from "./pages/RecycledWax";
import { UnfilledWax } from "./pages/UnfilledWax";
import { StickyWax } from "./pages/StickyWax";

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
            <Route path="/filled-wax" element={<FilledWax />} />
            <Route path="/recycled-wax" element={<RecycledWax />} />
            <Route path="/unfilled-wax" element={<UnfilledWax />} />
            <Route path="/sticky-wax" element={<StickyWax />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
