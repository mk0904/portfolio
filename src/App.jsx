
import Header from './components/header/Header.jsx';
import './App.css';
import Body from './components/body/Body.jsx';
import Projects from './components/projects/Projects.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;