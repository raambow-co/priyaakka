import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Education />
    </div>
  );
}

export default App;
