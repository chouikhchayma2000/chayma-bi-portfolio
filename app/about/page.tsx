import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Chayma Chouikh",
  description:
    "Learn more about Chayma Chouikh, BI student and future Data Analyst focused on SQL, Power BI, SSIS, SSAS, Python, dashboards and predictive analytics.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container about-layout">
        <div className="about-photo-card">
          <Image
            src="/images/pp.jpg"
            alt="Portrait of Chayma Chouikh, BI student and data analyst"
            width={260}
            height={260}
            className="about-photo"
            priority
          />
        </div>

        <div className="about-text">
          <p className="breadcrumb">Home / About</p>

          <h1>About Chayma Chouikh</h1>

          <p>
            I am a Business Intelligence student and future Data Analyst. My work
            focuses on transforming raw data into meaningful insights through data
            cleaning, exploratory analysis, dashboards, ETL processes, dimensional
            modeling and predictive analytics.
          </p>

          <p>
            My portfolio highlights academic and practical projects using tools such
            as SQL Server, SSIS, SSAS, Python, Power BI and machine learning models.
            I am especially interested in projects where data supports real decisions,
            such as purchasing performance analysis and climate-based agricultural
            planning.
          </p>
        </div>
      </div>
    </section>
  );
}