import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰ {/* Hamburger icon */}
      </button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>THYNKLY</h2>
        <nav>
          <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/features" onClick={toggleSidebar}>
            Features
          </Link>
          <Link to="/about" onClick={toggleSidebar}>
            About
          </Link>
          <Link to="/contact" onClick={toggleSidebar}>
            Contact
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
