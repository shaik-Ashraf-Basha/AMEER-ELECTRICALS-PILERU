import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

// Page components
function Welcome() {
  return (
    <section className="hero">
      <h2>Welcome to Ameer Electricals, Plumbing & Hardwares</h2>
      <p>Providing trusted services since 2011 with the best prices in the market.</p>

      <div className="brand-gallery">
        <img src="/gm1.png" alt="GM" />
        <img src="/goldmedal1.png" alt="Goldmedal" />
        <img src="/orient.png" alt="Orient" />
        <img src="/crompton1.png" alt="Crompton" />
        <img src="/orbit.png" alt="Orbit" />
        <img src="/bajaj.png" alt="Bajaj" />
        <img src="/philips.png" alt="Philips" />
        <img src="/v-guard.png" alt="V-Guard" />
      </div>
    </section>
  );
}

function Home() {
  return (
    <section className="home">
      <h2>Explore Our Products and Services</h2>
      <p>We offer premium electrical, plumbing, and hardware solutions for homes and businesses.</p>

      <div className="product-grid">
        <div className="product-card">
          <img src="/switches.jpg" alt="Switches" height={300} />
          <h3>Switches</h3>
          <p>Stylish and durable modular switches from top brands.</p>
        </div>

        <div className="product-card">
          <img src="/cables.jpg" alt="Cables" />
          <h3>Cables & Wires</h3>
          <p>High‑quality electrical cables ensuring safety and performance.</p>
        </div>

        <div className="product-card">
          <img src="/taps.jpg" alt="Water Taps" height={400} />
          <h3>Premium Water Taps</h3>
          <p>Elegant and long‑lasting taps for modern bathrooms and kitchens.</p>
        </div>

        <div className="product-card">
          <img src="/lighting.jpg" alt="Lighting" height={300} />
          <h3>Lighting</h3>
          <p>LED bulbs, tube lights, and decorative fixtures for every space.</p>
        </div>

        <div className="product-card">
          <img src="/fans.jpg" alt="Fans"  height={400}/>
          <h3>Fans</h3>
          <p>Ceiling, pedestal, and exhaust fans with energy‑efficient designs.</p>
        </div>

        <div className="product-card">
          <img src="/plumbing.jpg" alt="Plumbing Items" height={200} width={200} />
          <h3>Plumbing Items</h3>
          <p>Pipes, fittings, and accessories for reliable water systems.</p>
        </div>
      </div>
    </section>
  );
}


function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Ameer Electricals</h2>
          <p>
            Founded in 2011, <strong>Ameer Electricals, Plumbing & Hardwares</strong> has grown
            into one of the most trusted names in electrical and plumbing solutions in
            Pileru, Andhra Pradesh. We pride ourselves on offering premium quality products
            from leading brands like GM, Goldmedal, Crompton, Orbit, Bajaj, Philips, and V‑Guard.
          </p>
          <p>
            Our mission is simple — to deliver reliable products, honest service, and
            long‑term value to every customer. Whether you’re building a new home or upgrading
            your business, we provide everything from switches and cables to lighting,
            fans, and plumbing essentials.
          </p>
          <p>
            With over a decade of experience, we’ve earned the trust of thousands of customers
            through our commitment to quality, affordability, and customer satisfaction.
          </p>
        </div>

        <div className="about-image">
          <img src="/about-store.jpg" alt="Ameer Electricals Store" />
        </div>
      </div>

      <div className="about-values">
        <h3>Why Choose Us?</h3>
        <div className="values-grid">
          <div className="value-card">
            <img src="/quality.png" alt="Quality" />
            <h4>Top Quality</h4>
            <p>We source only genuine products from trusted brands.</p>
          </div>
          <div className="value-card">
            <img src="/service.png" alt="Service" />
            <h4>Excellent Service</h4>
            <p>Friendly support and expert guidance for every customer.</p>
          </div>
          <div className="value-card">
            <img src="/trust.png" alt="Trust" />
            <h4>Trusted Since 2011</h4>
            <p>Over a decade of reliability and customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>We’re always happy to help you with your electrical, plumbing, and hardware needs.</p>

      <div className="contact-details">
        <div className="contact-card">
          <h3>Proprietor</h3>
          <p><strong>Name:</strong> Shaik Ameer Basha</p>
          <p><strong>Phone:</strong> 7842612530</p>
          <p><strong>Email:</strong> ameer.electricals@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>Co‑Proprietor</h3>
          <p><strong>Name:</strong> Shaik Ashraf Basha</p>
          <p><strong>Phone:</strong> 7893595697</p>
          <p><strong>Email:</strong> ashuashrafpersonal@gmail.com</p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Customer Enquiry Form</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent successfully.");
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="phone" placeholder="Your Contact Number" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}


function Address() {
  return (
    <section className="address">
      <h2>Our Shop Location</h2>
      <p>
        Visit <strong>Ameer Electricals, Plumbing & Hardwares</strong> for all your electrical,
        plumbing, and hardware needs. We’re located conveniently in Pileru, Annamayya District,
        Andhra Pradesh.
      </p>

      <div className="address-details">
        <p><strong>Shop Name:</strong> Ameer Electricals & Hardwares</p>
        <p><strong>Proprietor:</strong> Shaik Ameer Basha</p>
        <p><strong>Co‑Proprietor:</strong> Shaik Ashraf Basha</p>
        <p><strong>Phone:</strong> 7842612530 / 7893595697</p>
        <p><strong>Email:</strong> ameer.electricals@gmail.com</p>
        <p><strong>Address:</strong> opposite to union bank,LBS Road, Pileru, Annamayya District, Andhra Pradesh – 517214</p>
      </div>

      <div className="map-container">
        <iframe
          title="Ameer Electricals Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.123456789!2d78.937!3d13.667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d2b123456789%3A0xabcdef123456789!2sAmeer%20Electricals%2C%20Pileru!5e0!3m2!1sen!2sin!4v1695400000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}


function App() {
  return (
    <Router>
      <header className="navbar">
        <h1 className="logo">Ameer Electricals</h1>
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/address">Address</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/address" element={<Address />} />
      </Routes>

      <footer>
        <p>© 2026 Ameer Electricals, Plumbing & Hardwares</p>
        <p>GSTIN: 37CHNPB0729H2ZD</p>
        <p>Brands: GM, Goldmedal, Orient, Crompton, Orbit, Bajaj, Philips, V‑Guard, havells, ashirwad, star,</p>
      </footer>
    </Router>
  );
}

export default App;

