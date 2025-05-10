import { useState } from "react";
import aboutHome from "./pages/home";
import postsHome from "./pages/postsHome";
import curriculumVitae from "./pages/cv";
import NavItem from "./components/navItem";
import { FileText, Github, Linkedin } from "lucide-react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  // Define navigation items in a structured way
  const navItems = [
    {
      name: "CV",
      color: "linear-gradient(135deg,rgb(113, 234, 168),rgb(38, 161, 46))",
      icon: FileText,
      url: undefined,
      isActive: currentPage === "cv",
      onClick: () => setCurrentPage("cv"),
    },
    // {
    //   name: "Posts",
    //   color: "linear-gradient(135deg,rgb(246, 168, 59), #ff5e3a)",
    //   icon: BookOpen,
    //   url: undefined,
    //   isActive: currentPage === "posts",
    //   onClick: () => setCurrentPage("posts"),
    // },
    {
      name: "GitHub",
      color: "linear-gradient(135deg,rgb(206, 123, 242),rgb(150, 47, 218))",
      icon: Github,
      url: "https://github.com/josieko",
      isActive: false,
    },
    {
      name: "LinkedIn",
      color: "linear-gradient(135deg,rgb(115, 153, 250),rgb(8, 59, 191))",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jojosieko",
      isActive: false,
    },
    // {
    //   name: "Email",
    //   color: "linear-gradient(135deg,rgb(224, 176, 45),rgb(194, 144, 8))",
    //   icon: Mail,
    //   url: "mailto:josieko@gmail.com",
    //   isActive: false,
    // },
  ];

  return (
    <div className="mac-window">
      <div className="window-content">
        <div className="sidebar">
          <div className="window-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
          <div
            className={`profile ${currentPage === "about" ? "active" : ""}`}
            onClick={() => setCurrentPage("about")}
          >
            <div className="profile-icon"></div>
            <div className="flex flex-col items-start">
              <h4 className="text-white text-md font-medium">Josie Ko</h4>
              <p className="text-xs text-white font-medium">
                Fullstack Developer
              </p>
            </div>
          </div>
          <nav className="nav-links flex flex-col px-2">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                name={item.name}
                color={item.color}
                icon={item.icon}
                url={item.url}
                isActive={item.isActive}
                onClick={item.onClick}
              />
            ))}
          </nav>
        </div>

        <div className="content-area">
          <div className="content-body">
            {currentPage === "about" && aboutHome()}
            {currentPage === "posts" && postsHome()}
            {currentPage === "cv" && curriculumVitae()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
