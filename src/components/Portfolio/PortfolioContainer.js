import './Portfolio.css'
import PortfolioCard from './PortfolioCards';
import ReversePortfolioCard from './ReverseCards';

export default function PortfolioContainer() {
    return (
      <div className="portfolio-container">
      <h2 className="heading">Portfolio</h2>
       <div className="grid-container">
        <PortfolioCard title={"Coming Soon"}/>
        <ReversePortfolioCard title={"Coming Soon"}/>
        <PortfolioCard title={"Coming Soon"}/>
        <ReversePortfolioCard title={"Coming Soon"}/>

       </div>
       </div>
    );
  }
  