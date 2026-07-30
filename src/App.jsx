import Body from "./components/Body";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Login from "./components/Login";
import Accordion from "./components/Accordion";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DigitalClock from "./components/DigitalClock";
import SearchUi from "./components/search-ui/SearchUi";
import ImageSlider from "./components/image-slider/ImageSlider";
import ToDo from "./components/ToDo";
import Toogle from "./components/Toogle";
import { useState } from "react";

const App = () => {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <NavBar lang={lang} setLang={setLang} />
      <DigitalClock/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<About lang={lang} />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/Accordion" element={<Accordion />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/search-ui" element={<SearchUi />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/toogle" element={<Toogle />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
