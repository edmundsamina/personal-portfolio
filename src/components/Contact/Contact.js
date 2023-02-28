import "./Contact.css";
import linkdin from '../../assets/images/indeed.png'
import github from '../../assets/images/github.png'

export default function Contact() {
  return (
    <div  id="contact" className="contact-container">
      <h3 className="heading-two">Contact</h3>
      <div className="contact-form-container">
      <div className="contact-text-container">
          <div className="text-container">
            <h3 className="contact-title">Get in Touch!</h3>
            <h4 className="sub-title">Fill out the contact form to the right, or feel free to contact me via my social media links below!</h4>
          <div className="social-media">
           <a target="_blank"  href="https://www.linkedin.com/in/amina-edmunds/"><img  src={linkdin} alt="linkdin social link"/></a> 
           <a target="_blank" href="https://github.com/edmundsamina"> <img  src={github} alt="github social link"/></a> 

          </div>
          </div>
        </div>
        <div className="form-container">
          <form
            className="form"
            action="https://formspree.io/f/mjvdglaj"
            method="POST"
          >
            <input required type="text" placeholder="First-name" name="First-name" />
            <input required type="text" placeholder="Last-name" name="Last-name" />
            <input required type="email" placeholder="Email" name="email" />
            <textarea
              className="text-area"
              type="text"
              placeholder="Message"
              name="message"
              required
            />
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
       
      </div>
    </div>
  );
}
