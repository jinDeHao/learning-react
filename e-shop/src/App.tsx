import PreNav1 from "./components/PreNav1";
import PreNav2 from "./components/PreNav2";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import './styles/PreNav1.css'
import './styles/PreNav2.css'
import './styles/NavBar.css'
import './styles/Hero.css'


const App = () =>
  <div>
    <PreNav1 />
    <PreNav2 />
    <NavBar />
    <Hero />
  </div>;

export default App;
