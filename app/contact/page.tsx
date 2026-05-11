import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Chayma Chouikh",
  description:
    "Contact Chayma Chouikh for BI, data analysis, dashboarding, reporting or internship opportunities.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container article">
        <p className="breadcrumb">Home / Contact</p>

        <h1>Contact</h1>

        <p>
          I am open to BI, data analysis, dashboard, reporting and internship
          opportunities.
        </p>

       <div className="grid-3 contact-grid">
  <article className="card contact-card">
    <div className="contact-icon">in</div>
    <h2>LinkedIn</h2>
    <p>
      Connect with me on LinkedIn to discuss Business Intelligence,
      data analysis or internship opportunities.
    </p>
    <a
      className="project-link"
      href="https://www.linkedin.com/in/chayma-chouikh/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open LinkedIn
    </a>
  </article>

  <article className="card contact-card">
    <div className="contact-icon">GH</div>
    <h2>GitHub</h2>
    <p>
      View my code, academic projects and data analysis work on GitHub.
    </p>
    <a
      className="project-link"
      href="https://github.com/chaima347/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open GitHub
    </a>
  </article>

  <article className="card contact-card">
    <div className="contact-icon">@</div>
    <h2>Email</h2>
    <p>
      Contact me through my institution email for academic or professional
      opportunities.
    </p>
    <a
      className="project-link"
      href="mailto:chayma.chouikh@rades.r-iset.tn"
    >
      chayma.chouikh@rades.r-iset.tn
    </a>
  </article>
</div>
      </div>
    </section>
  );
}