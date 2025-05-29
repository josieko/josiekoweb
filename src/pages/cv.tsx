import { FileText } from "lucide-react";

export default function curriculumVitae() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-8 py-6">
        <div
          className="rounded-2xl p-4 mb-4"
          style={{
            background:
              "linear-gradient(135deg,rgb(113, 234, 168),rgb(38, 161, 46))",
          }}
        >
          <FileText className="h-12 w-12 text-white" />
        </div>
        <h1 className="!text-3xl font-bold text-white">Curriculum Vitae</h1>
        <p className="text-white/70 text-center mt-2">
          Professional experience, education, and skills
        </p>
      </div>

      <section className="mb-12">
        <div className="mb-10 text-left px-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white">
              Full Stack Developer
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-white/70 mb-2">
              <span className="font-medium">Qwikify</span>
              <span>•</span>
              <span>London, UK</span>
              <span>•</span>
              <span>2025-Present</span>
            </div>
          </div>
          {/* <ul className="list-disc pl-6 space-y-2 text-white/90">
            <li>
              Led team project using{" "}
              <span className="text-white font-medium">Jira</span> for agile
              management and{" "}
              <span className="text-white font-medium">Figma</span> for
              prototyping
            </li>
            <li>
              Built high-fidelity demo components using{" "}
              <span className="text-white font-medium">JavaScript</span>,{" "}
              <span className="text-white font-medium">CSS</span>, and{" "}
              <span className="text-white font-medium">HTML</span>
            </li>
            <li>
              Developed solutions for{" "}
              <span className="text-white font-medium">Python</span> programming
              challenges, demonstrating problem-solving skills
            </li>
            <li>
              Created optimized database schemas using{" "}
              <span className="text-white font-medium">SQL</span> and{" "}
              <span className="text-white font-medium">MySQL Workbench</span>
            </li>
          </ul> */}
        </div>
        <div className="mb-10 text-left px-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white">
              Full Stack Developer
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-white/70 mb-2">
              <span className="font-medium">Healstack</span>
              <span>•</span>
              <span>London, UK</span>
              <span>•</span>
              <span>2023-2025</span>
            </div>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-white/90">
            <li>
              Architected enterprise-level device registration system using{" "}
              <span className="text-white font-medium">AWS Amplify</span> and{" "}
              <span className="text-white font-medium">JWT authentication</span>
              , reducing registration time from 5 minutes to seconds
            </li>
            <li>
              Modernized legacy codebase with{" "}
              <span className="text-white font-medium">Redux</span> patterns,{" "}
              <span className="text-white font-medium">React Navigation</span>{" "}
              and <span className="text-white font-medium">Moment.js</span> for
              improved stability
            </li>
            <li>
              Created reusable UI component library with{" "}
              <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">React Native</span> and{" "}
              <span className="text-white font-medium">Storybook</span> to
              accelerate development
            </li>
            <li>
              Implemented automated healthcare data extraction using{" "}
              <span className="text-white font-medium">Puppeteer</span> for
              real-time clinical analysis
            </li>
            <li>
              Established <span className="text-white font-medium">Git</span>{" "}
              workflows and coding standards that enhanced code quality and
              expedited review processes
            </li>
          </ul>
        </div>

        <div className="mb-10 text-left px-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white">
              Frontend Developer & UX Designer
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-white/70 mb-2">
              <span className="font-medium">Healstack</span>
              <span>•</span>
              <span>London, UK</span>
              <span>•</span>
              <span>2021-2023</span>
            </div>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-white/90">
            <li>
              Gathered <span className="font-medium text-white">200+</span>{" "}
              detailed requirements through customer interviews for new loyalty
              app development
            </li>
            <li>
              Created user flows, wireframes and prototypes in collaboration
              with UX team
            </li>
            <li>
              Managed product backlogs with{" "}
              <span className="font-medium text-white">100+</span> user stories,
              creating clear development roadmaps
            </li>
            <li>
              Collaborated with stakeholders to align feature priorities with
              business objectives
            </li>
          </ul>
        </div>

        <div className="mb-10 text-left px-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white">
              Product Management Trainee
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-white/70 mb-2">
              <span className="font-medium">Code First Girls Bootcamp</span>
              <span>•</span>
              <span>London, UK</span>
              <span>•</span>
              <span>2021</span>
            </div>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-white/90">
            <li>
              Led team project using{" "}
              <span className="text-white font-medium">Jira</span> for agile
              management and{" "}
              <span className="text-white font-medium">Figma</span> for
              prototyping
            </li>
            <li>
              Built high-fidelity demo components using{" "}
              <span className="text-white font-medium">JavaScript</span>,{" "}
              <span className="text-white font-medium">CSS</span>, and{" "}
              <span className="text-white font-medium">HTML</span>
            </li>
            <li>
              Developed solutions for{" "}
              <span className="text-white font-medium">Python</span> programming
              challenges, demonstrating problem-solving skills
            </li>
            <li>
              Created optimized database schemas using{" "}
              <span className="text-white font-medium">SQL</span> and{" "}
              <span className="text-white font-medium">MySQL Workbench</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12 px-6">
        <h2 className="text-2xl font-semibold text-white text-left border-b-1 border-white pb-2 mb-6">
          Education & Certifications
        </h2>
        <ul className="list-disc text-left pl-6 space-y-3 text-white/90">
          <li className="transition-colors duration-200">
            Engineering Academy Certificate,{" "}
            <span className="font-medium">McKinsey & Company</span> (2023)
          </li>
          <li className="transition-colors duration-200">
            Product Academy Certificate,{" "}
            <span className="font-medium">McKinsey & Company</span> (2023)
          </li>
          <li className="transition-colors duration-200">
            Product Management Certificates,{" "}
            <span className="font-medium">Pendo x Mind the Product</span> (2023)
          </li>
          <li className="transition-colors duration-200">
            CFG Degree in Python, SQL, JavaScript and Product Management (2021)
          </li>
          <li className="transition-colors duration-200">
            BFA Journalism and Social Sciences,{" "}
            <span className="font-medium">Zagreb University</span> (2016-2019)
          </li>
        </ul>
      </section>
    </div>
  );
}
