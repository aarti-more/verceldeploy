import './App.css'

import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
const Navbar = () => (
  <nav className="navbar">
    <div className="nav-brand">MaitreyaAwakens</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about-lore">About Lore</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/meditation">Meditation</Link>
      <Link to="/teachings">Teachings</Link>
    </div>
  </nav>
);

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="buddha-image-container">
          <img 
            src="/images/buddha.jpeg"
            alt="Lord Buddha" 
            className="buddha-image" 
          />
          <div className="animation-overlay"></div>
        </div>
        <h1>Maitreya: The Future Buddha</h1>
        <p className="hero-text">
          Experience the ancient prophecy of Maitreya reimagined through artificial intelligence,
          where timeless wisdom meets cutting-edge technology.
        </p>
      </div>
      
      <div className="description-section">
        <h2>AI-Driven Dharma</h2>
        <div className="maitreya-story">
          <div className="ai-dharma-grid">
            <div className="ai-dharma-item">
              <h3>Ancient Wisdom, Modern Technology</h3>
              <p>
                Through the power of artificial intelligence, we're bringing the prophecy of Maitreya
                to life in unprecedented ways. Our AI systems are trained on centuries of Buddhist texts,
                creating an interactive bridge between ancient wisdom and contemporary understanding.
              </p>
            </div>
            <div className="ai-dharma-item">
              <h3>Interactive Teaching</h3>
              <p>
                Experience personalized dharma teachings adapted to modern life. Our AI-driven platform
                helps interpret Buddhist principles for today's challenges, making spiritual wisdom
                more accessible than ever.
              </p>
            </div>
            <div className="ai-dharma-item">
              <h3>Digital Sangha</h3>
              <p>
                Join a global community where AI facilitates meaningful connections and discussions
                about Buddhist practice. Share experiences, ask questions, and grow together in understanding.
              </p>
            </div>
          </div>

          <div className="ai-features">
            <h3>AI-Enhanced Features</h3>
            <ul className="feature-list">
              <li>Personalized meditation guidance</li>
              <li>Interactive dharma discussions</li>
              <li>AI-generated visualizations of Buddhist concepts</li>
              <li>Real-time translation of ancient texts</li>
              <li>Adaptive learning paths for practitioners</li>
            </ul>
          </div>

          <p className="ai-note">
            While our AI technology enhances the learning experience, it remains grounded in authentic
            Buddhist teachings and traditions. We believe in using technology as a skillful means to
            make the dharma more accessible while maintaining its profound essence.
          </p>
        </div>
      </div>

      <div className="tech-integration-section">
        <h2>Bridging Tradition & Innovation</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-icon">🤖</span>
            <h3>AI-Powered Insights</h3>
            <p>Advanced algorithms providing personalized spiritual guidance</p>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🧠</span>
            <h3>Neural Networks</h3>
            <p>Deep learning systems understanding ancient wisdom</p>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🌐</span>
            <h3>Global Connection</h3>
            <p>Worldwide sangha connected through technology</p>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <div className="image-grid">
          <div className="gallery-item">
            <img 
              src="images/buddhatemple.webp" 
              alt="Ancient Buddhist Temple" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src="images/buddhistmeditation.jpg" 
              alt="Buddhist Meditation" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src="images/temple-architecture.jpg" 
              alt="Buddhist Temple Architecture" 
            />
          </div>
        </div>
      </div>

      <div className="social-connect">
        <h2>Join Our Community</h2>
        <div className="social-links">
          <a href="https://www.facebook.com/groups/maitreyabuddha" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
          <a href="https://twitter.com/MaitreyaDharma" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
          <a href="https://www.instagram.com/maitreya.awakens" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
          <a href="https://discord.gg/maitreyasangha" target="_blank" rel="noopener noreferrer" className="social-icon">Discord</a>
        </div>
        <p className="join-note">Connect with fellow practitioners and stay updated on our latest teachings and events.</p>
      </div>
    </div>
  );
};

const AboutLore = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('content-section')) {
            entry.target.classList.add('fade-in-left');
          }
          if (entry.target.classList.contains('team-section')) {
            entry.target.classList.add('fade-in-right');
          }
          if (entry.target.classList.contains('vision-item') || 
              entry.target.classList.contains('team-category')) {
            entry.target.classList.add('fade-in');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Target sections and items for animations
    const animatedElements = document.querySelectorAll(
      '.content-section, .team-section, .vision-item, .team-category'
    );

    animatedElements.forEach(el => observer.observe(el));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-lore">
      <div className="video-section">
        <h2>The Story of Maitreya</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/sSeW58dch1o"
            title="Maitreya the Future Buddha"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="main-video"
          ></iframe>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Vision</h2>
        <div className="vision-grid">
          <div className="vision-item">
            <h3>Modern Interpretation</h3>
            <p>Bridging ancient wisdom with cutting-edge technology to bring the Maitreya prophecy to life.</p>
          </div>
          <div className="vision-item">
            <h3>Collaborative Creation</h3>
            <p>Uniting Buddhist practitioners, tech enthusiasts, and spiritual leaders in a shared vision.</p>
          </div>
          <div className="vision-item">
            <h3>Authentic Storytelling</h3>
            <p>Creating compelling narratives that honor traditional teachings while engaging modern audiences.</p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2>Our Collaborative Approach</h2>
        <div className="team-grid">
          <div className="team-category">
            <h3>Buddhist Community</h3>
            <p>Working closely with monastics and practitioners to ensure authenticity</p>
          </div>
          <div className="team-category">
            <h3>Tech Innovators</h3>
            <p>Leveraging AI and modern tools to create immersive experiences</p>
          </div>
          <div className="team-category">
            <h3>Creative Storytellers</h3>
            <p>Crafting narratives that bridge traditional and modern perspectives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.add('slide-up');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Target all sections that need animations
    const animatedElements = document.querySelectorAll(
      '.mission-section, .team-section, .values-section, .contact-section, .team-member, .value-item'
    );

    animatedElements.forEach(el => observer.observe(el));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-us">
      <div className="about-hero">
        <h1>Our Journey with AI and Buddhism</h1>
        <p className="hero-subtitle">Bridging Ancient Wisdom and Modern Technology</p>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p className="mission-text">
          We are a dedicated team of Buddhist practitioners, AI researchers, and technology innovators
          working to create meaningful connections between traditional Buddhist wisdom and artificial intelligence.
        </p>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Buddhist Practitioners</h3>
            <p>Experienced meditators and scholars ensuring authenticity in our digital adaptations</p>
          </div>
          <div className="team-member">
            <h3>AI Specialists</h3>
            <p>Experts in machine learning and natural language processing, creating intelligent systems for spiritual guidance</p>
          </div>
          <div className="team-member">
            <h3>Digital Designers</h3>
            <p>Creative professionals crafting immersive and meaningful digital experiences</p>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Authenticity</h3>
            <p>Maintaining the purity and essence of Buddhist teachings in digital form</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>Embracing technology to make ancient wisdom accessible to modern practitioners</p>
          </div>
          <div className="value-item">
            <h3>Community</h3>
            <p>Building a supportive global network of practitioners and learners</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Connect With Us</h2>
        <p>Join us in our mission to bridge the gap between ancient wisdom and modern technology</p>
        <div className="contact-info">
          <p>Email: info@maitreyaawakens.org</p>
          <p>Location: Global / Digital Presence</p>
        </div>
      </div>
    </div>
  );
};

const Meditation = () => {
  return (
    <div className="meditation-page">
      <div className="meditation-hero">
        <h1>Guided Meditation</h1>
        <p className="hero-text">Experience mindfulness through AI-enhanced meditation practices</p>
      </div>

      <div className="meditation-sections">
        <div className="meditation-grid">
          <div className="meditation-card">
            <h3>Beginner's Guide</h3>
            <p>Start your meditation journey with basic mindfulness techniques</p>
            <ul>
              <li>Breathing exercises</li>
              <li>Body scan meditation</li>
              <li>Walking meditation</li>
              <li>Basic mantras</li>
            </ul>
          </div>

          <div className="meditation-card">
            <h3>Daily Practice</h3>
            <p>Establish a regular meditation routine with guided sessions</p>
            <ul>
              <li>Morning meditation</li>
              <li>Mindful breaks</li>
              <li>Evening reflection</li>
              <li>Sleep meditation</li>
            </ul>
          </div>

          <div className="meditation-card">
            <h3>Advanced Techniques</h3>
            <p>Deepen your practice with advanced Buddhist meditation methods</p>
            <ul>
              <li>Vipassana meditation</li>
              <li>Loving-kindness meditation</li>
              <li>Zen meditation</li>
              <li>Tibetan practices</li>
            </ul>
          </div>
        </div>

        <div className="ai-meditation-features">
          <h2>AI-Enhanced Meditation Support</h2>
          <div className="ai-features-grid">
            <div className="feature">
              <h3>Personalized Guidance</h3>
              <p>AI-driven recommendations based on your meditation goals and experience level</p>
            </div>
            <div className="feature">
              <h3>Progress Tracking</h3>
              <p>Monitor your meditation journey with detailed insights and analytics</p>
            </div>
            <div className="feature">
              <h3>Adaptive Sessions</h3>
              <p>Sessions that adjust to your progress and current mental state</p>
            </div>
            <div className="feature">
              <h3>Community Support</h3>
              <p>Connect with fellow practitioners and share experiences</p>
            </div>
          </div>
        </div>

        <div className="meditation-resources">
          <h2>Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Reading Material</h3>
              <p>Access comprehensive articles and texts about:</p>
              <ul>
                <li>Maitreya's prophecy and significance</li>
                <li>Buddhist philosophy and traditions</li>
                <li>Historical context and interpretations</li>
                <li>Cultural perspectives on Maitreya</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Teachings = () => {
  return (
    <div className="teachings-page">
      <div className="teachings-hero">
        <h1>Buddhist Teachings</h1>
        <p className="hero-text">Ancient wisdom meets modern understanding through AI-enhanced learning</p>
      </div>

      <div className="teachings-sections">
        <div className="core-teachings">
          <h2>Core Buddhist Teachings</h2>
          <div className="teachings-grid">
            <div className="teaching-card">
              <h3>The Four Noble Truths</h3>
              <p>Understanding the nature of suffering and the path to liberation</p>
              <ul>
                <li>The Truth of Suffering</li>
                <li>The Origin of Suffering</li>
                <li>The Cessation of Suffering</li>
                <li>The Path to Liberation</li>
              </ul>
            </div>

            <div className="teaching-card">
              <h3>The Noble Eightfold Path</h3>
              <p>The Buddhist path to enlightenment</p>
              <ul>
                <li>Right View & Understanding</li>
                <li>Right Intention</li>
                <li>Right Speech & Action</li>
                <li>Right Livelihood & Effort</li>
              </ul>
            </div>

            <div className="teaching-card">
              <h3>Buddhist Philosophy</h3>
              <p>Essential concepts and principles</p>
              <ul>
                <li>Karma & Rebirth</li>
                <li>Impermanence</li>
                <li>Non-self</li>
                <li>Dependent Origination</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ai-learning-section">
          <h2>AI-Enhanced Learning Experience</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Interactive Lessons</h3>
              <p>Engage with teachings through AI-powered interactive sessions</p>
            </div>
            <div className="feature">
              <h3>Personalized Path</h3>
              <p>Receive customized learning recommendations based on your progress</p>
            </div>
            <div className="feature">
              <h3>Modern Context</h3>
              <p>Understand ancient teachings in contemporary situations</p>
            </div>
            <div className="feature">
              <h3>Q&A Support</h3>
              <p>Get answers to your questions through our AI teaching assistant</p>
            </div>
          </div>
        </div>

        <div className="study-material-section">
          <h2>Study Materials</h2>
          <div className="materials-grid">
            <div className="material-card">
              <h3>Sacred Texts</h3>
              <p>Ancient Buddhist texts and scriptures that contain prophecies and teachings about Maitreya Buddha</p>
            </div>
            <div className="material-card">
              <h3>Historical Documents</h3>
              <p>Historical records and documents describing the significance of Maitreya across different Buddhist traditions</p>
            </div>
            <div className="material-card">
              <h3>Cultural References</h3>
              <p>How different cultures and traditions have interpreted and preserved the prophecy of Maitreya</p>
            </div>
          </div>
        </div>

        <div className="learning-paths">
          <h2>Learning Paths</h2>
          <div className="paths-grid">
            <div className="path-card">
              <h3>Beginner's Path</h3>
              <p>Introduction to Buddhist concepts and basic practices</p>
              <ul>
                <li>Introduction to Buddhism</li>
                <li>Basic Meditation</li>
                <li>Buddhist Ethics</li>
                <li>Daily Practice Guide</li>
              </ul>
            </div>
            <div className="path-card">
              <h3>Intermediate Path</h3>
              <p>Deeper understanding of Buddhist philosophy and practices</p>
              <ul>
                <li>Advanced Buddhist Concepts</li>
                <li>Scriptural Studies</li>
                <li>Advanced Meditation</li>
                <li>Buddhist Psychology</li>
              </ul>
            </div>
            <div className="path-card">
              <h3>Advanced Path</h3>
              <p>In-depth study of Buddhist traditions and advanced practices</p>
              <ul>
                <li>Buddhist Traditions</li>
                <li>Advanced Philosophy</li>
                <li>Teaching Methods</li>
                <li>Spiritual Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  return (
    <div className="community-page">
      <div className="community-hero">
        <h1>Maitreya Community</h1>
        <p className="hero-text">A space for learning and discussing Maitreya's prophecy and teachings</p>
      </div>

      <div className="community-sections">
        <div className="community-grid">
          <div className="community-card">
            <h3>Story Discussion</h3>
            <p>Explore and discuss the prophecy of Maitreya Buddha</p>
            <ul>
              <li>Ancient prophecies and texts</li>
              <li>Historical significance</li>
              <li>Modern interpretations</li>
              <li>Cultural perspectives</li>
            </ul>
          </div>

          <div className="community-card">
            <h3>Learning Resources</h3>
            <p>Access materials about Maitreya's teachings</p>
            <ul>
              <li>Sacred texts and scriptures</li>
              <li>Scholarly articles</li>
              <li>Historical documents</li>
              <li>Research materials</li>
            </ul>
          </div>

          <div className="community-card">
            <h3>Knowledge Sharing</h3>
            <p>Share and learn from different perspectives</p>
            <ul>
              <li>Buddhist traditions</li>
              <li>Cultural insights</li>
              <li>Historical context</li>
              <li>Contemporary relevance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>Maitreya Story</h1>
        <p className="hero-text">Explore the rich narrative and teachings of Maitreya Buddha</p>
      </div>

      <div className="blog-sections">
        <div className="blog-grid">
          <div className="blog-card">
            <h3>The Origins of Maitreya Prophecy</h3>
            <p className="blog-excerpt">Discover the ancient texts and traditions that speak of Maitreya's coming...</p>
          </div>

          <div className="blog-card">
            <h3>Maitreya in Different Cultures</h3>
            <p className="blog-excerpt">How different Buddhist traditions and cultures view the prophecy of Maitreya...</p>
          </div>

          <div className="blog-card">
            <h3>The Message of Maitreya</h3>
            <p className="blog-excerpt">Understanding the core teachings and significance of Maitreya Buddha...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p className="hero-text">Find answers to common questions about Maitreya and Buddhism</p>
      </div>

      <div className="faq-sections">
        <div className="faq-grid">
          <div className="faq-card">
            <h3>About Maitreya</h3>
            <div className="faq-item">
              <h4>Who is Maitreya Buddha?</h4>
              <p>Maitreya is the future Buddha who will appear on Earth, according to Buddhist prophecy. The prophecy states that Maitreya will be a teacher of dharma and will bring renewed spiritual awakening.</p>
            </div>
            <div className="faq-item">
              <h4>What are Maitreya's teachings?</h4>
              <p>Maitreya's teachings focus on loving-kindness, compassion, and the path to enlightenment. The teachings emphasize spiritual development and the cultivation of wisdom.</p>
            </div>
          </div>

          <div className="faq-card">
            <h3>About the Story</h3>
            <div className="faq-item">
              <h4>What is the significance of Maitreya's prophecy?</h4>
              <p>The prophecy of Maitreya represents hope and spiritual renewal in Buddhist tradition, symbolizing the continuity of Buddhist teachings and the potential for universal enlightenment.</p>
            </div>
            <div className="faq-item">
              <h4>How can I learn more about Maitreya?</h4>
              <p>You can explore our website's sections on Teachings and Story Presentations to learn more about Maitreya's prophecy and significance in Buddhist tradition.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="events-page">
      <div className="events-hero">
        <h1>Story Presentations</h1>
        <p className="hero-text">Experience the story of Maitreya through various presentations and discussions</p>
      </div>

      <div className="events-sections">
        <div className="events-grid">
          <div className="event-card">
            <h3>The Prophecy of Maitreya</h3>
            <p className="event-description">A comprehensive presentation of the ancient prophecies about Maitreya Buddha and their significance</p>
          </div>

          <div className="event-card">
            <h3>Buddhist Philosophy</h3>
            <p className="event-description">Understanding the core Buddhist concepts and their relation to Maitreya's coming</p>
          </div>

          <div className="event-card">
            <h3>Historical Context</h3>
            <p className="event-description">Exploring the historical and cultural context of the Maitreya prophecy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-lore">About Lore</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/meditation">Meditation</Link></li>
          <li><Link to="/teachings">Teachings</Link></li>
        </ul>
      </div>
      
      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
      
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: info@maitreyaawakens.org</p>
        <p>Support: help@maitreyaawakens.org</p>
        <div className="social-links">
          <a href="https://www.facebook.com/groups/maitreyabuddha" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/MaitreyaDharma" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://discord.gg/maitreyasangha" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>&copy; 2024 MaitreyaAwakens. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/disclaimer">Disclaimer</Link>
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null, // use viewport as root
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Target all elements that need scroll animations
    const animatedElements = document.querySelectorAll(
      '.ai-features, .feature-list li, .gallery-item, .tech-item, .ai-dharma-item, .social-icon'
    );

    animatedElements.forEach(el => observer.observe(el));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-lore" element={<AboutLore />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/teachings" element={<Teachings />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

