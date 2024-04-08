import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pokedex from "./pages/Pokedex";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <p></p>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <p></p>
      <Footer />
    </>
  );
}

export default App;
