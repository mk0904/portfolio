import { FaFilePdf, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import './Body.css';

const Body = () => {
  return (
    <div className="body">
     <div className="text-container">
          <h1>hi!! I&apos;m <span>Manish Kumar</span></h1>
          <h3>A Frontend Developer</h3>
     </div>
      <div className="button-container">
        <a href="/path-to-your-cv.pdf" target="_blank" className="button">
          <FaFilePdf className="icon" />
          CV
        </a>
        <a href="https://github.com/your-github-username" target="_blank" className="button">
          <FaGithub className="icon" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" className="button">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
        <a href="https://leetcode.com/your-leetcode-profile" target="_blank" className="button">
          <FaCode className="icon" />
          LeetCode
        </a>
      </div>
    </div>
  );
}

export default Body;
