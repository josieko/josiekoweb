import josieImage from "../../assets/josie.png";
import profileImage from "../../assets/josie.png"; // Add this import
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { useState } from "react"; // Add this import

export default function MobileAboutHome({
  setCurrentPage,
}: {
  setCurrentPage?: (page: string) => void;
}) {
  const [currentPage, setCurrentPageLocal] = useState("about");
  const handlePageChange = (page: string) => {
    setCurrentPageLocal(page);
    setCurrentPage?.(page);
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="about ">
        <AccordionTrigger className="mobile-nav-home !border-none">
          <div
            className={`profile ${currentPage === "about" ? "active" : ""}`}
            onClick={() => handlePageChange("about")}
          >
            <div
              className="profile-icon"
              style={{ backgroundImage: `url(${profileImage})` }}
            ></div>
            <div className="flex flex-col items-start">
              <p className="text-white text-[20px] font-semibold">Josie Ko</p>
              <p className="text-xs text-white/60 font-normal -mt-0.8 tracking-[0.01em]">
                Fullstack Developer
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="mobile-nav-content">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col p-6 gap-1 items-center rounded-lg mobile-home-header text-white">
              <img
                src={josieImage}
                alt="Josie Ko"
                className="w-24 h-24 rounded-full"
              />
              <p className="text-2xl font-bold">Hi, I'm Josie</p>
              <p className="text-md">
                Developer, design enthusiast, matcha lover.
              </p>
            </div>
            <div className="text-md text-white rounded-lg px-[15px] text-left">
              <p>
                I'm a Full Stack Developer based in London. I love working with
                JavaScript, Node.js, and React to build web and mobile
                applications.
              </p>
              <p>
                Recently, I've been diving into Python to generate and process
                large datasets for cross-platform testing.
              </p>
              <p>
                I have a knack for modernizing React applications, making code
                more reusable, stable, and performant.
              </p>
              <p>
                When not writing comprehensive test suites with Jest, Cypress,
                or Detox, I'm looking for ways to expand my backend skills. I've
                worked across diverse industries from healthcare to B2B
                platforms, and I'm always excited to tackle new challenges.
              </p>
              <span className="text-md py-4 cursor-pointer font-medium inline-block transition-all duration-100 hover:scale-110 text-white origin-left">
                Let's have a chat 🍵
              </span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
