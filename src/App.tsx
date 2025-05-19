import { useState, useEffect } from "react";
import aboutHome from "./pages/home";
import NavItem from "./components/navItem";
import {
  FileText,
  Github,
  Linkedin,
  Link,
  Play,
  Pause,
  FastForward,
  Mail,
} from "lucide-react";
import profileImage from "./assets/josie.webp";
import backgroundImage from "./assets/background.webp";
import MobileNavItem from "./components/mobile/mobileNavItem";
import "./App.css";
import MobileAboutHome from "./components/mobile/mobileAboutHome";
import Contact from "./pages/contact";
import CurriculumVitae from "./pages/cv";

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      name: "CV",
      icon: FileText,
      color: "linear-gradient(135deg,rgb(113, 234, 168),rgb(38, 161, 46))",
      isActive: currentPage === "cv",
      onClick: () => setCurrentPage("cv"),
      children: <CurriculumVitae />,
    },
    {
      name: "Mail",
      icon: Mail,
      color: "linear-gradient(135deg,rgb(247, 171, 124),rgb(222, 126, 67))",
      isActive: currentPage === "contact",
      onClick: () => setCurrentPage("contact"),
      children: <Contact setCurrentPage={setCurrentPage} />,
    },
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
            {isMobile && (
              <div>
                <h2 className="welcome-text">Welcome</h2>
              </div>
            )}
            {isMobile ? (
              <div className="mobile-profile">
                <MobileAboutHome setCurrentPage={setCurrentPage} />
              </div>
            ) : (
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
            )}
            <nav className="nav-links flex flex-col px-2 mt-4">
              {navItems.map((item, index) =>
                isMobile ? (
                  <div key={index}>
                    <MobileNavItem
                      name={item.name}
                      color={item.color}
                      icon={item.icon}
                      children={item.children}
                    />
                  </div>
                ) : (
                  <NavItem
                    key={index}
                    name={item.name}
                    color={item.color}
                    icon={item.icon}
                    isActive={item.isActive}
                    onClick={item.onClick}
                  />
                )
              )}
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

          {!isMobile && (
            <div className="content-area">
              <div className="content-body">
                {currentPage === "about" && aboutHome({ setCurrentPage })}
                {currentPage === "cv" && <CurriculumVitae />}
                {currentPage === "contact" && (
                  <Contact setCurrentPage={setCurrentPage} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
