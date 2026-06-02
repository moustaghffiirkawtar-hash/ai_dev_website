import { NavLink } from "react-router-dom";

const joinLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSdu_abXzvs4gCvMcGVI3BvOTdo4Sn_tCop03G0CrhUkmEHYJA/viewform?urp=gmail_link";

function Home() {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="text-center mb-4 animate-fade-in">
        <img
          src="/img/logo.png"
          alt="AI & Dev Community Logo"
          className="mb-4"
          style={{ width: "100px", height: "100px", objectFit: "contain" }}
        />
        <h1
          className="display-5 fw-bold mb-2"
          style={{ color: "var(--club-blue)" }}
        >
          Welcome to the Community
        </h1>
        <h2 className="fs-3 fw-normal" style={{ color: "var(--club-teal)" }}>
          AI &amp; Dev Community
        </h2>
      </div>

      <div className="d-flex gap-3 mb-5">
        <NavLink
          to="/upcoming-events"
          className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow-sm"
        >
          View Events
        </NavLink>
        <a
          href={joinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold"
        >
          Join Us
        </a>
      </div>

      <div
        className="card border-0 shadow-sm p-4 text-center bg-white"
        style={{ maxWidth: "600px" }}
      >
        <p className="lead mb-3" style={{ color: "var(--club-blue)" }}>
          Explore the future of artificial intelligence and software development
          with us.
        </p>
        <p className="text-muted mb-0">
          We build, learn, and grow together — tackling everything from machine
          learning projects to real-world development challenges in a supportive
          environment.
        </p>
      </div>
    </div>
  );
}

export default Home;
