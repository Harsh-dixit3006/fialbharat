import React, { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.1;
        hero.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    const particleInterval = setInterval(() => {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '2px';
      particle.style.height = '2px';
      particle.style.background = 'rgba(102, 126, 234, 0.6)';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';

      const hero = document.querySelector('.hero');
      if (hero) {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `particleFloat ${
          3 + Math.random() * 4
        }s linear infinite`;

        hero.appendChild(particle);

        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 7000);
      }
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">COMPREHENSIVE ALL IN ONE </span>
            <span>OPEN-SOURCE INTELLIGENCE TOOL</span>
            <span>FOR LAW ENFORCEMENT AGENCIES</span>
          </h1>
          <div className="hero-buttons">
            <button className="cta-btn primary">Get Started</button>
            <button className="cta-btn secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-icon">🔍</div>
            <div className="floating-icon">🛡️</div>
            <div className="floating-icon">⚡</div>
            <div className="floating-icon">🌐</div>
          </div>
        </div>
      </div>
      <div className="hero-particles"></div>
    </section>
  );
}

export default Hero;
