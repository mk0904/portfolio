import Project from "../project/Project"; // Assuming Project component is in the correct path
import "./Projects.css";
import image1 from "../../assets/Screenshot 2024-05-21 at 19.08.28.png";
import image2 from "../../assets/Screenshot 2024-05-21 at 19.45.51.png";
import image3 from "../../assets/Screenshot 2024-05-21 at 19.07.03.png";
import image4 from "../../assets/Screenshot 2024-05-21 at 19.53.29.png";
import image5 from "../../assets/Screenshot 2024-05-21 at 21.16.44.png";

function Projects() {
  const arrOfProjects = [
    {
      image: image1,
      title: "Inventoriser",
      description: "An invetory managing app, that scans QR code and makes it efficient to store the items in the inventory.",
      codeLink: "https://github.com/mk0904/inventoriser",
      siteLink: "https://inventoriser.netlify.app",
    },
    {
      image: image2,
      title: "theMagicDict",
      description: "theMagicDict a minimalist yet elegant webapp designed to deliver the meaning of every possible word.",
      codeLink: "https://github.com/mk0904/theMagicDict",
      siteLink: "https://themagicdict.netlify.app",
    },
    {
      image: image3,
      title: "Dine Restro",
      description: "Experience exquisite dining at Restro Dine, where every meal is a culinary delight. Reserve your table now for an unforgettable dining experience!",
      codeLink: "https://github.com/mk0904/dine",
      siteLink: "https://dinewebrestro.netlify.app",
    },
    {
      image: image4,
      title: "thinkyfy",
      description: "A platform where ideas connect...! Share your thoughts, ideas, and get feedback from the community. Waiting for you to join it...",
      codeLink: "https://github.com/mk0904/thinkyfy",
      siteLink: "https://thinkyfy.vercel.app/",
    },
    {
      image: image5,
      title: "3069 game",
      description: "A game similar to 2048, but with a twist of 6 x 6 grid.",
      codeLink: "https://github.com/mk0904/3069",
      siteLink: "https://3069.netlify.app/",
    }
  ];

  return (
    <div className="main">
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        {arrOfProjects.map((project, index) => (
          <Project
            key={index}
            imageUrl={project.image}
            title={project.title}
            description={project.description}
            codeLink={project.codeLink}
            siteLink={project.siteLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
