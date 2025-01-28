import React from "react";
import "./recentresults.css";

const RecentResults = () => {
  return (
    <section className="recent-results">
      <div className="recent-results-container">
        <h2>Your recent results</h2>
        <div className="result-item">
          <div className="left-content">
            <h3 className="ielts-training">IELTS General Training</h3>
            <p className="date">16 January 2025</p>
            <p className="location">IELTS on paper Nairobi</p>
          </div>
          <div className="right-content">
            <p className="availability">Your results are available now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentResults;
