import "./Contact.css";
import {useRef} from 'react';

export default function Contact() {
const firstName = useRef();
const lastName = useRef();
const email = useRef();
const message = useRef();

function onFormClick(e){
e.preventDefault()
console.log(firstName.current.value)
}
  return (
    <div className="contact-container">
      <h3 className="heading-two">Contact</h3>
      <div className="contact-form-container">
      <div className="form-container">
        <form className="form">
          <input ref ={firstName} type="text" placeholder="First-name"/>      
          <input  ref ={lastName} type="text" placeholder="Last-name"/>        
          <input ref ={email} type="email" placeholder="Email"/>      
          <textarea ref ={message} className="text-area" type="text" placeholder="Message"/>
          <button className="form-button" onClick={onFormClick}>Submit</button>
        </form>
        </div>
        <div className="contact-text-container">
        <div className="text-container">
         <h3 className="contact-title">Get in Touch!</h3><h4 className="sub-title">Let's talk about everything.</h4>
         <p className="contact-description">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti itaque similique magni. Magni, laboriosam perferendis maxime!
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti itaque similique magni. Magni, laboriosam perferendis maxime!
         </p>
         </div>
        </div>
      </div>
    </div>
  );
}
