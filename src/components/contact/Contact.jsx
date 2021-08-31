import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="left">
        <img src="assets/agreement2.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form action="">
          <input type="text" placeholder="Email" />
          <textarea placeholder="Your message here..."></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
