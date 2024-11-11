import {
  FaClipboardList,
  FaBrain,
  FaBook,
  FaStepForward,
} from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to THYNKLY</h1>
        <p>
          Empowering Knowledge Management with Notes, Mind Maps, and Flashcards
        </p>
        <button className="cta-button">Get Started</button>
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
            "THYNKLY has transformed how I manage my knowledge. It's a must-have
            for anyone serious about learning!"
          </p>
          <cite>- Alex T.</cite>
        </blockquote>
      </section>

      {/* Final Call-to-Action */}
      <section className="get-started">
        <h2>Ready to Take Your Knowledge to the Next Level?</h2>
        <button className="cta-button">Explore Features</button>
      </section>
    </div>
  );
}

export default Home;
