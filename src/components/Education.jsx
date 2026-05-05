import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const items = [
    {
      type: 'Degree',
      title: 'BSc in Software Engineering',
      institution: 'University of Kelaniya',
      period: '2023 - Present',
      description: 'Specializing in Net centric Web Application Development, Data Science and Health Informatic Engineering Domains.',
      meta: 'CGPA: 3.50/4.0'
    },
    {
      type: 'Degree',
      title: 'GCE Advanced Level',
      institution: 'Ananda Sastralaya National School',
      period: '2019 - 2022',
      description: 'Completed Advanced Level studies in the Physical Science stream, covering Combined Mathematics, Physics, and Chemistry.',
      meta: 'Z-Score: 1.5423'
    },
    {
      type: 'Certificate',
      title: 'Diploma in C Programming',
      institution: 'Alison',
      period: '2023',
      description: 'Gained knowledge of C programming, including variables, loops, functions, and basic problem-solving.',
      meta: 'Grade: Distinction'
    },
    {
      type: 'Certificate',
      title: 'Certificate in Computer Literacy',
      institution: 'Open University of Sri Lanka',
      period: '2023',
      description: 'Completed a course covering basic computer skills, software use, and digital literacy.',
      meta: 'Certified'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education </h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="edu-cards-grid">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="edu-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card-top">
                <span className="card-type">{item.type}</span>
                <span className="card-period">{item.period}</span>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-institution">{item.institution}</p>
              <div className="card-divider"></div>
              <p className="card-desc">{item.description}</p>
              <div className="card-footer">
                <span className="card-meta">{item.meta}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};





export default Education;
