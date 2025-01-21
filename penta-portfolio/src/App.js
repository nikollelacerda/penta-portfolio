
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FeatureProjects from './Components/FeatureProjects/FeatureProjects';
import ParallaxDiv from './Components/ParallaxDiv/ParallaxDiv';
import Footer from './Components/Footer/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Projects from './Components/Projects/Projects';
import ProjectsDetails from './Components/ProjectsDetails/ProjectsDetails';

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
        <Route path="/projects/:id" element={<ProjectsDetails/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
