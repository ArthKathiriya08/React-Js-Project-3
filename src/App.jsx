import "./App.css";

// App entry component
// This portfolio page is built from multiple reusable sections.
// Header/navigation section
function Header() {
  return (
    <header className="header">
      <h2>Portfolio</h2>

      <nav>
        {/* Quick navigation links */}
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// Hero/banner section
function Slider() {
  return (
    <section className="slider" id="home">
      {/* Intro banner and personal highlight */}
      <div className="slider-text">
        <p>Hello, I am a Web Developer</p>

        <h1>
          Creative
          <br />
          <span>by nature.</span>
        </h1>

        <p className="description">
          I enjoy creating simple and beautiful websites using React JS and
          modern web technologies.
        </p>

        <a href="#work" className="slider-btn">
          Explore My Work →
        </a>
      </div>

      <div className="slider-image">
        {/* Social-profile cards */}
        <div className="box-1">
          <a
            href="https://www.linkedin.com/in/arth-kathiriya-566025389"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <i className="fa-brands fa-square-linkedin" aria-hidden="true"></i>
          </a>
        </div>

        <div className="box-2">
          <a
            href="https://github.com/ArthKathiriya08"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <i className="fa-brands fa-square-github" aria-hidden="true"></i>
          </a>
        </div>

        <div className="box-3">
          <div className="inner-box1">I,M A</div>
          <div className="inner-box2">ARTH</div>
          <div className="inner-box3">KATHIRIYA</div>
        </div>

        <div className="box-4">
          <a
            href="https://www.instagram.com/arth_kathiriya/?hl=en"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram profile"
          >
            <i className="fa-brands fa-square-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

// Recent projects section
function Work() {
  return (
    <section className="work" id="work">
      <div className="work-heading">
        <p>MY RECENT PROJECTS</p>
        <h2>
          Selected <span>Work.</span>
        </h2>
        <p className="work-subtitle">
          Projects I have built using modern web technologies.
        </p>
      </div>

      <div className="work-container">
        {/* Project 1*/}
        <div className="work-card">
          <div className="work-img purple">
            <span>01</span>
            <span className="project-tag">WEB APP</span>
          </div>

          <div className="work-card-content">
            <h3>Leave Application</h3>
            <p>
              A web application for submitting and managing leave requests
              online.
            </p>

            <a
              className="project-link"
              href="https://leave-application-l699.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <span>↗</span>
            </a>
          </div>
        </div>

        {/* Project 2*/}
        <div className="work-card">
          <div className="work-img blue">
            <span>02</span>
            <span className="project-tag">WEB APP</span>
          </div>

          <div className="work-card-content">
            <h3>Artho Meet</h3>
            <p>
              A web project with a user authentication page. Explore the
              application online.
            </p>

            <a
              className="project-link"
              href="https://artho-meet.vercel.app/user-auth"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <span>↗</span>
            </a>
          </div>
        </div>

        {/* Project 3*/}
        <div className="work-card">
          <div className="work-img yellow">
            <span>03</span>
            <span className="project-tag">AI PROJECT</span>
          </div>

          <div className="work-card-content">
            <h3>ARTHO AI</h3>
            <p>
              Explore my AI project source code and development files on GitHub.
            </p>

            <a
              className="project-link"
              href="https://github.com/ArthKathiriya08/ARTHO_AI"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact form section
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <p>HAVE A PROJECT IN MIND?</p>
        <h2>
          Let's make
          <br />
          <span>it happen.</span>
        </h2>
        <p>Have a question or an idea? Send me a message.</p>
      </div>

      <form className="contact-form">
        {/* Contact form fields */}
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          placeholder="Write your message"
          rows="4"
          required
        />

        <button type="submit">Send Message ↗</button>
      </form>
    </section>
  );
}

// Footer area
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        {/* Brand identity */}
        <h3>
          My Portfolio<span>.</span>
        </h3>
        <p>Building ideas into reality.</p>
      </div>

      <div className="footer-socials">
        {/* Social links */}
        <a
          href="https://www.instagram.com/arth_kathiriya/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Instagram  <span>↗</span>
        </a>

        <a
          href="https://github.com/ArthKathiriya08"
          target="_blank"
          rel="noreferrer"
        >
          GitHub  <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/arth-kathiriya-566025389"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn  <span>↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        {/* Footer bottom row */}
        <p>© {new Date().getFullYear()} Arth Kathiriya</p>
        <a href="#home">Back to Top  <span>↗</span> </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      {/* Main page layout */}
      <Header />
      <Slider />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
