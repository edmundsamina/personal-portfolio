import './Home.css'
import image from '../../assets/images/profile picture paint effect.png'

export default function Home() {
  return (
    <section className="home-section">
        <div className="home-grid">
        
          <div className="home-intro">
            <h1 className="home-title">
              Hello! I'm Amina, I am a web development boot-camper based in
              London.
            </h1>
           
          </div>
          <img className="home-image" src={image} alt="person" />

        </div>

    </section>
  );
}
