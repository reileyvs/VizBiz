// Header.tsx
import React from 'react';
import './Footer.css';
interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
];

const Footer: React.FC = () => {
  return (
    <nav className="footer">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li className="nav-item-footer" key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <hr className="footer-hr"/>
      <p className="footer-text">© 2021 VizBiz</p>
    </nav>
  );
};

export default Footer;
