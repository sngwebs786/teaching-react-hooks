import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import IncDec from "./pages/IncDec";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about/:name" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/incdec" element={<IncDec />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
