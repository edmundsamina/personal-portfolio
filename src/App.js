import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home';
import PortfolioContainer from './components/Portfolio/PortfolioContainer';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
function App() {

  return (
    <div className="App">
   <Navbar/>
   <Home/>
   <PortfolioContainer/>
   <Contact/>
   <Footer/>
   </div>
  );
}

export default App;
