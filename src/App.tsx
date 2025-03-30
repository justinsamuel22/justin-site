import { FaBug, FaFile, FaGithub, FaLinkedin, FaMapPin, FaShield } from 'react-icons/fa6';
import './App.css';

function App() {
  return (
    <div>
      <div className="flex flex-row items-center gap-10">
        <img
          src="/img/me.png"
          alt="Image of justin"
          className="rounded-full w-48 h-48 mx-auto mt-10 mb-5 select-none pointer-events-none"
        />
        <div className="flex flex-col text-left">
          <h1 className="tracking-tighter font-extrabold mb-1">Justin Samuel</h1>
          <h2 className="tracking-tight font-medium flex gap-2 items-center">
            <FaBug />
            Vulnerability Analyst @ Virgin Money
          </h2>
          <h2 className="tracking-tight font-medium flex gap-2 items-center">
            <FaShield />
            Aspiring DevSecOps Engineer
          </h2>
          <h2 className="tracking-tight font-medium flex gap-2 items-center">
            <FaMapPin />
            Based in Newcastle, UK
          </h2>
          <div className="mt-3 flex gap-5">
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
    </div>
  );
}

export default App;
