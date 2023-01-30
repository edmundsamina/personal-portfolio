import './Home.css'
import image from '../../assets/images/profile picture paint effect.png'

export default function Home() {
  return (
    <section className="home-section">
        <div className="home-grid">
          <img className="home-image" src={image} alt="person" />
          <div className="home-about-me">
            <h1 className="home-title">
              Hello! I'm Amina, I am a web development boot-camper based in
              London.
            </h1>
            <br></br>
            <p className="home-description">
              I am aspiring to become a full-stack developer. I have a
              background in Architecture, before moving to South Korea to teach
              English. I had always thought coding was out of reach for me
              before starting the boot camp, but I was pleasantly surprised by
              how much I enjoyed it and how it has helped me to use both my
              logical and creative side.
            </p>
          </div>
        </div>

    </section>
  );
}
