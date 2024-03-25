import './App.css';
import About from './components/About';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
import Packages from './components/Packages.js';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Packages/>
    </>
  );
}

export default App;
