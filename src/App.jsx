import Body from "./components/Body";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Team from "./components/Team";
import Login from "./components/Login";
import Accordion from "./components/Accordion";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DigitalClock from "./components/DigitalClock";

const App = () => {
  return (
    <div>
      <NavBar />
      <DigitalClock/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
              <Route path="/team" element={<Team />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Accordion" element={<Accordion />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
