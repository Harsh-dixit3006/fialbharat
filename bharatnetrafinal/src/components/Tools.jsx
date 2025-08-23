import React, { useEffect, useRef } from 'react';

function Tools() {
  const toolCardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          if (entry.target.classList.contains('tool-card')) {
            const delay =
              Array.from(entry.target.parentElement.children).indexOf(
                entry.target
              ) * 100;
            setTimeout(() => {
              entry.target.style.animationDelay = `${delay}ms`;
            }, 100);
          }
        }
      });
    }, observerOptions);

    toolCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      toolCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section id="tools" className="tools">
      <div className="container">
        <h2 className="section-title">BharatNetra Tools</h2>

        <div className="tools-grid">
          <div className="tool-card" ref={(el) => (toolCardsRef.current[0] = el)}>
            <h3>Whols Tools (IP Address & Website Domains)</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[1] = el)}>
            <h3>Basic Password's Hash Breaker</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[2] = el)}>
            <h3>Website Subdomain Discovery</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[3] = el)}>
            <h3>IP History of Domains</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[4] = el)}>
            <h3>Reverse IP Lookup</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[5] = el)}>
            <h3>Reverse Whols Lookup</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>

          <div className="tool-card" ref={(el) => (toolCardsRef.current[6] = el)}>
            <h3>Port Scanner</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[7] = el)}>
            <h3>Bulk IP Address Lookup</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[8] = el)}>
            <h3>Abuse Contact Address Lookup</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[9] = el)}>
            <h3>Checks if website has malware</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[10] = el)}>
            <h3>Email Header Analyzer</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[11] = el)}>
            <h3>Mobile Number's Carrier Teller</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>

          <div className="tool-card" ref={(el) => (toolCardsRef.current[12] = el)}>
            <h3>Reverse Image Search</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[13] = el)}>
            <h3>Email Address Validator</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
          <div className="tool-card" ref={(el) => (toolCardsRef.current[14] = el)}>
            <h3>MAC Address Lookup</h3>
            <button className="tool-btn">CLICK HERE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
