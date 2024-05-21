/* eslint-disable react/prop-types */
import './Project.css';
const Project = ({ title,description,imageUrl, codeLink, siteLink }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={imageUrl} />
      <div>
      
        <div className="buttons">
        <h3>{title}</h3>
      <p>{description}</p>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="code-button">
            View Code
          </a>
          <a href={siteLink} target="_blank" rel="noopener noreferrer" className="site-button">
            Hosted Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
