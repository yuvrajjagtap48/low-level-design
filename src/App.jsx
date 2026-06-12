import Body from "./components/Body";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Team from "./components/Team";
import Login from "./components/Login";
import Accordion from "./components/Accordion";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DigitalClock from "./components/DigitalClock";
import SearchUi from "./components/search-ui/SearchUi";
import ImageSlider from "./components/image-slider/ImageSlider";
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
              <Route path="/team" element={<Team />} />
          </Route>
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Accordion" element={<Accordion />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/search-ui" element={<SearchUi />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
