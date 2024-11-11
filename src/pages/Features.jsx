import { FaBookOpen, FaBrain, FaClipboardList, FaRobot } from "react-icons/fa";
import "./Features.css";

function Features() {
  return (
    <div className="features-container">
      {/* Features Hero Section */}
      <section className="features-hero">
        <h1>Explore Our Features</h1>
        <p>
          Discover the powerful tools THYNKLY offers to help you manage and
          enhance your knowledge.
        </p>
      </section>

      {/* Features List Section */}
      <section className="features-list">
        <div className="feature-item">
          <div className="feature-icon">
            <FaClipboardList />
          </div>
          <h3>Note-Taking & Linking</h3>
          <p>
            Organize your thoughts, link related notes, and keep everything
            connected.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <FaBrain />
          </div>
          <h3>Interactive Mind Mapping</h3>
          <p>
            Create mind maps to visualize your ideas and understand
            relationships between them.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <FaBookOpen />
          </div>
          <h3>Flashcard Generation</h3>
          <p>
            Automatically generate flashcards from your notes for effective
            studying.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <FaRobot />
          </div>
          <h3>AI-Driven Insights</h3>
          <p>
            Receive suggestions and insights to improve your learning and
            retention.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Features;
