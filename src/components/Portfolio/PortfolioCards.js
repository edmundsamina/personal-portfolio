import "./Portfolio.css";
import {useState} from 'react';

export default function PortfolioCard(props) {
   const [flip, setFlip] = useState(false);

   function onClick(){
      setFlip(!flip)
      console.log(flip)
   }
  return (
    <div className={`card ${flip ? 'flip' : ''}`}>
    <div className="front">
          <div className="header-container">
            <h3 className="header-overlay">{props.title}</h3>
          </div>
          <div className="card-body-container">
            <div className="links">
              <h4>Live Site</h4>
              <h4>Repository</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              deleniti itaque similique magni. Magni, laboriosam perferendis
              maxime!
            </p>
            <h5 onClick={onClick}className="more-info">More Info...</h5>
          </div>
          </div>
        <div className="back">
        <h3>{props.title}</h3>
        <h4>Tech Stack: </h4>
        <p>Description: </p>
        <p>Repository: </p>
        <h5 onClick={onClick}className="more-info">Flip back...</h5>


        </div>
    </div>
  );
}
