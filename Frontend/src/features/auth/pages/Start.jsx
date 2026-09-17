import React from "react";
import { useNavigate } from "react-router";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <nav className="navbar">
        <h1>
          Smart<span className="highlight">Resume</span>
        </h1>

        <button onClick={() => navigate("/login")} className="login-btn">
          Login / Sign Up
        </button>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <p className="tagline">AI-POWERED RESUME ANALYZER</p>

          <h2>
            Build a Resume That
            <span className="highlight"> Gets You Noticed.</span>
          </h2>

          <p className="description">
            Upload your resume and the job description to get an AI-powered interview plan tailored to you. Discover your skill gaps, practice technical and behavioral questions, and follow a personalized preparation roadmap designed to help you crack the interview.

          </p>

          <button
            className="get-started"
            onClick={() => navigate("/login")}
          >
            Analyze My Resume →
          </button>

          <div className="features">
            <span>✓ ATS Score</span>
            <span>✓ AI Analysis</span>
            <span>✓ Smart Suggestions</span>
          </div>
        </div>

        <div className="resume-preview">
          <div className="resume-card">
            <h3>John Doe</h3>
            <p className="resume-role">Software Engineer</p>

            <hr />

            <h4>PROFILE</h4>
            <p>
              Passionate software engineer with experience in building
              scalable web applications.
            </p>

            <h4>SKILLS</h4>
            <div className="skills">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>JavaScript</span>
            </div>

            <div className="ats-box">
              <div>
                <small>ATS SCORE</small>
                <strong>87/100</strong>
              </div>

              <span className="check">✓</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Start;
