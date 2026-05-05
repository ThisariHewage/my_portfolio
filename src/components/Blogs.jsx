import { motion } from 'framer-motion';
import './Blogs.css';
import blogImg1 from '../assets/blog-cybersecurity.jpg';
import blogImg2 from '../assets/blog-mysql.webp';
import blogImg3 from '../assets/blog-licensing.jpg';
import blogImg4 from '../assets/blog-devops.avif';
import blogImg5 from '../assets/blog-os.jpg';

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
      image: blogImg3,
      date: 'May 1, 2025',
      readTime: '3 min read',
      title: 'Understanding Software Licensing: A Guide to Today\'s Most Common Licenses',
      excerpt: 'A comprehensive guide to modern software licensing models, what they allow, and how to choose the right license to protect your intellectual property.',
      tech: ['Software', 'Licensing', 'Open Source'],
      link: 'https://medium.com/@thisaridewmini428/understanding-software-licensing-a-guide-to-todays-most-common-licenses-078966bfabf5'
    },

    {
      image: blogImg4,
      date: 'May 3, 2025',
      readTime: '4 min read',
      title: 'Understanding DevOps: A Comprehensive Guide',
      excerpt: 'A deep dive into DevOps culture, practices, and tools. Learn how integrating development and operations can streamline workflows and accelerate delivery.',
      tech: ['DevOps', 'CI/CD', 'Cloud'],
      link: 'https://medium.com/@thisaridewmini428/understanding-devops-a-comprehensive-guide-5dff8ec53864'
    },

    {
      image: blogImg5,
      date: 'Jun 25, 2025',
      readTime: '3 min read',
      title: 'Building ThisariOS: My First 16-Bit Operating System From Scratch',
      excerpt: 'A deep dive into low-level programming, exploring bootloaders, the BIOS, assembly language, and what it takes to build a minimal 16-bit OS from the ground up.',
      tech: ['Assembly', 'C', 'Operating Systems'],
      link: 'https://medium.com/@thisaridewmini428/building-thisarios-my-first-16-bit-operating-system-from-scratch-fd1938c2014a'
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
