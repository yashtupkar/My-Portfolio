// import React,{useEffect} from "react";
// import Navbar from './components/navbar';
// import HeroSection from './components/heroSection';
// import SplashScreen from './components/splashScreen';
// import MouseFollower from "./components/mouseFollower";
// import Footer from "./components/footer";
// import Services from "./components/services";
// import About from "./components/about";
// import Resume from "./components/resumeSection";

// function App() {

//   return (
//     <>
//       <div className="hidden md:block">
//         <MouseFollower />
//       </div>

//       <div className="px-4 sm:px-10 md:px-10 lg:px-40 bg-white h-fit  gap-10 dark:bg-gray-900 font-syne overflow-x-hidden">
//         <SplashScreen />
//         <Navbar />
//         <HeroSection />
//         <Services />
//         <About />
//         <Resume />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/homePage";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/:code" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
