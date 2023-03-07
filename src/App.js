
// import './App.css';
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx';
import SocialIcons from './components/SocialIcons.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>

      <Contact/>
      <SocialIcons/>

    </div>
  );
}

export default App;
