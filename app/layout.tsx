
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chayma-bi-portfolio.vercel.app"),

  title: {
    default: "Chayma Chouikh | BI Student & Data Analyst Portfolio",
    template: "%s | Chayma Chouikh"
  },

  description:
    "Portfolio of Chayma Chouikh, BI student and data analyst focused on SQL, Power BI, Python, SSIS, SSAS, OLAP cubes, dashboards and machine learning projects.",

  keywords: [
    "BI Student",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "SSIS",
    "SSAS",
    "Data Warehouse",
    "Machine Learning"
  ],

  authors: [{ name: "Chayma Chouikh" }],
  creator: "Chayma Chouikh",

  openGraph: {
    title: "Chayma Chouikh | BI Student & Data Analyst Portfolio",
    description:
      "Explore BI, data warehouse, dashboard and machine learning projects by Chayma Chouikh.",
    url: "https://chayma-bi-portfolio.vercel.app",
    siteName: "Chayma Chouikh Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Chayma Chouikh BI Student and Data Analyst Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Chayma Chouikh | BI Student & Data Analyst Portfolio",
    description:
      "BI and data analysis portfolio with SSIS, SSAS, Power BI, Python and machine learning projects.",
    images: ["/og-image.svg"]
  },


};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}