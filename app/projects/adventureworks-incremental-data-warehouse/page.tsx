import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AdventureWorks Incremental Data Warehouse with SSIS",
  description: "BI project using SSIS and AdventureWorks to build an incremental data warehouse for purchasing analysis with staging, data profiling, star schema and KPIs.",
  alternates: { canonical: "/projects/adventureworks-incremental-data-warehouse" }
};

export default function AdventureWorksProjectPage() {
  return (
    <section className="section">
      <div className="container article">
        <p className="breadcrumb">Home / Projects / AdventureWorks Data Warehouse</p>
        <h1>AdventureWorks Incremental Data Warehouse with SSIS</h1>
        <img className="project-hero-image" src="/images/adventureworks-project.svg" alt="AdventureWorks incremental data warehouse SSIS ETL architecture" />

        <p>
          This Business Intelligence project presents the design and implementation of an incremental data warehouse using SQL Server Integration Services. The analysis is based on the AdventureWorks OLTP database and focuses on the purchasing process.
        </p>

        <div className="kpi-grid">
          <div className="kpi"><strong>SSIS</strong><span>ETL pipeline</span></div>
          <div className="kpi"><strong>Star</strong><span>schema design</span></div>
          <div className="kpi"><strong>Incremental</strong><span>loading strategy</span></div>
          <div className="kpi"><strong>KPIs</strong><span>purchasing analysis</span></div>
        </div>

        <h2>Project Objective</h2>
        <p>
          The goal is to extract purchasing and product-related data, load it into staging tables, clean and transform it, then populate a dimensional model for purchasing performance analysis.
        </p>

        <h2>Extraction Phase</h2>
        <p>
          Data is extracted from AdventureWorks purchasing and production tables, including ship methods, vendors, purchase order headers, purchase order details, products, product subcategories and product categories. The extracted records are first loaded into staging tables.
        </p>

        <h2>Incremental Control</h2>
        <p>
          An incremental ETL approach is used. A control table stores the last extraction time for each source table. The extraction is based on the ModifiedDate column, which allows the process to load only new and updated records.
        </p>

        <h2>Transformation Phase</h2>
        <ul>
          <li>Data profiling is executed on staging tables to detect quality issues.</li>
          <li>Null descriptive attributes are replaced with N/A.</li>
          <li>Missing Size and Color values are extracted from product names.</li>
          <li>Products with invalid pricing are redirected to a reject file.</li>
          <li>Duplicate vendors are removed and the most recent record is selected using ModifiedDate.</li>
        </ul>

        <h2>Loading Phase and Star Schema</h2>
        <p>
          Dimension tables are loaded before the fact table. Surrogate keys are generated and lookup transformations are used to resolve dimension keys. The final star schema includes DimProduct, DimVendor, DimShipMethod, DimDate and a purchasing fact table.
        </p>

        <h2>Fact Table Grain and Measures</h2>
        <p>
          The fact table grain is one purchase order line for one product from one vendor on specific dates. Measures include order quantity, unit price, line total, received quantity, rejected quantity and stocked quantity.
        </p>

        <h2>Key Performance Indicators</h2>
        <ul>
          <li>Total Ordered Quantity</li>
          <li>Total Received Quantity</li>
          <li>Total Rejected Quantity</li>
          <li>Total Stocked Quantity</li>
          <li>Order Fulfillment Rate</li>
          <li>Rejection Rate</li>
          <li>Inventory Acceptance Rate</li>
          <li>Total Purchase Cost</li>
        </ul>
      </div>
    </section>
  );
}
