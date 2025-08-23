import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>
              BharatNetra empowers law enforcement with intelligent tools.
            </h1>
            <p>
              BharatNetra is an all-in-one intelligence platform built for law
              enforcement agencies. With tools for IP tracing, domain analysis,
              and digital footprint tracking, it empowers officers to
              investigate faster and more effectively.
            </p>
            <p>
              Our mission is to strengthen national security through reliable,
              innovative technology.
            </p>
          </div>
          <div className="about-image">
            <img src="/Photos/map.jpeg" alt="Digital map of the world" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
