import Link from "next/link";

const projects = [
  {
    title: "AdventureWorks Incremental Data Warehouse",
    description: "Incremental ETL and star schema data warehouse using SSIS and AdventureWorks for purchasing analysis.",
    href: "/projects/adventureworks-incremental-data-warehouse",
    image: "/images/adventureworks-project.svg",
    tags: ["SSIS", "SQL Server", "ETL", "Star Schema"]
  },
  {
    title: "SSAS OLAP Cube Analysis",
    description: "OLAP cube project using SSAS and MDX to analyze marketing KPIs with slice, dice, drill-down, roll-up and pivot operations.",
    href: "/projects/ssas-olap-cube-analysis",
    image: "/images/olap-cube-project.svg",
    tags: ["SSAS", "OLAP", "MDX", "Marketing Analytics"]
  },
  {
    title: "Agricultural Climate Prediction",
    description: "Machine learning project using NASA POWER climate data to predict tomorrow’s maximum temperature and support agricultural planning in Radès.",
    href: "/projects/agricultural-climate-prediction",
    image: "/images/climate-project.svg",
    tags: ["Python", "EDA", "Machine Learning", "Climate Data"]
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">BI Student • Data Analyst • Data Science</p>
            <h1>Turning data into clear insights and decisions.</h1>
            <p className="lead">
              I am Chayma Chouikh, a Business Intelligence student focused on data analysis,
              dashboards, ETL, data warehousing, OLAP cubes and machine learning projects using SQL,
              Power BI, SSIS, SSAS and Python.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/projects">View Projects</Link>
              <a className="btn secondary" href="https://www.linkedin.com/in/chayma-chouikh/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </div>
            <div className="hero-stats" aria-label="Portfolio highlights">
              <div className="stat"><strong>3</strong><span>real BI/Data projects</span></div>
              <div className="stat"><strong>OLAP</strong><span>SSAS cube and MDX</span></div>
              <div className="stat"><strong>ML</strong><span>Python predictive modeling</span></div>
            </div>
          </div>
          <div className="visual-card">
  <div className="animated-svg-card">
    <img
      src="/icons/d.png"
      alt="Animated data science visual"
      className="hero-svg-motion"
    />

    
  </div>
</div>
        </div>
      </section>

      <section className="section compact">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Featured Projects</p>
            <h2>Selected work in Business Intelligence and Data Science.</h2>
            <p>Each project page explains the objective, data, methodology, tools and business impact.</p>
          </div>
          <div className="grid-2">
            {projects.map((project) => (
              <article className="card project-card" key={project.href}>
                <img src={project.image} alt={`${project.title} project visual`} />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                  <Link className="btn secondary" href={project.href}>Read case study</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container grid-3">
          <div className="card">
            <h3>Data Analysis</h3>
            <p>Exploratory analysis, data cleaning, feature engineering and interpretation of business or climate data.</p>
          </div>
          <div className="card">
            <h3>Business Intelligence</h3>
            <p>ETL pipelines, staging areas, dimensional modeling, star schemas, KPIs and OLAP analysis.</p>
          </div>
          <div className="card">
            <h3>Visualization</h3>
            <p>Dashboards, charts and storytelling focused on clear insights and decision support.</p>
          </div>
        </div>
      </section>
    </>
  );
}
