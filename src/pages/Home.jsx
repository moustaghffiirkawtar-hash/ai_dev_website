function Home() {
  return (
    <div className="text-center mt-5">
      {/* jumbotron was removed in Bootstrap 5 — use p-5 + bg-light instead */}
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h1 className="display-4 fw-bold" style={{ color: "var(--club-blue)" }}>
          Bienvenue dans le site web du club
        </h1>
        <h2 className="fs-3 mt-2" style={{ color: "var(--club-teal)" }}>
          AI &amp; Dev Community
        </h2>
        <p className="lead mt-3 text-muted">
          Join us in exploring the future of artificial intelligence and
          software development.
        </p>
        <hr className="my-4" />
        <p
          className="text-muted"
          style={{ maxWidth: "520px", margin: "0 auto" }}
        >
          We build, learn, and grow together — from machine learning projects to
          real-world dev challenges.
        </p>
      </div>
    </div>
  );
}

export default Home;
