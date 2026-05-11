import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Chayma Chouikh",
  description:
    "BI and Data Analyst skills of Chayma Chouikh including SQL, Power BI, SSIS, SSAS, Python, EDA, machine learning and data visualization.",
  alternates: {
    canonical: "/skills"
  }
};

const skillGroups = [
  {
    title: "BI & Data Warehousing",
    icon: "▦",
    description:
      "Building structured data models, ETL pipelines and analytical layers for decision-making.",
    level: 85,
    skills: [
      "SQL Server",
      "SSIS",
      "SSAS",
      "ETL",
      "Staging",
      "Star Schema",
      "OLAP Cubes",
      "KPIs"
    ]
  },
  {
    title: "Data Analysis",
    icon: "◈",
    description:
      "Cleaning, exploring and transforming raw data into meaningful business insights.",
    level: 82,
    skills: [
      "Python",
      "Pandas",
      "Data Cleaning",
      "EDA",
      "Feature Engineering",
      "Visualization",
      "Reporting"
    ]
  },
  {
    title: "Machine Learning",
    icon: "✦",
    description:
      "Applying predictive models and evaluating their performance with clear metrics.",
    level: 72,
    skills: [
      "Linear Regression",
      "Decision Tree",
      "KNN",
      "Model Evaluation",
      "MAE",
      "RMSE",
      "Prediction"
    ]
  },
  {
    title: "Dashboarding & Reporting",
    icon: "▣",
    description:
      "Designing visual dashboards and reports that support business understanding.",
    level: 78,
    skills: [
      "Power BI",
      "Excel",
      "Charts",
      "Dashboards",
      "Business KPIs",
      "Storytelling",
      "Decision Support"
    ]
  }
];
const certifications = [
  {
    title: "Python 101 for Data Science",
    provider: "Cognitive Class / IBM",
    date: "October 15, 2025",
    description:
      "Introductory Python certification focused on programming fundamentals for data science.",
    skills: ["Python", "Data Science", "Programming"],
    file: "/certificates/python-101-data-science.pdf"
  },
  {
    title: "Data Analysis with Python",
    provider: "Cognitive Class / IBM",
    date: "November 14, 2025",
    description:
      "Data analysis certification covering Python-based analysis, data manipulation and analytical thinking.",
    skills: ["Python", "Data Analysis", "Pandas"],
    file: "/certificates/data-analysis-with-python.pdf"
  },
  {
    title: "Practicing Test Driven Development with Python",
    provider: "Cognitive Class / BDU",
    date: "2026",
    description:
      "Python certification focused on test-driven development practices and writing more reliable code.",
    skills: ["Python", "TDD", "Testing"],
    file: "/certificates/test-driven-development-python.pdf"
  }
];

export default function SkillsPage() {
  return (
    <section className="section skills-section">
      <div className="container">
        <div className="skills-hero">
          <p className="eyebrow">Skills</p>
          <h1>BI and Data Analyst skills.</h1>
          <p>
            A practical skill set developed through data warehousing, analytics,
            dashboarding and machine learning projects.
          </p>
        </div>

        <div className="skills-grid-pro">
          {skillGroups.map((group) => (
            <article className="skill-card-pro" key={group.title}>
              <div className="skill-card-header">
                <div className="skill-icon-box">{group.icon}</div>
                <div>
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skill-progress">
                <div className="skill-progress-top">
                  <span>Practical level</span>
                  <strong>{group.level}%</strong>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${group.level}%` }}
                  ></div>
                </div>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="certifications-section">
  <div className="section-title small-title">
    <p className="eyebrow">Certifications</p>
    <h2>Certifications & continuous learning.</h2>
    <p>
      Verified learning achievements that support my Python, data analysis and
      data science skills.
    </p>
  </div>

  <div className="certifications-grid">
    {certifications.map((cert) => (
      <article className="cert-card" key={cert.title}>
        <div className="cert-top">
          <span className="cert-icon">🎓</span>
          <span className="cert-date">{cert.date}</span>
        </div>

        <h3>{cert.title}</h3>

        <p className="cert-provider">{cert.provider}</p>

        <p>{cert.description}</p>

        <div className="tags">
          {cert.skills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <a
          className="btn secondary cert-download"
          href={cert.file}
          download
        >
          Download Certificate
        </a>
      </article>
    ))}
  </div>
</div>
        
      </div>
      
    </section>
    
    
  );
  
}
