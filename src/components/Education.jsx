import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of Kelaniya',
      period: '2023 - Present',
      description: 'Specializing in Net centric Web Application Development, Data Science and Engineering Application, and Health Informatic Engineering Domains.',
      achievements: ['CGPA: 3.5 / 4.0']
    },
    {
      degree: 'GCE Advanced Level',
      institution: 'Ananda Sastralaya National School, Mathugama',
      period: '2019 - 2022',
      description: 'Completed Advanced Level studies in the Physical Science stream, covering subjects such as Combined Mathematics, Physics, and Chemistry.',
      achievements: ['Z-Score: 1.5423']
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">EDUCATION</h2>
          <div className="title-line"></div>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="edu-header">
                  <span className="edu-period">{edu.period}</span>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <h4 className="edu-institution">{edu.institution}</h4>
                </div>
                <p className="edu-description">{edu.description}</p>
                <ul className="edu-achievements">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
