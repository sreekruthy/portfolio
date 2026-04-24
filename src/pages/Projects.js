import React, { useState } from "react";
import "./Projects.css";
import { link } from "node:fs";

const projects = [
  {
    name: "FinDebate – Multi-Agent AI System",
    period: "March 2026 – Present",
    techStack: ["Python", "LLM APIs", "NLP", "Data Pipelines"],
    description:
      "AI-driven system that simulates structured debates between multiple agents to improve financial decision-making through iterative reasoning and counterargument generation.",
    points: [
      "Engineered a multi-agent debate loop enabling iterative argument and counterargument generation across multiple rounds",
      "Implemented response evaluation and scoring logic to rank arguments based on relevance, consistency, and strength",
      "Designed termination criteria (convergence / max iterations) to ensure efficient and meaningful debate outcomes",
      "Integrated debate outputs with financial analysis modules to support data-driven investment insights",
    ],
    insight: "Iterative debate frameworks significantly improve reasoning quality by exposing conflicting perspectives, leading to more balanced and robust financial decisions.",
    link: "https://github.com/sreekruthy/findebate",
    color: "#6c63ff",
  },
  {
    name: "Fraud Detection System – FinTech",
    period: "February 2026 – Present",
    techStack: ["React.js", "Node.js", "FastAPI", "MongoDB", "ML APIs", "JWT"],
    description:
      "Full-stack fraud detection system combining ML predictions with real-time user feedback and admin intervention to improve transaction security and model accuracy.",
    points: [
      "Designed a dual-flow fraud handling system distinguishing between SUSPICIOUS (user-verifiable) and FRAUD (auto-blocked) transactions",
      "Engineered an alert lifecycle system with severity levels (HIGH / CRITICAL), hold windows, and resolution states",
      "Built interactive frontend workflows for real-time alerts, including user response, countdown timers, and status updates",
      "Integrated user feedback loops to generate labeled data for ML model retraining",
      "Implemented email-driven interaction flows with secure token-based responses and expiry handling",
    ],
    insight: "Combining automated ML decisions with human-in-the-loop validation significantly improves fraud detection reliability while reducing false positives.",
    link: "https://github.com/sreekruthy/fraud_detection",
    color: "#e74c3c",
  },
  {
    name: "Human Uncertainty for Robust Image Classification",
    period: "April 2026 – Present",
    techStack: ["Python", "PyTorch", "CNNs", "GPU Acceleration"],
    description:
      "Deep learning system inspired by the paper 'Human Uncertainty Makes Classification More Robust' to improve model performance under uncertain and noisy labels.",
    points: [
      "Built multiple CNN architectures including ResNet-20, ResNet-110, Wide ResNet (WRN-28-10), and VGG-16 with BatchNorm",
      "Implemented residual connections, adaptive pooling, and modular architecture components",
      "Developed a flexible model factory (get_model) for dynamic architecture selection and device compatibility",
      "Integrated lightweight models (LightCNN) for rapid experimentation and debugging",
      "Enabled structured comparison of architectures to study robustness under uncertainty",
    ],
    insight: "Wider and deeper architectures improved robustness in uncertain classification settings, highlighting the importance of model capacity in handling noisy labels.",
    link: "https://github.com/sreekruthy/human_uncertainity_for_image_classification",
    color: "#f39c12",
  },
  {
    name: "AI Financial Analyst Copilot",
    period: "April 2026 – Present",
    techStack: ["Python", "RAG", "LLMs", "GenAI", "ML"],
    description:
      "Developing a GenAI system using RAG and agent-based workflows to analyze financial data and generate explainable insights from reports and market sources.",
    points: [
      "Integrating ML models for financial forecasting with LLMs",
      "Built scalable pipeline for analysing financial trends from reports and market sources",
      "Leveraging Retrieval-Augmented Generation for context-aware financial Q&A",
    ],
    insight: "Combining RAG with agent-based reasoning produces more grounded and explainable financial insights than standalone LLMs.",
    color: "#00adb5",
  },
  {
    name: "Student Management System",
    period: "April 2026",
    techStack: ["React (Vite)", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "JWT", "Axios"],
    description:
      "Production-ready full-stack web application to manage group-based academic workflows, enabling seamless coordination between students and professors.",
    points: [
      "Designed and implemented a relational database schema (PostgreSQL) for users, courses, groups, assignments, and submissions",
      "Built a role-based access system (Student / Professor) with separate dashboards and protected routes",
      "Implemented JWT-based authentication with secure session handling and role validation across APIs",
      "Developed group-based assignment workflows allowing students to create/join groups, submit work, and track progress",
      "Deployed using Vercel (frontend), Render (backend), and managed PostgreSQL",
    ],
    insight: "Designing both the database schema and API layer was critical in ensuring consistency across group-based workflows, highlighting how backend architecture directly impacts frontend usability.",
    link: "https://github.com/sreekruthy/student_management_system-joineazy",
    color: "#27ae60",
  },
  {
    name: "Video Streaming Platform",
    period: "April 2026 – Present",
    techStack: ["React.js", "JavaScript", "HLS.js", "JWT", "CSS"],
    description:
      "Scalable video streaming platform focused on delivering a smooth, interactive, and responsive user experience with adaptive streaming and secure authentication.",
    points: [
      "Built a responsive 3-column video grid layout with skeleton loaders and pagination for seamless content browsing",
      "Integrated HLS.js-based video player with adaptive bitrate streaming for optimized playback across network conditions",
      "Implemented interactive features including like/dislike, comments, and sidebar navigation",
      "Developed a music library interface with like, share, and download functionalities",
      "Designed and integrated JWT-based authentication flows (login/register) using AuthContext for state management",
    ],
    insight: "Delivering a high-quality viewer experience requires balancing performance (adaptive streaming, lazy loading) with interactivity, ensuring smooth playback under varying network conditions.",
    color: "#8e44ad",
  },
  {
    name: "3D Escape Room Game",
    period: "October 2025 – December 2025",
    techStack: ["Unity", "C#"],
    description:
      "Virtual 3D escape room game with obstacle navigation and player-controlled movement. Engineered C# scripts covering scene management and physics API.",
    points: [
      "Developed a virtual 3D escape room game with obstacle navigation and player-controlled movement using Unity",
      "Engineered C# scripts for scene management and Unity physics API",
      "Learnt about Unity's game loop, asset management, and interactive object design",
    ],
    insight: "Building a 3D interactive environment requires deep integration of physics, scripting, and scene management to create a seamless player experience.",
    link: "https://github.com/sreekruthy/3D-Escape-Room-Game",
    color: "#2c5364",
  },
];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card" style={{ "--card-accent": project.color }}>
      <div className="card-top">
        <div className="card-header">
          <h3 className="project-name">{project.name}</h3>
          <span className="project-period">{project.period}</span>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="tech-stack">
          {project.techStack.map((t) => (
            <span className="tech-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>

      {expanded && (
        <div className="card-expanded">
          <ul className="points-list">
            {project.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <div className="insight-box">
            <span className="insight-label"> Key Insight</span>
            <p>{project.insight}</p>
          </div>
        </div>
      )}

      <div className="card-footer">
        <button
          className="toggle-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less ▲" : "View Details ▼"}
        </button>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <div className="projects-header">
        <h1>My Projects</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;