import './Portfolio.css'
import PortfolioCard from './PortfolioCards';
import ReversePortfolioCard from './ReverseCards';
import { portfolioData} from '../Data/data';

export default function PortfolioContainer() {
    return (
      <section  id="portfolio" className="portfolio-container">
      <h2 className="heading">Portfolio</h2>
       <div className="grid-container">
        <ReversePortfolioCard img={portfolioData[0].img} title={portfolioData[0].title} desc={portfolioData[0].desc} url={portfolioData[0].url} repo={portfolioData[0].repo}/>
        <PortfolioCard img={portfolioData[1].img} title={portfolioData[1].title} desc={portfolioData[1].desc} url={portfolioData[1].url} repo={portfolioData[1].repo}/>
        <ReversePortfolioCard img={portfolioData[2].img} title={portfolioData[2].title} desc={portfolioData[2].desc} url={portfolioData[2].url} repo={portfolioData[2].repo}/>
        <PortfolioCard img={portfolioData[3].img} title={portfolioData[3].title} desc={portfolioData[3].desc} url={portfolioData[3].url} repo={portfolioData[3].repo}/>

       </div>
       </section>
    );
  }
  