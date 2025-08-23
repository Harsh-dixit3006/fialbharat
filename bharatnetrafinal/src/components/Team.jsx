import React, { useEffect, useRef } from 'react';

function Team() {
  const teamCardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    teamCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      teamCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section id="team" className="team">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card" ref={(el) => (teamCardsRef.current[0] = el)}>
            <div className="team-photo">
              <img
                src="/Photos/Rohnish1.png"
                alt="Photo of Rohnish Srivastava"
              />
            </div>
            <h3>Rohnish Srivastava</h3>
            <a
              href="http://www.linkedin.com/in/rohnish-srivastava"
              className="linkedin-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="team-card" ref={(el) => (teamCardsRef.current[1] = el)}>
            <div className="team-photo">
              <img
                src="/Photos/image-removebg-preview.png"
                alt="Photo of Harsh Dixit"
              />
            </div>
            <h3>Harsh Dixit</h3>
            <a
              href="https://www.linkedin.com/in/harsh-dixit-65820b311"
              className="linkedin-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="team-card" ref={(el) => (teamCardsRef.current[2] = el)}>
            <div className="team-photo">
              <img src="/Photos/naitik.jpg" alt="Photo of Naitik Goyal" />
            </div>
            <h3>Naitik Goyal</h3>
            <a
              href="https://www.linkedin.com/in/naitik-goyal-0170a1376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="linkedin-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="team-card" ref={(el) => (teamCardsRef.current[3] = el)}>
            <div className="team-photo">
              <img src="/Photos/Harshit.jpg" alt="Photo of Harshit Sharma" />
            </div>
            <h3>Harshit Sharma</h3>
            <a
              href="https://www.linkedin.com/in/harshit-sharma-064686362"
              className="linkedin-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="team-card" ref={(el) => (teamCardsRef.current[4] = el)}>
            <div className="team-photo">
              <img src="/Photos/download.png" alt="Photo of Madhav Gupta" />
            </div>
            <h3>Madhav Gupta</h3>
            <a
              href="https://www.linkedin.com/in/madhav-gupta-99bb06377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="linkedin-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="team-card" ref={(el) => (teamCardsRef.current[5] = el)}>
            <div className="team-photo">
              <img src="/Photos/nikita.jpg" alt="Photo of Nitya Pandey" />
            </div>
            <h3>Nitya Pandey</h3>
            <a
              href="https://www.linkedin.com/in/harsh-dixit-65820b311"
              className="linkedin-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
