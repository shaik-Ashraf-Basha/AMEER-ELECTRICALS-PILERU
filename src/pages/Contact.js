import React from "react";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Phone: 7842612530, 7893595697</p>
      <p>Email: ashuashrafpersonal@gmail.com</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
