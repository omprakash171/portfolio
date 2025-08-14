import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App;
