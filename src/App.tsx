import { useState, useEffect } from "react";
import aboutHome from "./pages/home";
import postsHome from "./pages/postsHome";
import curriculumVitae from "./pages/cv";
import Contact from "./pages/contact";
import LoadingScreen from "./components/LoadingScreen";
import NavItem from "./components/navItem";
import {
  FileText,
  Github,
  Linkedin,
  Link,
  ChevronRight,
  Play,
  Pause,
  FastForward,
  Mail,
} from "lucide-react";
import profileImage from "./assets/josie.png";
import backgroundImage from "./assets/background.jpg";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  }, []);

  const navItems = [
    {
      name: "CV",
      color: "linear-gradient(135deg,rgb(113, 234, 168),rgb(38, 161, 46))",
      icon: FileText,
      iconRight: ChevronRight,
      rightIconColor: "white",
      url: undefined,
      isActive: currentPage === "cv",
      onClick: () => setCurrentPage("cv"),
    },
    {
      name: "Mail",
      color: "linear-gradient(135deg,rgb(247, 171, 124),rgb(222, 126, 67))",
      icon: Mail,
      iconRight: ChevronRight,
      rightIconColor: "white",
      url: undefined,
      isActive: currentPage === "contact",
      onClick: () => setCurrentPage("contact"),
    },
    // {
    //   name: "Posts",
    //   color: "linear-gradient(135deg,rgb(246, 168, 59), #ff5e3a)",
    //   icon: BookOpen,
    //   iconRight: ChevronRight,
    //   rightIconColor: "white",
    //   url: undefined,
    //   isActive: currentPage === "posts",
    //   onClick: () => setCurrentPage("posts"),
    // },
  ];

  const navLinks = [
    {
      name: "GitHub",
      color: "linear-gradient(135deg,rgb(206, 123, 242),rgb(150, 47, 218))",
      icon: Github,
      iconRight: Link,
      rightIconColor: "white",
      url: "https://github.com/josieko",
      isActive: false,
    },
    {
      name: "LinkedIn",
      color: "linear-gradient(135deg,rgb(115, 153, 250),rgb(8, 59, 191))",
      icon: Linkedin,
      iconRight: Link,
      rightIconColor: "white",
      url: "https://www.linkedin.com/in/jojosieko",
      isActive: false,
    },
  ];

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <div className="mac-window">
          <div className="window-content">
            <div className="sidebar">
              <div
                className="window-controls"
                onClick={() => alert("Music feature coming soon! 🎧")}
              >
                <div className="control close">
                  <Pause size={8} className="control-icon" fill="#69120A" />
                </div>
                <div className="control minimize">
                  <FastForward size={8} className="control-icon" fill="#8E591D" />
                </div>
                <div className="control maximize">
                  <Play size={8} className="control-icon" fill="#004D00" />
                </div>
              </div>
              <div>
                <p className="text-3xl color-white font-bold text-left ml-3 pb-2 welcome-title">
                  Welcome
                </p>
              </div>
              <div
                className={`profile ${currentPage === "about" ? "active" : ""}`}
                onClick={() => setCurrentPage("about")}
              >
                <div
                  className="profile-icon"
                  style={{ backgroundImage: `url(${profileImage})` }}
                ></div>
                <div className="flex flex-col items-start">
                  <h4 className="text-white text-md font-medium">Josie Ko</h4>
                  <p className="text-xs text-white/60 font-medium">
                    Fullstack Developer
                  </p>
                </div>
              </div>
              <nav className="nav-links flex flex-col px-2 mt-4">
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    name={item.name}
                    color={item.color}
                    icon={item.icon}
                    rightIcon={item.iconRight}
                    rightIconColor={item.rightIconColor}
                    url={item.url}
                    isActive={item.isActive}
                    onClick={item.onClick}
                  />
                ))}
              </nav>
              <nav className="nav-links flex flex-col px-2 mt-4">
                {navLinks.map((item, index) => (
                  <NavItem
                    key={index}
                    name={item.name}
                    color={item.color}
                    icon={item.icon}
                    rightIcon={item.iconRight}
                    rightIconColor={item.rightIconColor}
                    url={item.url}
                    isActive={item.isActive}
                  />
                ))}
              </nav>
            </div>

            <div className="content-area">
              <div className="content-body">
                {currentPage === "about" && aboutHome({ setCurrentPage })}
                {currentPage === "posts" && postsHome()}
                {currentPage === "cv" && curriculumVitae()}
                {currentPage === "contact" && (
                  <Contact setCurrentPage={setCurrentPage} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
