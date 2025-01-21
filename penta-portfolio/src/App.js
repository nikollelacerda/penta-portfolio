
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FeatureProjects from './Components/FeatureProjects/FeatureProjects';
import ParallaxDiv from './Components/ParallaxDiv/ParallaxDiv';
import Footer from './Components/Footer/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ParallaxDiv/>
              <FeatureProjects/>
            </>
          }  
        />
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
