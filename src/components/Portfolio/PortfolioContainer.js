import './Portfolio.css'
import PortfolioCard from './PortfolioCards';

export default function PortfolioContainer() {
    return (
       <div className="portfolio-container">
        <PortfolioCard title={"Ai Baretender"}/>
        <PortfolioCard title={"Weather Widget"}/>
        <PortfolioCard title={"Cloud Homes"}/>
        <PortfolioCard title={"Project Match"}/>
        <PortfolioCard title={"Home-Grown"}/>
        <PortfolioCard title={"Donut Shop"}/>
       </div>
    );
  }
  