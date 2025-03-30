import { FaBug, FaFile, FaGithub, FaLinkedin, FaMapPin, FaShield } from 'react-icons/fa6';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <img
          src="/img/me.png"
          alt="Image of justin"
          className="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto mt-4 md:mt-10 mb-5 select-none pointer-events-none"
        />
        <div className="flex flex-col text-center md:text-left">
          <h1 className="tracking-tighter font-extrabold mb-1">Justin Samuel</h1>
          <h2 className="tracking-tight font-medium flex gap-2 items-center justify-center md:justify-start">
            <FaBug />
            Vulnerability Analyst @ Virgin Money
          </h2>
          <h2 className="tracking-tight font-medium flex gap-2 items-center justify-center md:justify-start">
            <FaShield />
            Aspiring DevSecOps Engineer
          </h2>
          <h2 className="tracking-tight font-medium flex gap-2 items-center justify-center md:justify-start">
            <FaMapPin />
            Based in Newcastle, UK
          </h2>
          <div className="mt-3 flex gap-5 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/justin-samuel-85894a228/"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="docs/justin-samuel-cv.pdf"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <FaFile />
              CV / Resume
            </a>
            <a
              href="https://github.com/justinsamuel22"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="text-left w-full md:w-1/2 justify-center flex flex-col mx-auto mt-4 px-4 md:px-8 space-y-4">
        <p>
          I am a Vulnerability Analyst in the final year of my degree apprenticeship, with
          experience in vulnerability management and application security. At Virgin Money, I work
          with tools like Qualys for vulnerability scanning, and SonarQube and Sonatype IQ Server
          for application security testing and software composition analysis. My focus is on
          identifying and analysing security vulnerabilities in software and systems to enhance
          organisational security posture.
        </p>
        <p>
          With a strong foundation in cybersecurity fundamentals and hands-on experience with modern
          security tools, I&apos;m passionate about staying up-to-date with the latest security
          trends and technologies. I&apos;m also interested in DevSecOps practices and integrating
          security into the development lifecycle.
        </p>
        <p>
          I hold a CompTIA Security+ certification and am currently pursuing AWS and Azure
          certifications to expand my knowledge and skills in cloud security. I was recently
          featured in Virgin Money&apos;s{' '}
          <a
            href="https://www.linkedin.com/posts/justin-samuel-85894a228_say-hello-to-justin-activity-7222207162255638529-RZHB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkXuEQBpUYo-d_5tL6S3ykGhfXkU9-w8mg"
            target="_blank"
            className="text-black hover:text-neutral-800 hover:font-medium duration-300 ease-in-out transition-all underline"
          >
            &quot;A Life More Virgin&quot; short video
          </a>
          , where I shared my experience with the company&apos;s work-life balance philosophy and
          how it enables me to maintain a healthy balance between professional growth and personal
          life.
        </p>
      </div>
    </div>
  );
}

export default App;
