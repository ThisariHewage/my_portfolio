import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const degrees = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of Kelaniya',
      period: '2023 - Present',
      cgpa: '3.50/4.0',
      description: 'Specializing in Net centric Web Application Development, Data Science and Engineering Application, and Health Informatic Engineering Domains.'
    },
    {
      degree: 'GCE Advanced Level',
      institution: 'Ananda Sastralaya National School, Mathugama',
      period: '2019 - 2022',
      cgpa: 'Z-Score: 1.5423',
      description: 'Completed Advanced Level studies in the Physical Science stream, covering subjects such as Combined Mathematics, Physics, and Chemistry.'
    }
  ];

  const certificates = [
    {
      name: 'Diploma in C Programming',
      issuer: 'Alison',
      year: '2023',
      description: 'Gained knowledge of C programming, including variables, loops, functions, and basic problem-solving.'
    },
    {
      name: 'Certificate in Computer Literacy',
      issuer: 'The Open University of Sri Lanka',
      year: 'Nov 2023',
      description: 'Completed a course covering basic computer skills, software use, and digital literacy.'
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div 
          className="section-header"
          {...fadeIn}
        >
          <h2 className="section-title">Education</h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="edu-grid-simple">
          <div className="edu-col">
            {degrees.map((edu, index) => (
              <motion.div 
                key={index} 
                className="edu-item-simple"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="edu-item-header">
                  <div className="edu-title-group">
                    <h3 className="edu-degree-simple">{edu.degree}</h3>
                    <p className="edu-institution-simple">{edu.institution}</p>
                  </div>
                  <div className="edu-meta-group">
                    <span className="edu-date-simple">{edu.period}</span>
                    <span className="edu-cgpa-simple">{edu.cgpa}</span>
                  </div>
                </div>
                <p className="edu-desc-simple">{edu.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="cert-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="subsection-title">Certifications</h3>
            <div className="cert-list">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="cert-item-simple"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <div className="cert-info">
                    <h4 className="cert-name-simple">{cert.name}</h4>
                    <p className="cert-issuer-simple">{cert.issuer} • {cert.year}</p>
                    {cert.description && <p className="cert-desc-simple">{cert.description}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




export default Education;
