import "./Portfolio.css";
export default function PortfolioCard(props) {

  return (
  
    <div className="card">
          <div className="image-container">
          <img src = {props.img} alt = {props.title}/>
          </div>
          <div className="card-body-container">
           
            <h3 className="card-title">{props.title}</h3>

            <p className="card-desc">
            {props.desc}
            </p>
            <div className="links">
              <a  target="_blank" href={props.url}>Live Site</a>
              <a  target="_blank" href={props.repo}>Repository</a>
            </div>
          </div>
          </div>

  );
}
