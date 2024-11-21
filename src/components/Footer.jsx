import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing the arrow up icon

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerText}>
        <p>All rights reserved © Sampat Karehonna</p>
      </div>
      <a href="#top" style={styles.arrowLink}>
        <div style={styles.arrowIconWrapper}>
          <FaArrowUp style={styles.arrowIcon} />
        </div>
      </a>
    </footer>
  );
}

const styles = {
  footer: {
    width: '100%',
    backgroundColor: '#fff', // Dark background for footer
    color: '#000',
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60px', // Minimal height for footer
  },
  footerText: {
    fontSize: '1rem',
    flex: 1,
  },
  arrowLink: {
    position: 'absolute',
    right: '10px', // Placing the arrow icon to the right
    bottom: '54px', // Keeping it a little above the footer's bottom edge
    textDecoration: 'none',
    
  },
  arrowIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45px',
    height: '45px',
    borderRadius: '50%', // Circular shape for the icon
    backgroundColor: 'blue', // Tomato red color for the icon's background
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Soft shadow around the icon
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth hover transition
  },
  arrowIcon: {
    fontSize: '1.5rem',
    color: '#fff', // White color for the arrow icon
  },
  arrowIconWrapperHover: {
    transform: 'scale(1.1)', // Slightly enlarging the icon on hover
    backgroundColor: '#ff4500', // Darker shade of red on hover
  }
};

export default Footer;
