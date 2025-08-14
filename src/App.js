import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App;
