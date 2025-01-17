import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import FeatureProjects from './Components/FeatureProjects/FeatureProjects';
import ParallaxDiv from './Components/ParallaxDiv/ParallaxDiv';

function App() {
  return (
    <>
    <Navbar />
    <ParallaxDiv/>
    <FeatureProjects/>
    <About />
    </>
  );
}

export default App;
