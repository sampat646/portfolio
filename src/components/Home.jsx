// FigureExample.js
import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Profile from '../assets/assets'; // Make sure your image path is correct
import 'bootstrap-icons/font/bootstrap-icons.css';

function FigureExample() {
  return (
    <div className="home-container" id='Home'>
      <figure>
        <img
          src={Profile}
          alt="Profile"
          width={171}
          height={180}
          className="rounded-circle mx-auto d-block"
        />
        <figcaption>
          <h3 className="mt-3 name">Sampat Karehonna</h3>
          <p className="text-muted" id="sampat">
          A developer focused on building practical and effective web solutions, always learning and improving.          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/sampat-karehonna-3a150722b" target="_blank" rel="noopener noreferrer" className="mx-2 text-decoration-none">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.instagram.com/sampat_k77/profilecard/?igsh=MWRsbjJ6Z3RyaG9kNQ==" target="_blank" rel="noopener noreferrer" className="mx-2 text-decoration-none">
              <i className="bi bi-instagram"></i> Instagram
            </a>
            <a href="https://github.com/sampat646" target="_blank" rel="noopener noreferrer" className="mx-2 text-decoration-none">
              <i className="bi bi-github"></i> GitHub
            </a>
            <a href="https://www.hackerrank.com/profile/sampatck46" target="_blank" rel="noopener noreferrer" className="mx-2 text-decoration-none">
              <i className="bi bi-code-square"></i> HackerRank
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default FigureExample;
