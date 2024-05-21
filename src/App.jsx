
import Header from './components/header/Header.jsx';
import './App.css';
import Body from './components/body/Body.jsx';
import Projects from './components/projects/Projects.jsx';
import About from './components/about/About.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Projects />
      <About />
    </div>
  );
}

export default App;