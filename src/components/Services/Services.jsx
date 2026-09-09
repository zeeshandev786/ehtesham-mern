import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const cardStyle = {
    background: darkMode ? "#1a1a2e" : "#fff",
    color: darkMode ? "#e0e0e0" : "#333",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: darkMode
      ? "0 4px 24px rgba(0,229,255,0.08)"
      : "0 4px 24px rgba(0,0,0,0.08)",
    borderLeft: "4px solid cyan",
    marginBottom: "1.5rem",
  };

  const badgeStyle = {
    display: "inline-block",
    background: "rgba(0,229,255,0.15)",
    color: "cyan",
    borderRadius: "20px",
    padding: "2px 12px",
    fontSize: "0.78rem",
    marginRight: "6px",
    marginBottom: "4px",
    border: "1px solid rgba(0,229,255,0.3)",
  };

  const skills = {
    Frontend: ["React.js", "Next.js", "React Native", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Redux", "Zustand", "Material UI"],
    Backend: ["Node.js", "Express.js", "Nest.js", "FastAPI", "Python", "RESTful APIs", "Socket.io", "WebHooks", "SOAP API", "Stripe", "Twilio", "OpenAI", "Claude"],
    "AI & RAG": ["GPT Models", "OpenAI APIs", "Claude API", "RAG", "LLM", "FastAPI AI", "Document Parsing", "AI Chatbots", "Data Pipelines"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "GraphQL", "SQL/NoSQL"],
    Deployment: ["AWS", "Vercel", "VPS/Hostinger", "Cloudways", "PM2", "NGINX", "CI/CD"],
  };

  const experiences = [
    {
      role: "Full Stack Developer (Frontend & AI Backend Systems)",
      company: "FiveLoop",
      period: "January 2025 – Present",
      location: "Lahore, Pakistan",
      points: [
        "Built scalable full-stack apps using React.js, Next.js, Node.js, Express.js, Nest.js, Python & RAG.",
        "Integrated AI solutions using GPT models for document parsing, chatbot systems, and automated insights.",
        "Developed high-performance backend services with FastAPI alongside Node.js for AI-driven workflows.",
        "Built AI data pipelines for PDF/CSV processing, structured data extraction, and real-time analytics.",
        "Deployed and maintained applications on AWS, VPS, and CI/CD pipelines.",
      ],
      color: "#00e5ff",
    },
    {
      role: "Full Stack Developer (Frontend, Backend & AI Systems)",
      company: "GameNock",
      period: "July 2023 – January 2025",
      location: "Islamabad",
      points: [
        "Built enterprise-level apps using React.js, Next.js, Node.js, Nest.js, Python AI, MongoDB, PostgreSQL.",
        "Worked on US-based healthcare systems — care plans, clinical forms, patient scheduling, HIPAA workflows.",
        "Integrated REST and legacy SOAP APIs in Node.js/Express for real-time data exchange.",
        "Led state management architecture with Redux Toolkit and Context API.",
        "Optimized performance with Next.js SSR, API routes, and dynamic routing.",
      ],
      color: "#a855f7",
    },
    {
      role: "Full Stack Developer",
      company: "DevForHealth",
      period: "February 2022 – July 2023",
      location: "Islamabad, Pakistan",
      points: [
        "Built high-performance web applications using React.js, Next.js, React Native, Node.js, Express, Nest.js.",
        "Developed EHR systems for US hospitals using MERN and PERN stacks.",
        "Built e-commerce solutions and CRM platforms (Podium, MunKpin) with Next.js and TypeScript.",
        "Developed responsive UIs with Tailwind CSS, Bootstrap, Material UI.",
        "Integrated backend RESTful APIs with Node.js and managed complex state with Redux.",
      ],
      color: "#22c55e",
    },
  ];

  return (
    <div
      id="services"
      style={{
        padding: "4rem 1rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Section Title */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg,cyan,#a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Professional Experience
        </span>
        <p style={{ color: darkMode ? "#aaa" : "#666", marginTop: "0.5rem" }}>
          4+ years building scalable full-stack and AI-powered applications
        </p>
      </div>

      {/* Experience Timeline */}
      {experiences.map((exp, i) => (
        <div key={i} style={cardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "0.75rem",
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: exp.color,
                }}
              >
                {exp.company}
              </h3>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "0.9rem",
                  color: darkMode ? "#ccc" : "#444",
                }}
              >
                {exp.role}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <span
                style={{
                  background: "rgba(0,229,255,0.1)",
                  border: "1px solid cyan",
                  color: "cyan",
                  borderRadius: "8px",
                  padding: "2px 10px",
                  fontSize: "0.8rem",
                }}
              >
                {exp.period}
              </span>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "0.8rem",
                  color: darkMode ? "#888" : "#999",
                }}
              >
                {exp.location}
              </p>
            </div>
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.2rem",
              color: darkMode ? "#ccc" : "#555",
              fontSize: "0.88rem",
              lineHeight: "1.7",
            }}
          >
            {exp.points.map((pt, j) => (
              <li key={j}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Skills Section */}
      <div style={{ textAlign: "center", margin: "3rem 0 1.5rem" }}>
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg,cyan,#a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Skills
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: "1.25rem",
        }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            style={{
              ...cardStyle,
              borderLeft: "4px solid #a855f7",
              marginBottom: 0,
            }}
          >
            <h4
              style={{
                margin: "0 0 0.75rem",
                color: "#a855f7",
                fontSize: "0.95rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {category}
            </h4>
            <div>
              {items.map((skill) => (
                <span key={skill} style={badgeStyle}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ textAlign: "center", margin: "3rem 0 1.5rem" }}>
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg,cyan,#a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Education
        </span>
      </div>
      <div style={{ ...cardStyle, borderLeft: "4px solid #22c55e" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <div>
            <h3 style={{ margin: 0, color: "#22c55e", fontSize: "1.05rem" }}>
              Abasyn University
            </h3>
            <p
              style={{
                margin: "2px 0 0",
                color: darkMode ? "#ccc" : "#444",
                fontSize: "0.9rem",
              }}
            >
              Bachelor of Science in Software Engineering (BSSE)
            </p>
          </div>
          <span
            style={{
              background: "rgba(34,197,94,0.1)",
              border: "1px solid #22c55e",
              color: "#22c55e",
              borderRadius: "8px",
              padding: "2px 10px",
              fontSize: "0.8rem",
              alignSelf: "flex-start",
            }}
          >
            2018 – 2022 | Islamabad
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
