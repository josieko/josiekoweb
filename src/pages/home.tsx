export default function aboutHome() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col p-6 gap-1 items-center border border-gray-200 rounded-lg">
        <img
          src="josie.png"
          alt="Josie Ko"
          className="w-24 h-24 rounded-full"
        />
        <p className="text-2xl font-bold">Hi, I'm Josie</p>
        <p className="text-md">Developer, design enthusiast, matcha lover.</p>
      </div>
      <div className="text-md">
        <p>
          I'm a proactive full stack developer based in London. I love working
          with JavaScript, Node.js, and React to build web and mobile
          applications. Recently, I've been diving into Python to generate and
          process large datasets for cross-platform testing. I have a knack for
          modernizing React applications, making code more reusable, stable, and
          performant. When I'm not writing comprehensive test suites with Jest,
          Cypress, or Detox, I'm looking for ways to expand my backend skills.
          I've worked across diverse industries from healthcare to B2B
          platforms, and I'm always excited to tackle new challenges.
        </p>
        <p>Let's have a chat 🍵</p>
      </div>
    </div>
  );
}
