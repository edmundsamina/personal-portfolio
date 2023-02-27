import './Navbar.css'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
  return (
      <nav className="nav-container">
        <a href="index.html" className="nav-logo"> 
            <img className="logo" src={logo} alt="logo" />
         </a>
        <div className="nav-menu">
          <ul className="nav-list-grid">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>       
        </div>        
      </nav>
  );
}
