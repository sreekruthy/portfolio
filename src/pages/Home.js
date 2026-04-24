import React from "react";
import "./Home.css";
import profilePic from "../profile.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <img src={profilePic} alt="Sreekruthy" className="profile-img" />
        <div className="hero-text">
          <h1 className="name">Tummala Sreekruthy</h1>
          <p className="tagline">B.Tech CSE @ Mahindra University · CGPA 9.39</p>
          <div className="badges">
            <span className="badge">Machine Learning</span>
            <span className="badge">AI in FinTech</span>
            <span className="badge">Big Data</span>
            <span className="badge">Quant Finance</span>
          </div>
          <div className="hero-links">
            <a
              href="https://github.com/sreekruthy"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-btn"
            >
              <svg height="18" viewBox="0 0 16 16" width="18" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                  -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
                  2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                  0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21
                  2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04
                  2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82
                  2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0
                  1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>

      <section className="card">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm a Computer Science undergraduate at Mahindra University with a passion for
          building intelligent systems that solve real-world problems. With a CGPA of 9.39,
          I have worked across machine learning, full-stack development, and AI-driven
          financial systems. I thrive at the intersection of technology and finance,
          and I'm actively pursuing opportunities in quantitative finance, AI research,
          and data-driven innovation.
        </p>
      </section>

      <section className="card">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          {[
            { icon: "📈", label: "Quantitative Finance" },
            { icon: "🏦", label: "Hedge Funds & Trading" },
            { icon: "🗄️", label: "Big Data Analytics" },
            { icon: "🤖", label: "Machine Learning" },
            { icon: "💡", label: "AI in FinTech" },
          ].map(({ icon, label }) => (
            <div className="interest-item" key={label}>
              <span className="interest-icon">{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Education</h2>
        <div className="education-list">

          <div className="edu-item">
            <div className="edu-left">
              <div className="edu-dot" style={{ background: "#00adb5" }}></div>
              <div className="edu-line"></div>
            </div>
            <div className="edu-content">
              <h3>B.Tech – Computer Science & Engineering</h3>
              <p className="edu-institute">Mahindra University, Hyderabad</p>
              <p className="edu-meta">Aug 2023 – Present &nbsp;·&nbsp; CGPA: 9.39 / 10 (till 5th semester)</p>
              <p className="edu-courses">
                <strong>Relevant Coursework:</strong> DSA, DAA, TOC, ML, OS, DBMS, DNN
              </p>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-left">
              <div className="edu-dot" style={{ background: "#6c63ff" }}></div>
              <div className="edu-line"></div>
            </div>
            <div className="edu-content">
              <h3>Intermediate (Class XII)</h3>
              <p className="edu-institute">FIITJEE</p>
              <p className="edu-meta">June 2021 – March 2023 &nbsp;·&nbsp; <strong>98%</strong></p>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-left">
              <div className="edu-dot" style={{ background: "#f39c12" }}></div>
            </div>
            <div className="edu-content">
              <h3>10th Grade (SSC)</h3>
              <p className="edu-institute">Global Indian International School</p>
              <p className="edu-meta">March 2020 – June 2021 &nbsp;·&nbsp; <strong>96%</strong></p>
            </div>
          </div>

        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {[
            "Python", "Java", "C", "React JS", "JavaScript",
            "HTML & CSS", "Node.js", "Express.js", "PostgreSQL",
            "MongoDB", "PyTorch", "Machine Learning", "Data Analytics",
            "Tableau", "Matlab", "Git", "GIMP", "Canva"
          ].map((skill) => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Personal Details</h2>
        <div className="details-list">
          <div className="detail-row">
            <span className="detail-label">Name</span>
            <span>Tummala Sreekruthy</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone</span>
            <span>+91 8309281235</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Personal Email</span>
            <a href="mailto:sreekruthyreddy@gmail.com">sreekruthyreddy@gmail.com</a>
          </div>
          <div className="detail-row">
            <span className="detail-label">College Email</span>
            <a href="mailto:se23ucse176@mahindrauniversity.edu.in">se23ucse176@mahindrauniversity.edu.in</a>
          </div>
          <div className="detail-row">
            <span className="detail-label">GitHub</span>
            <a href="https://github.com/sreekruthy" target="_blank" rel="noopener noreferrer">
              github.com/sreekruthy
            </a>
          </div>
          <div className="detail-row">
            <span className="detail-label">University</span>
            <span>Mahindra University, Hyderabad – 500043</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;