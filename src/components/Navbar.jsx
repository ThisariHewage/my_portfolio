import { useState } from 'react';
// Icons removed to fix white screen crash

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#home" className="nav-brand">
          Thisari uresha
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>


        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          MENU
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

