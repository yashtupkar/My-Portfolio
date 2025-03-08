import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/homePage";
import Admin from "./pages/Admin";
import MyWork from "./pages/Projects";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/:code" element={<Admin />} />
          <Route path="/projects" element={<MyWork />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project-details/:id" element={<ProjectDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
