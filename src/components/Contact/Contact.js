import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h3 className="heading-two">Contact</h3>
      <div className="contact-form-container">
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
        <div className="contact-text-container">
          <div className="text-container">
            <h3 className="contact-title">Get in Touch!</h3>
            <h4 className="sub-title">Let's talk about everything.</h4>
            <p className="contact-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              deleniti itaque similique magni. Magni, laboriosam perferendis
              maxime! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nihil deleniti itaque similique magni. Magni, laboriosam
              perferendis maxime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
