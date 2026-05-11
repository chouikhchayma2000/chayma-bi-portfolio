export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chayma Chouikh",
    jobTitle: "BI Student and Data Analyst",
    url: "https://your-domain.com",
    sameAs: ["https://www.linkedin.com/in/chayma-chouikh/"],
    knowsAbout: [
      "Business Intelligence",
      "Data Analysis",
      "SQL",
      "Power BI",
      "Python",
      "Machine Learning",
      "SSIS",
      "SSAS",
      "OLAP Cubes",
      "Data Warehousing",
      "Dashboards",
      "Reporting"
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
