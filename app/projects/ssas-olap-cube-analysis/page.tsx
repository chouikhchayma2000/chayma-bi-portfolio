import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSAS OLAP Cube Analysis Project | Chayma Chouikh",
  description:
    "BI project by Chayma Chouikh using SSAS, an OLAP cube, MDX and a marketing data warehouse to analyze impressions, clicks, conversions, cost and sales.",
  alternates: {
    canonical: "/projects/ssas-olap-cube-analysis"
  }
};

export default function SsasOlapCubeAnalysisPage() {
  return (
    <section className="section">
      <div className="container article">
        <p className="breadcrumb">Home / Projects / SSAS OLAP Cube Analysis</p>

        <h1>SSAS OLAP Cube Analysis Project</h1>

        <img
          className="project-hero-image"
          src="/images/olap-cube-project.svg"
          alt="Professional visual of an SSAS OLAP cube used for marketing analytics with dimensions and measures"
        />

        <p>
          This Business Intelligence project focuses on building and exploring an
          OLAP cube using SQL Server Analysis Services. The cube is based on a
          marketing data warehouse and is designed to analyze campaign performance
          across date, device, location, campaign and advertisement dimensions.
        </p>

        <div className="kpi-grid">
          <div className="kpi"><strong>SSAS</strong><span>OLAP cube</span></div>
          <div className="kpi"><strong>MDX</strong><span>analytical queries</span></div>
          <div className="kpi"><strong>DW</strong><span>fact and dimensions</span></div>
          <div className="kpi"><strong>KPIs</strong><span>marketing performance</span></div>
        </div>

        <h2>Project Objective</h2>
        <p>
          The objective is to transform cleaned marketing data into a structured
          analytical model that supports fast multidimensional analysis. The cube
          helps users understand impressions, clicks, conversions, cost and sales
          from several business perspectives.
        </p>

        <h2>Data Warehouse Preparation</h2>
        <p>
          Before creating the cube, the data is cleaned and organized into a data
          warehouse. A fact table stores numeric measures, while dimension tables
          describe the context of analysis such as date, device, campaign, location
          and advertisement.
        </p>

        <h2>Cube Design</h2>
        <p>
          The SSAS cube connects measures from the fact table with business
          dimensions. This design allows aggregated results to be calculated by the
          OLAP engine, making analysis easier and faster than querying raw tables
          directly.
        </p>

        <h2>OLAP Operations Applied</h2>
        <ul>
          <li>Drill-down: analyze data from year to quarter, month and day.</li>
          <li>Roll-up: summarize detailed daily results into monthly or yearly totals.</li>
          <li>Slice: filter the cube by one dimension, for example Device = Mobile.</li>
          <li>Dice: filter by several dimensions such as device, location and campaign.</li>
          <li>Pivot: change the view of dimensions to compare results from different angles.</li>
        </ul>

        <h2>Measures and KPIs</h2>
        <ul>
          <li>Impressions</li>
          <li>Clicks</li>
          <li>Conversions</li>
          <li>Cost</li>
          <li>Sales amount</li>
          <li>Click-through rate and conversion analysis</li>
          <li>Campaign performance comparison</li>
        </ul>

        <h2>MDX Analysis</h2>
        <p>
          MDX queries are used to explore the cube and retrieve aggregated results.
          This makes it possible to compare marketing performance by campaign,
          device, location and time period while keeping the analysis structured and
          reusable.
        </p>

        <h2>Skills Applied</h2>
        <p>
          This project demonstrates knowledge of dimensional modeling, data
          warehouse preparation, SSAS cube creation, OLAP operations, KPI analysis,
          MDX querying and business-oriented interpretation of marketing data.
        </p>
      </div>
    </section>
  );
}
