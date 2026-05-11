import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agricultural Climate Prediction using Machine Learning",
  description: "Data science project using NASA POWER climate data, Python, EDA and machine learning to predict temperature and optimize agricultural planning in Radès.",
  alternates: { canonical: "/projects/agricultural-climate-prediction" }
};

export default function AgriculturalClimatePredictionPage() {
  return (
    <section className="section">
      <div className="container article">
        <p className="breadcrumb">Home / Projects / Agricultural Climate Prediction</p>
        <h1>Agricultural Climate Prediction using Machine Learning</h1>
        <img className="project-hero-image" src="/images/climate-project.svg" alt="Agricultural climate prediction data science project with NASA POWER and machine learning" />

        <p>
          This data science project analyzes climate conditions in Radès to support agricultural planning. It uses five years of meteorological data to study temperature, precipitation, humidity, heatwaves and frost risk.
        </p>

        <div className="kpi-grid">
          <div className="kpi"><strong>5 years</strong><span>climate data</span></div>
          <div className="kpi"><strong>NASA</strong><span>POWER API</span></div>
          <div className="kpi"><strong>MAE 1.77°C</strong><span>best model</span></div>
          <div className="kpi"><strong>Radès</strong><span>agricultural planning</span></div>
        </div>

        <h2>Project Objective</h2>
        <p>
          The objective is to understand climate patterns in Radès and build a predictive model that estimates the maximum temperature of the next day. The final goal is to help optimize the agricultural calendar and improve irrigation decisions.
        </p>

        <h2>Data Source</h2>
        <p>
          The dataset comes from the NASA POWER API. The collected variables include minimum temperature, maximum temperature, relative humidity, wind speed, solar radiation and daily precipitation.
        </p>

        <h2>Data Cleaning</h2>
        <p>
          The preprocessing phase handles missing values, converts wind units, corrects date formats, removes duplicates and anomalies, and standardizes data types to prepare a clean dataset for analysis and modeling.
        </p>

        <h2>Feature Engineering</h2>
        <p>
          New variables are created to better capture climate dynamics, including month, day, weekday, season, heatwave indicators, frost day indicators, rainy day indicators and the next-day maximum temperature target.
        </p>

        <h2>Exploratory Data Analysis</h2>
        <ul>
          <li>Radès shows very hot and dry summers with high irrigation needs.</li>
          <li>Rainfall is irregular, with many days at 0 mm.</li>
          <li>Heatwaves mainly occur between June and September.</li>
          <li>Frost risk is low because winters are generally mild.</li>
          <li>Low humidity in summer increases water stress for crops.</li>
        </ul>

        <h2>Predictive Modeling</h2>
        <p>
          Three models are compared: Linear Regression, Decision Tree and KNN. Linear Regression achieved the best performance, with a MAE of about 1.77°C, making it the most reliable model for predicting tomorrow’s maximum temperature in this project.
        </p>

        <h2>Agricultural Impact</h2>
        <p>
          The model helps anticipate hot days and supports better irrigation planning. Based on the analysis, an agricultural calendar for tomato cultivation in Radès is proposed, covering sowing, transplanting, flowering, fruiting and harvesting periods.
        </p>
      </div>
    </section>
  );
}
