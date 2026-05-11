import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "BI and data science projects by Chayma Chouikh: SSIS incremental data warehouse, SSAS OLAP cube, AdventureWorks, climate prediction, Python and machine learning.",
  alternates: { canonical: "/projects" }
};

const projects = [
  {
    title: "AdventureWorks Incremental Data Warehouse",
    description: "A Business Intelligence project using SSIS and AdventureWorks to build an incremental ETL pipeline, staging area, star schema and purchasing KPIs.",
    href: "/projects/adventureworks-incremental-data-warehouse",
    image: "/images/adventureworks-project.svg",
    tags: ["SSIS", "SQL Server", "Data Warehouse", "ETL", "KPIs"]
  },
  {
    title: "SSAS OLAP Cube Analysis",
    description: "A Business Intelligence project using SSAS and MDX to analyze marketing performance through OLAP operations such as slice, dice, drill-down, roll-up and pivot.",
    href: "/projects/ssas-olap-cube-analysis",
    image: "/images/olap-cube-project.svg",
    tags: ["SSAS", "OLAP", "MDX", "Data Warehouse", "Marketing Analytics"]
  },
  {
    title: "Agricultural Climate Prediction",
    description: "A data science project using NASA POWER climate data, EDA and machine learning to predict tomorrow’s maximum temperature and optimize agricultural planning in Radès.",
    href: "/projects/agricultural-climate-prediction",
    image: "/images/climate-project.svg",
    tags: ["Python", "Machine Learning", "EDA", "NASA POWER", "Climate"]
  }
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">Projects</p>
          <h1>Real BI, OLAP and Data Science projects.</h1>
          <p>Professional case studies with objective, methodology, tools, results and decision-making value.</p>
        </div>
        <div className="grid-2">
          {projects.map((project) => (
            <article className="card project-card" key={project.href}>
              <img src={project.image} alt={`${project.title} case study illustration`} />
              <div className="project-body">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <Link className="btn primary" href={project.href}>Open project</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
