import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Company from "./Components/Pages/Company";
import Contact from "./Components/Pages/Contact";
import NewProject from "./Components/Pages/NewProject";
import Projects from "./Components/Pages/Projects";

import Container from "./Components/layout/Container";
import NavBar from "./Components/layout/NavBar";
import Footer from "./Components/layout/Footer";
import Project from "./Components/Pages/Project";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/projects"  element={<Projects />}></Route>
          <Route path="/contact"  element={<Contact />}></Route>
          <Route path="/newproject"  element={<NewProject />}></Route>
          <Route path="/project/:id"  element={<Project />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
