import { useState } from 'react';
import { Menu, X, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blogs' },
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

        <button className="theme-toggle">
          <Moon size={20} />
        </button>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          MENU
        </div>
      </div>
    </nav>
  );
};


export default Navbar;

