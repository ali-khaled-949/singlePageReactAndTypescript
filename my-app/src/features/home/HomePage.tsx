import React from 'react';
import './HomePage.css';
import image1 from './image/1.jpg';
import image2 from './image/2.jpg';
import image3 from './image/3.jpg';
import featureIcon1 from './image/icon1.png';  // Ensure you have these images in your project
import featureIcon2 from './image/icon1.png';
import featureIcon3 from './image/icon1.png';

const HomePage: React.FC = () => {
  const tiles = [
      { id: 1, title: "Tile 1", description: "Description for Tile 1", image: image1 },
      { id: 2, title: "Tile 2", description: "Description for Tile 2", image: image2 },
      { id: 3, title: "Tile 3", description: "Description for Tile 3", image: image3 },
  ];

  return (
      <div>
          <nav className="navbar">
              <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
          <header className="hero" id="hero">
              <h1>Welcome to Our Website!</h1>
              <p>Discover our services and offerings.</p>
              <button>Learn More</button>
          </header>
          <main>
              <section className="features" id="features">
                  <h2>Our Features</h2>
                  <div className="feature-item">
                      <img src={featureIcon1} alt="Feature 1" />
                      <p>Feature 1 Description</p>
                  </div>
                  <div className="feature-item">
                      <img src={featureIcon2} alt="Feature 2" />
                      <p>Feature 2 Description</p>
                  </div>
                  <div className="feature-item">
                      <img src={featureIcon3} alt="Feature 3" />
                      <p>Feature 3 Description</p>
                  </div>
              </section>
              <div className="tile-container">
                  {tiles.map(tile => (
                      <div key={tile.id} className="tile">
                          <img src={tile.image} alt={tile.title} className="tile-image" />
                          <h3>{tile.title}</h3>
                          <p>{tile.description}</p>
                      </div>
                  ))}
              </div>
              <section className="about" id="about">
                  <h2>About Us</h2>
                  <p>Learn more about our company and our values.</p>
              </section>
              <section className="contact" id="contact">
                  <h2>Contact Us</h2>
                  <form>
                      <input type="text" placeholder="Your Name" required />
                      <input type="email" placeholder="Your Email" required />
                      <textarea placeholder="Your Message"></textarea>
                      <button type="submit">Send Message</button>
                  </form>
              </section>
          </main>
          <footer className="footer">
              <p>© 2024 Company Name. All rights reserved.</p>
          </footer>
      </div>
  );
};

export default HomePage;
