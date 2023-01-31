import './Portfolio.css'
import PortfolioCard from './PortfolioCards';

export default function PortfolioContainer() {
    return (
      <div className="portfolio-container">
      <h2 className="heading">Portfolio</h2>
       <div className="grid-container">
       <PortfolioCard title={"AI Baretender"}/>
        <PortfolioCard title={"Weather Widget"}/>
        <PortfolioCard title={"Cloud Homes"}/>
        <PortfolioCard title={"Project Match"}/>
        <PortfolioCard title={"Home-Grown"}/>
        <PortfolioCard title={"Coming Soon"}/>
       </div>
       </div>
    );
  }
  