import { FaBullseye, FaLightbulb, FaForward } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* About Hero Section */}
      <section className="about-hero">
        <h1>About THYNKLY</h1>
        <p>
          At THYNKLY, we’re passionate about empowering individuals to manage
          and grow their knowledge in a way that’s effective, intuitive, and
          sustainable.
        </p>
      </section>

      <div className="about-content">
        {/* Mission Section */}
        <section className="mission">
          <div className="mission-header">
            <FaBullseye className="icon" />
            <h2>Our Mission</h2>
          </div>
          <p>
            Our mission is to provide powerful tools that help users organize
            ideas, connect concepts, and retain knowledge. We aim to make
            complex learning accessible, effective, and engaging.
          </p>
        </section>

        {/* Vision Section */}
        <section className="vision">
          <div className="vision-header">
            <FaLightbulb className="icon" />
            <h2>Our Vision</h2>
          </div>
          <p>
            We envision a world where everyone has the tools to master complex
            knowledge effortlessly. THYNKLY aims to foster a culture of
            continuous learning, personal growth, and curiosity.
          </p>
        </section>

        {/* Future Goals Section */}
        <section className="about-future">
          <div className="future-header">
            <FaForward className="icon" />
            <h2>Our Future Goals</h2>
          </div>
          <p>
            Looking ahead, THYNKLY plans to enhance its features with advanced
            AI-driven insights, collaborative tools, and an even more
            personalized experience that adapts to each user’s unique learning
            style. We’re committed to continuously evolving to meet the needs of
            lifelong learners.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
