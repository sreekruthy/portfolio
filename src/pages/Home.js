import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <img 
        src="https://via.placeholder.com/150" 
        alt="Profile" 
        className="profile-img"
      />

      <h1>Sree Kruthy Reddy</h1>

      <section>
        <h2>About Me</h2>
        <p>
          I am a passionate student interested in web development, data analytics,
          and building real-world applications.
        </p>
      </section>

      <section>
        <h2>Research Interests</h2>
        <p>
          Machine Learning, Fraud Detection Systems, Big Data Analytics,
          and Data Visualization.
        </p>
      </section>

      <section>
        <h2>Personal Details</h2>
        <p><b>Name:</b> Sree Kruthy Reddy</p>
        <p><b>Phone:</b> 9876543210</p>
        <p><b>Email (Personal):</b> example@gmail.com</p>
        <p><b>Email (College):</b> example@college.edu</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>React JS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Data Analytics</li>
        </ul>
      </section>

    </div>
  );
}

export default Home;