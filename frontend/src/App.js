import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/homePage";
import Admin from "./pages/Admin";
import MyWork from "./pages/Projects";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/:code" element={<Admin />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
