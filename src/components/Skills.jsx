import React from 'react';
import '../css/Skills.css';

import csharpLogo from '../assets/Skills/csharp.svg';
import cssLogo from '../assets/Skills/css3.svg';
import gitLogo from '../assets/Skills/git.svg';
import githubLogo from '../assets/Skills/github(1).svg';
import herokuLogo from '../assets/Skills/heroku.svg';
import htmlLogo from '../assets/Skills/html5.svg';
import javaLogo from '../assets/Skills/java.svg';
import javascriptLogo from '../assets/Skills/javascript.svg';
import mysqlLogo from '../assets/Skills/mysql.svg';
import node_jsLogo from '../assets/Skills/node-js.svg';
import visualstudioLogo from '../assets/Skills/visualstudio.svg';

const skills = [
  { id: 1, name: 'HTML', logo: htmlLogo },
  { id: 2, name: 'CSS', logo: cssLogo },
  { id: 3, name: 'JavaScript', logo: javascriptLogo },
  { id: 4, name: 'Java', logo: javaLogo },
  { id: 5, name: 'C#', logo: csharpLogo },
  { id: 6, name: 'MySQL', logo: mysqlLogo },
  { id: 7, name: 'Node.js', logo: node_jsLogo },
  { id: 8, name: 'Git', logo: gitLogo },
  { id: 9, name: 'GitHub', logo: githubLogo },
  { id: 10, name: 'Visual Studio', logo: visualstudioLogo },
  { id: 11, name: 'Heroku', logo: herokuLogo },
  { id: 12, name: 'HTML', logo: htmlLogo },
  { id: 1, name: 'HTML', logo: htmlLogo },
  { id: 2, name: 'CSS', logo: cssLogo },
  { id: 3, name: 'JavaScript', logo: javascriptLogo },
  { id: 4, name: 'Java', logo: javaLogo },
  { id: 5, name: 'C#', logo: csharpLogo },
  { id: 6, name: 'MySQL', logo: mysqlLogo },
  { id: 7, name: 'Node.js', logo: node_jsLogo },
  { id: 8, name: 'Git', logo: gitLogo },
  { id: 1, name: 'HTML', logo: htmlLogo },
  { id: 2, name: 'CSS', logo: cssLogo },
  { id: 3, name: 'JavaScript', logo: javascriptLogo },
  { id: 4, name: 'Java', logo: javaLogo },
  { id: 5, name: 'C#', logo: csharpLogo },
  { id: 6, name: 'MySQL', logo: mysqlLogo },
  { id: 7, name: 'Node.js', logo: node_jsLogo },
  { id: 8, name: 'Git', logo: gitLogo },
  { id: 9, name: 'GitHub', logo: githubLogo },
  { id: 10, name: 'Visual Studio', logo: visualstudioLogo },
  { id: 11, name: 'Heroku', logo: herokuLogo },
  { id: 12, name: 'HTML', logo: htmlLogo },
  { id: 1, name: 'HTML', logo: htmlLogo },
  { id: 2, name: 'CSS', logo: cssLogo },
  { id: 3, name: 'JavaScript', logo: javascriptLogo },
  { id: 4, name: 'Java', logo: javaLogo },
  { id: 5, name: 'C#', logo: csharpLogo },
  { id: 6, name: 'MySQL', logo: mysqlLogo },
  { id: 7, name: 'Node.js', logo: node_jsLogo },
  { id: 8, name: 'Git', logo: gitLogo },
  
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Developer Toolkit</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
