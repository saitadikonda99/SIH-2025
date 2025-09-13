import React from "react";
import { MdOutlineAnalytics, MdFeedback } from "react-icons/md";
import { FaTasks, FaCalendarAlt, FaPuzzlePiece, FaStickyNote } from "react-icons/fa";
import "./heroSection.css";

const HeroSection: React.FC = () => {
  return (
    <div className="chat-two-content">
      <h1 className="chat-title">Hi, there 👋</h1>
      <p className="chat-subtitle">Tell us what you need, and we’ll handle the rest.</p>

      {/* Cards Section */}
      <div className="chat-cards">
        <div className="chat-card">
          <MdOutlineAnalytics size={24} className="chat-card-icon" />
          <h3>Answer RFP documentation</h3>
          <p>Quickly draft responses for proposals.</p>
        </div>
        <div className="chat-card">
          <FaTasks size={24} className="chat-card-icon" />
          <h3>Conduct a competitor analysis</h3>
          <p>Compare features, pricing, and positioning.</p>
        </div>
        <div className="chat-card">
          <MdFeedback size={24} className="chat-card-icon" />
          <h3>Provide feedback on communication</h3>
          <p>Improve your writing with suggestions.</p>
        </div>
      </div>

      {/* Banners Section */}
      <div className="chat-banners">
        <button className="chat-banner">
          <FaCalendarAlt className="chat-banner-icon" /> Connect Calendar
        </button>
        <button className="chat-banner">
          <FaTasks className="chat-banner-icon" /> Demo Task
        </button>
        <button className="chat-banner">
          <FaPuzzlePiece className="chat-banner-icon" /> Browse Integrations
        </button>
        <button className="chat-banner">
          <FaStickyNote className="chat-banner-icon" /> Shared in Notes
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
