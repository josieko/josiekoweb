import josieImage from "../assets/josie.png";
import Mailto from "../components/Mailto";

export default function aboutHome() {
  const mailing = false;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col p-6 gap-1 items-center rounded-lg mobile-home-header">
        <img
          src={josieImage}
          alt="Josie Ko"
          className="w-24 h-24 rounded-full"
        />
        <p className="text-2xl font-bold">Hi, I'm Josie</p>
        <p className="text-md">Developer, design enthusiast, matcha lover.</p>
      </div>
      <div className="text-md rounded-lg px-6 text-left">
        <p>
          I'm a Full Stack Developer based in London. I love working with
          JavaScript, Node.js, and React to build web and mobile applications.
        </p>
        <p>
          Recently, I've been diving into Python to generate and process large
          datasets for cross-platform testing.
        </p>
        <p>
          I have a knack for modernizing React applications, making code more
          reusable, stable, and performant.
        </p>
        <p>
          When not writing comprehensive test suites with Jest, Cypress, or
          Detox, I'm looking for ways to expand my backend skills. I've worked
          across diverse industries from healthcare to B2B platforms, and I'm
          always excited to tackle new challenges.
        </p>
        <p className="text-md py-4">Let's have a chat 🍵</p>
        {mailing && (
          <Mailto
            email="josie@kuelabs.co"
            subject="Here for a chat 🍵"
            className="text-md py-4 cursor-pointer font-bold inline-block transition-all duration-200 hover:scale-110 text-white hover:text-[#E8A37C] origin-left"
          >
            Let's have a chat 🍵
          </Mailto>
        )}
      </div>
    </div>
  );
}
