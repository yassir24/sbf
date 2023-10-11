
import './App.css';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Tutorial from './pages/Tutorial';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import About from './pages/AboutUs';
import Faq from './pages/Faq';
import TutorialDetails from './pages/TutorialDetails';
import Token from './pages/Token';
import Support from './pages/Support';

function App() {

  return (
    <> 
     <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/tutorialdetails" element={<TutorialDetails />} />
      <Route path="/token" element={<Token />} />
      <Route path="/support" element={<Support />} />
    </Routes>
    {/* <Footer /> */}
    </>
  )
}

export default App
