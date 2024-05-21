import './Skills.css';

function Skills() {
  const techStacks = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'GitHub',
    'Python',
    'Vite'
  ];

  return (
    <div className="skills-container">
      <h2 className='title'>My Skills</h2>
      <ul className='skills'>
        {techStacks.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
