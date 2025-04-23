import React, { useEffect } from 'react';
import './Styles/stats.css';

const Stats = () => {
  useEffect(() => {
    const animateStats = () => {
      const statItems = document.querySelectorAll(".stats-item");
      
      const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
        );
      };

      statItems.forEach((item, index) => {
        if (isInViewport(item)) {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, index * 200);
        }
      });
    };

    // Initial check
    animateStats();

    // Check on scroll
    window.addEventListener("scroll", animateStats);

    return () => window.removeEventListener("scroll", animateStats);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-content">
          <div className="stats-image">
            <img src="./Stats/cattle.png" alt="Farmer with animals" />
          </div>
          <div className="stats-info">
            <div className="stats-heading">
              <h2>Freshness is Beyond <span>Numbers</span>.</h2>
              <p>But here are a few stats that tell our story!</p>
            </div>
            <div className="stats-grid">
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="./Stats/1.png" alt="Happy Customers" />
                </div>
                <div className="stats-details">
                  <h3>5,000+</h3>
                  <p>Happy customers enjoying pure freshness</p>
                </div>
              </div>
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="./Stats/2.png" alt="Happy Customers" />
                </div>
                <div className="stats-details">
                  <h3>2,500+</h3>
                  <p>Farmers growing with us every day</p>
                </div>
              </div>
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="./Stats/3.png" alt="Happy Customers" />
                </div>
                <div className="stats-details">
                  <h3>10,000+</h3>
                  <p>Liters of farm-fresh milk delivered</p>
                </div>
              </div>
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="./Stats/4.png" alt="Happy Customers" />
                </div>
                <div className="stats-details">
                  <h3>15,000+</h3>
                  <p>Quality tests ensuring purity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;