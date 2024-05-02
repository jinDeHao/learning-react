import PreNav1 from "./components/PreNav1";
import PreNav2 from "./components/PreNav2";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import './styles/PreNav1.css'
import './styles/PreNav2.css'
import './styles/NavBar.css'
import './styles/Hero.css'
import './styles/Benefits.css'


const App = () =>
  <div>
    <PreNav1 />
    <PreNav2 />
    <NavBar />
    <Hero />
    <Benefits />
  </div>;

export default App;
