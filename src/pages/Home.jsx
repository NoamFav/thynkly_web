import {
  FaClipboardList,
  FaBrain,
  FaBook,
  FaStepForward,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to THYNKLY</h1>
        <p>
          Empowering Knowledge Management with Notes, Mind Maps, and Flashcards.{" "}
          <br />
          Application in development, keep an eye out for updates!
        </p>
        <button className="cta-button">Coming soon</button>
      </section>

      {/* Key Features Preview */}
      <section className="key-features">
        <h2>Key Features</h2>
        <div className="features-list-home">
          <div className="feature">
            <FaClipboardList className="feature-icon" />
            <h3>Note-Taking</h3>
            <p>
              Organize and link your notes easily to keep all your ideas
              connected.
            </p>
          </div>
          <div className="feature">
            <FaBrain className="feature-icon" />
            <h3>Mind Mapping</h3>
            <p>Visualize ideas and relationships with interactive mind maps.</p>
          </div>
          <div className="feature">
            <FaBook className="feature-icon" />
            <h3>Flashcards</h3>
            <p>
              Automatically create flashcards to improve learning and retention.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <FaStepForward className="step-icon" />
            <h3>Step 1</h3>
            <p>
              Start by creating notes and linking related concepts together.
            </p>
          </div>
          <div className="step">
            <FaStepForward className="step-icon" />
            <h3>Step 2</h3>
            <p>
              Generate mind maps to get a visual overview of your knowledge
              base.
            </p>
          </div>
          <div className="step">
            <FaStepForward className="step-icon" />
            <h3>Step 3</h3>
            <p>
              Use flashcards for efficient review and retention of important
              topics.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          <p>
            &quot;THYNKLY has transformed how I manage my knowledge. The
            intuitive tools make learning and organizing ideas incredibly
            efficient!&quot;
          </p>
          <cite>- Alex T.</cite>
        </blockquote>
        <blockquote>
          <p>
            &quot;With THYNKLY’s mind mapping and flashcards, I&apos;ve mastered
            complex topics faster than ever. A game-changer for serious
            learners!&quot;
          </p>
          <cite>- Jamie L.</cite>
        </blockquote>
      </section>

      {/* Final Call-to-Action */}
      <section className="get-started">
        <h2>Ready to Take Your Knowledge to the Next Level?</h2>
        <Link to="/features" className="cta-button">
          Explore Features
        </Link>
      </section>
    </div>
  );
}

export default Home;
