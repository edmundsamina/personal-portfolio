import "./About.css";
import icon1 from '../../assets/tech-icons/Group 36.png'
import icon2 from '../../assets/tech-icons/Group 37.png'
import icon3 from '../../assets/tech-icons/Group 38.png'
import icon4 from '../../assets/tech-icons/Group 39.png'
import icon5 from '../../assets/tech-icons/Group 40.png'
import icon6 from '../../assets/tech-icons/Group 41.png'

export default function About() {
  return (
    <section className="about-section">
      <h2 className="about-heading">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <h3>Who am I?</h3>
          <p>
            I am aspiring to become a full-stack developer. I have a background
            in Architecture, before moving to South Korea to teach English. I
            had always thought coding was out of reach for me before starting
            the boot camp, but I was pleasantly surprised by how much I enjoyed
            it and how it has helped me to use both my logical and creative
            side.{" "}
          </p>
        </div>
        <div className="skills-contaier">
          <h3>Skills</h3>
          <div className="skills-grid">

          <img className="skills-icons" src={icon1} alt="icons"/>
          <img className="skills-icons" src={icon2} alt="icons"/>
          <img className="skills-icons" src={icon3} alt="icons"/>
          <img className="skills-icons" src={icon4} alt="icons"/>
          <img className="skills-icons" src={icon5} alt="icons"/>
          <img className="skills-icons" src={icon6} alt="icons"/>
          <img className="skills-icons" src={icon6} alt="icons"/>
          <img className="skills-icons" src={icon6} alt="icons"/>
          <img className="skills-icons" src={icon6} alt="icons"/>
          <img className="skills-icons" src={icon6} alt="icons"/>

</div>
        </div>
      </div>
    </section>
  );
}
