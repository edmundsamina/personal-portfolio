import  { useState } from "react";
import logo from "../../assets/images/logo.png";
import cross from "../../assets/images/cross.png"
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <a href="index.html" className="nav-logo">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <div className="hamburger" onClick={handleToggle}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className={`nav-menu`}>
        <ul className="nav-list-grid">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" >
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link" >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" >
              Contact
            </a>
          </li>
        </ul>
      </div>

  
        <div className={`${isOpen ? "nav-menu-active" : "nav-menu-hidden"}`}>
        <img src={cross} className="hamburger-close" onClick={handleToggle}/>
          <ul className="nav-ul">
          <li className="nav-item-active">
            <a href="#home" className="nav-link-active" >
              Home
            </a>
          </li>
          <li className="nav-item-active">
            <a href="#about" className="nav-link-active">
              About
            </a>
          </li>
          <li className="nav-item-active">
            <a href="#portfolio" className="nav-link-active">
              Portfolio
            </a>
          </li>
          <li className="nav-item-active">
            <a href="#contact" className="nav-link-active">
              Contact
            </a>
          </li>
          </ul>
        </div>
  
    </nav>
  );
}

export default Navbar;






// import './Navbar.css'
// import logo from '../../assets/images/logo.png'

// export default function Navbar() {
//   return (
//       <nav className="nav-container">
//         <a href="index.html" className="nav-logo"> 
//             <img className="logo" src={logo} alt="logo" />
//          </a>
//         <div className="nav-menu">
//           <ul className="nav-list-grid">
//             <li className="nav-item">
//               <a href="#home" className="nav-link">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#about" className="nav-link">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#portfolio" className="nav-link">
//                 Portfolio
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#contact" className="nav-link">
//                 Contact
//               </a>
//             </li>
//           </ul>       
//         </div>        
//       </nav>
//   );
// }
