import "./About.css";
import { skillsData } from "../Data/data";

export default function About() {
  return (
    <section  id="about" className="about-section">
      <h2 className="about-heading">About Me</h2>
      <div className="about-grid">
      <div className="skills-contaier">
          <div className="skills-grid">
            {skillsData.map((skill) => {
              return (
                <img
                  className="skills-icons"
                  src={skill.icon}
                  alt={skill.name}
                />
              );
            })}
          </div>
        </div>
        <div className="about-text">
          <h3>Who am I?</h3>
          <p>
            I'm an ex-teacher, and architecture graduate with a strong
            background in design and problem-solving. Recently, I completed a
            16- week coding bootcamp at the School of Code to transition into
            the tech industry. I'm passionate about accessibility, the power of
            education and eager to learn more! I'm interested in both the
            front-end and back-end, and I'm hoping to become a fullstack
            developer! These are some of the tech stack I have experience, and
            I'm looking forward to adding more!
          </p>
        </div>
       
      </div>
    </section>
  );
}
