import {
  FaPenFancy,
  FaBrain,
  FaBook,
  FaRobot,
  FaSyncAlt,
  FaChartLine,
  FaLink,
  FaChalkboardTeacher,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaEdit,
  FaCode,
  FaLanguage,
  FaLaptopCode,
  FaPalette,
  FaClipboardCheck,
} from "react-icons/fa";
import "./Features.css";

function Features() {
  return (
    <div className="features-container">
      <section className="features-hero">
        <h1>Explore Our Features</h1>
        <p>
          THYNKLY offers an extensive suite of tools designed to enhance your
          knowledge management, learning, and development experience. Discover
          everything we have to offer.
        </p>
      </section>

      <section className="features-list">
        <div className="feature-item">
          <FaPenFancy className="feature-icon" />
          <h3>Note-Taking & Linking</h3>
          <p>
            Capture detailed notes with ease and link related concepts to create
            a cohesive knowledge base that evolves with your learning journey.
          </p>
        </div>

        <div className="feature-item">
          <FaBrain className="feature-icon" />
          <h3>Interactive Mind Mapping</h3>
          <p>
            Visualize ideas and relationships through mind maps that adapt and
            expand as you deepen your understanding.
          </p>
        </div>

        <div className="feature-item">
          <FaBook className="feature-icon" />
          <h3>Flashcard Generation</h3>
          <p>
            Instantly convert your notes into flashcards, helping you retain
            knowledge more effectively with spaced repetition.
          </p>
        </div>

        <div className="feature-item">
          <FaRobot className="feature-icon" />
          <h3>AI-Driven Insights</h3>
          <p>
            Leverage AI to identify connections, suggest improvements, and
            provide insights tailored to your learning style and goals.
          </p>
        </div>

        <div className="feature-item">
          <FaCode className="feature-icon" />
          <h3>Code Execution Cells</h3>
          <p>
            Run code directly within your notes, supporting multiple programming
            languages, making it easy to test ideas and document coding
            workflows.
          </p>
        </div>

        <div className="feature-item">
          <FaLanguage className="feature-icon" />
          <h3>Multi-Language & LaTeX Support</h3>
          <p>
            Use LaTeX for mathematical notation, and enjoy multi-language
            support for scientific, mathematical, and technical documentation.
          </p>
        </div>

        <div className="feature-item">
          <FaPalette className="feature-icon" />
          <h3>Advanced Note Customization</h3>
          <p>
            Customize your notes with templates, layouts, and formatting options
            to create an interface that best suits your style and needs.
          </p>
        </div>

        <div className="feature-item">
          <FaSyncAlt className="feature-icon" />
          <h3>Data Synchronization</h3>
          <p>
            Access your notes, mind maps, and flashcards across all your devices
            seamlessly with real-time data sync.
          </p>
        </div>

        <div className="feature-item">
          <FaChartLine className="feature-icon" />
          <h3>Progress Tracking</h3>
          <p>
            Measure your progress with detailed analytics, tracking your
            engagement and knowledge growth over time.
          </p>
        </div>

        <div className="feature-item">
          <FaLink className="feature-icon" />
          <h3>Knowledge Linking</h3>
          <p>
            Link related notes to establish a comprehensive knowledge web,
            enabling deeper insights and contextual understanding.
          </p>
        </div>

        <div className="feature-item">
          <FaClipboardCheck className="feature-icon" />
          <h3>Customization & Templates</h3>
          <p>
            Customize the layout, choose from mind map templates, and
            personalize flashcards to suit your learning preferences.
          </p>
        </div>

        <div className="feature-item">
          <FaCloudUploadAlt className="feature-icon" />
          <h3>Cloud Storage & Backup</h3>
          <p>
            Store your data securely in the cloud, ensuring your notes are
            backed up and accessible from anywhere.
          </p>
        </div>

        <div className="feature-item">
          <FaShieldAlt className="feature-icon" />
          <h3>Data Privacy & Security</h3>
          <p>
            Your data is protected with industry-standard encryption and secure
            handling practices, ensuring privacy and safety.
          </p>
        </div>

        <div className="feature-item">
          <FaEdit className="feature-icon" />
          <h3>Collaborative Editing</h3>
          <p>
            Collaborate with others by sharing and editing notes in real-time,
            promoting teamwork and shared knowledge.
          </p>
        </div>

        <div className="feature-item">
          <FaLaptopCode className="feature-icon" />
          <h3>Multi-Platform Compatibility</h3>
          <p>
            THYNKLY is designed to work seamlessly across Windows, macOS, and
            Linux, ensuring performance and compatibility.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Features;
