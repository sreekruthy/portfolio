import React from "react";
import "./Home.css";
import profilePic from "../pages/image.jpeg";

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
          <div className="interest-item">
            <span className="interest-icon">📈</span>
            <span>Quantitative Finance</span>
          </div>
          <div className="interest-item">
            <span className="interest-icon">🏦</span>
            <span>Hedge Funds & Trading</span>
          </div>
          <div className="interest-item">
            <span className="interest-icon">🗄️</span>
            <span>Big Data Analytics</span>
          </div>
          <div className="interest-item">
            <span className="interest-icon">🤖</span>
            <span>Machine Learning</span>
          </div>
          <div className="interest-item">
            <span className="interest-icon">💡</span>
            <span>AI in FinTech</span>
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
            <span className="detail-label">University</span>
            <span>Mahindra University, Hyderabad</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;