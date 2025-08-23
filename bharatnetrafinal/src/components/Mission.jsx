import React, { useEffect, useRef } from 'react';

function Mission() {
  const missionTextRef = useRef(null);

  useEffect(() => {
    const typeWriter = (element, text, speed = 100) => {
      let i = 0;
      element.textContent = '';

      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }

      type();
    };

    const missionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const missionText = entry.target;
            const originalText = missionText.textContent;

            setTimeout(() => {
              typeWriter(missionText, originalText, 50);
            }, 500);

            missionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (missionTextRef.current) {
      missionObserver.observe(missionTextRef.current);
    }

    return () => {
      if (missionTextRef.current) {
        missionObserver.unobserve(missionTextRef.current);
      }
    };
  }, []);

  return (
    <section className="mission">
      <div className="container">
        <p className="mission-text" ref={missionTextRef}>
          BharatNetra is the digital eye of law enforcement, empowering agencies
          with speed, precision, and intelligence.
        </p>
      </div>
    </section>
  );
}

export default Mission;
