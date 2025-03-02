
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import About from "./Pages/about";
import Features from "./Pages/feature";
import Team from "./Pages/team";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    {/* <Home /> */}
    </>
  );
}

export default App;
