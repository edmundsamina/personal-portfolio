import "./Portfolio.css";
import img from '../../assets/images/portfolio-img.png'

export default function ReversePortfolioCard(props) {

  return (
  
    <div className="card">
         
          <div className="card-body-container">
           
            <h3 className="header-overlay">{props.title}</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              deleniti itaque similique magni. Magni, laboriosam perferendis
              maxime! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              deleniti itaque similique magni. Magni, laboriosam perferendis
              maxime! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              deleniti itaque similique magni. Magni, laboriosam perferendis
              maxime!
            </p>
            <div className="links">
              <h4>Live Site</h4>
              <h4>Repository</h4>
            </div>
          </div>

          <div className="image-container">
          <img src = {img} alt = {props.title}/>
          </div>
          </div>

  );
}
