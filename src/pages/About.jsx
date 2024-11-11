import { FaBullseye, FaLightbulb } from "react-icons/fa"; // Using icons for mission and vision
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* About Hero Section */}
      <section className="about-hero">
        <h1>About THYNKLY</h1>
        <p>
          Our mission is to make knowledge management simple, efficient, and
          accessible to everyone.
        </p>
      </section>

      <div className="about-content">
        {/* Mission Section */}
        <section className="mission">
          <div className="mission-header">
            <FaBullseye className="icon" /> {/* Mission icon */}
            <h2>Our Mission</h2>
          </div>
          <p>
            THYNKLY is dedicated to helping users organize their thoughts and
            improve learning retention with powerful tools like note-taking,
            mind mapping, and flashcard generation.
          </p>
        </section>

        {/* Vision Section */}
        <section className="vision">
          <div className="vision-header">
            <FaLightbulb className="icon" /> {/* Vision icon */}
            <h2>Our Vision</h2>
          </div>
          <p>
            We envision a future where managing knowledge is effortless and
            enhances personal growth, learning, and productivity.
          </p>
        </section>
      </div>

      {/* Additional Section (Optional) */}
      <section className="about-future">
        <h2>Our Future Goals</h2>
        <p>
          THYNKLY aims to continually evolve with cutting-edge features like
          artificial intelligence-driven insights, seamless collaboration tools,
          and an intuitive user experience that adapts to your personal learning
          style.
        </p>
      </section>
    </div>
  );
}

export default About;
