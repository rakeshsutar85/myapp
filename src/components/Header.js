import React, { useState } from 'react';
import Hero from './Hero';
import Achievement from './Achievement';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.title}>Logo</h1>
        <nav style={styles.nav}>
          <ul style={styles.navList}>

            <li style={styles.navItem} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a href="/about" style={styles.navLink}>Services▼ </a>
              {isDropdownOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/about/team" style={styles.navLink}>Data Annotation</a></li>
                  <li style={styles.dropdownItem}><a href="/about/mission" style={styles.navLink}>data transcription</a></li>
                  <li style={styles.dropdownItem}><a href="/about/history" style={styles.navLink}>data validation</a></li>
                  <li style={styles.dropdownItem}><a href="/about/history" style={styles.navLink}>Language LLM and AI</a></li>

                </ul>
              )}
            </li>
            <li style={styles.navItem}><a href="/" style={styles.navLink}>Solutions</a></li>
            <li style={styles.navItem}><a href="/contact" style={styles.navLink}>Resources</a></li>
            <li style={styles.navItem}><a href="/contact" style={styles.navLink}>Pricing</a></li>
            <li style={styles.navItem}><button style={styles.button}>Sign Up</button></li>
            <li style={styles.navItem}><button style={styles.button}>Log in</button></li>
          </ul>
        </nav>
      </header>
      <Hero />
      <Achievement />
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#043873',
    padding: '1rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: '0',
  },
  nav: {
    display: 'flex',
  },
  navList: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center'
  },
  navItem: {
    marginLeft: '1rem',
    position: 'relative',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#043873',
    listStyle: 'none',
    margin: '0',
    padding: '0.5rem 0',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  dropdownItem: {
    padding: '0.5rem 1rem',
    whiteSpace: 'nowrap'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Header;