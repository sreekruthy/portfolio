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
        </div>
      </div>

      <section className="card">
        <h2 className="section-title">About Me</h2>
        <p>
          I’m a passionate, ambitious person, driven by the kind of problems that don’t have obvious answers. The ones that sit somewhere between data, decisions, and human behavior. I enjoy taking something complex—whether it’s a system, an idea, or a pattern—and shaping it into something that actually makes sense and works in the real world. Not just in theory. 
          What matters to me isn’t just building things, but building things that hold up - that are thoughtful, reliable, and intentional. I’m constantly learning, not to collect skills, but to understand how to see problems better, think deeper, and create work that genuinely stands out.
        </p>
      </section>

      <section className="card">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          {[
            { label: "Quantitative Finance" },
            { label: "Hedge Funds & Trading" },
            { label: "Big Data Analytics" },
            { label: "Machine Learning" },
            { label: "AI in FinTech" },
          ].map(({ label }) => (
            <div className="interest-item" key={label}>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Skills</h2>

        <div className="skills-section">
          <h3 className="skills-category-title">Technical Skills</h3>

          <div className="skills-category-group">
            <div className="skills-row">
              <span className="skills-subcategory">Programming Languages</span>
              <div className="skills-tags">
                {["Python", "Java", "C", "SQL"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="skills-row">
              <span className="skills-subcategory">Web Development</span>
              <div className="skills-tags">
                {["React.js", "JavaScript", "HTML", "CSS", "Node.js", "Express.js"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="skills-row">
              <span className="skills-subcategory">Databases</span>
              <div className="skills-tags">
                {["PostgreSQL", "MongoDB"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="skills-row">
              <span className="skills-subcategory">Coursework</span>
              <div className="skills-tags">
                {["Machine Learning", "Data Analytics", "DSA", "Deep Neural Networks","Software Engineering", "Operating Systems"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="skills-row">
              <span className="skills-subcategory">Tools & Technologies</span>
              <div className="skills-tags">
                {["Git", "Tableau", "MATLAB", "Docker"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="skills-row">
              <span className="skills-subcategory">Design & Creative</span>
              <div className="skills-tags">
                {["GIMP", "Canva"].map((s) => (
                  <span className="skill-tag skill-tag--optional" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="skills-divider" />

        <div className="skills-section">
          <h3 className="skills-category-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            {[
              {  label: "Problem Solving" },
              { label: "Analytical Thinking" },
              { label: "Team Collaboration" },
              {  label: "Communication Skills" },
              {  label: "Adaptability" },
              {  label: "Time Management" },
            ].map(({ label }) => (
              <div className="soft-skill-item" key={label}>
                <span>{label}</span>
              </div>
            ))}
          </div>
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
              <h3>10th Grade (CBSE)</h3>
              <p className="edu-institute">Global Indian International School</p>
              <p className="edu-meta">March 2020 – June 2021 &nbsp;·&nbsp; <strong>96%</strong></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;