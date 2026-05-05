import { motion } from 'framer-motion';
import './Blogs.css';
import blogImg1 from '../assets/blog-cybersecurity.jpg';
import blogImg2 from '../assets/blog-mysql.jpg';

const Blogs = () => {
  const blogPosts = [

    {
      image: blogImg1,
      date: 'Jul 16, 2024',
      readTime: '5 min read',
      title: 'CIA Triad in Cyber Security',
      excerpt: 'An overview of the CIA Triad (Confidentiality, Integrity, Availability) and its importance in establishing a robust cyber security posture.',
      tech: ['Cyber Security', 'CIA Triad', 'InfoSec'],
      link: 'https://medium.com/@thisaridewmini428/cia-triad-in-cyber-security-9b174bbea515'
    },

    {
      image: blogImg2,
      date: 'Jan 27, 2025',
      readTime: '3 min read',
      title: 'Stored Procedures in MySQL',
      excerpt: 'Learn how to write and optimize Stored Procedures in MySQL to encapsulate logic, enhance security, and improve database performance.',
      tech: ['MySQL', 'Database', 'SQL'],
      link: 'https://medium.com/@thisaridewmini428/stored-procedures-in-mysql-b53bd2dffa8b'
    },

    {
      image: blogImg1,
      date: 'Apr 1, 2025',
      readTime: '4 min read',
      title: 'Getting Started with Spring Boot',
      excerpt: 'A quick-start walkthrough for spinning up Spring Boot services, structuring REST APIs, and shipping your first backend feature.',
      tech: ['Java', 'Spring Boot', 'Backend']
    },
    {
      image: blogImg2,
      date: 'Dec 3, 2024',
      readTime: '4 min read',
      title: 'Understanding the MVC Architecture in Web Development',
      excerpt: 'A plain-language breakdown of the MVC pattern, why it still matters, and how to keep controllers lean while views stay clean.',
      tech: ['Full-Stack', 'Architecture', 'Trends']
    },
    {
      image: blogImg1,
      date: 'Jun 21, 2024',
      readTime: '4 min read',
      title: 'Exploring the World of Software Licensing: An In-Depth Overview',
      excerpt: 'Key licensing models, what they allow, and how to choose the right one to keep your project safe and shareable.',
      tech: ['Software', 'Security', 'Licensing']
    }
  ];

  return (
    <section id="blogs" className="blogs-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">BLOGS</h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="blogs-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-image-overlay">
                  <div className="blog-image-meta">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span>{post.date}</span>
                    <span className="blog-sep">•</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tech-stack">
                  {post.tech.map((tag, i) => (
                    <span key={i} className="blog-tech-tag">{tag}</span>
                  ))}
                </div>
                <a href={post.link || '#'} target={post.link ? "_blank" : undefined} rel={post.link ? "noopener noreferrer" : undefined} className="read-more-link">
                  READ ARTICLE <span>↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
