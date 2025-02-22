// Header.tsx
import React from 'react';
import reactLogo from '../assets/react.svg';
import './Header.css';
interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Contact', link: '/contact' },
];

const Header: React.FC = () => {
  return (
    <nav className="header">
      <ul className="nav-list">
        <li className="nav-logo" key={"logo"}>
          <a href="/">
            <img src={reactLogo} alt="VizBiz" />
          </a>
        </li>
        {navItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
