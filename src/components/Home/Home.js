import './Home.css'
import downIcon from '../../assets/images/down-icon.png'
import image from '../../assets/images/profile picture paint effect.png'

export default function Home() {
  return (
    <section  id="home"  className="home-section">
        <div className="home-grid">
        
          <div className="home-intro">
            <h1 className="home-title">
              Hello! I'm Amina, I am a web development boot-camper based in
              London.
            </h1>
            <a id = "home-a-tag" href="#portfolio"><button className="home-button">See My Work <img className="home-button-icon" src={downIcon} alt="press to view portfolio"/></button></a>
          </div>
          <img className="home-image" src={image} alt="person" />

        </div>

    </section>
  );
}
