import { clubInfo } from "../data/clubData";

export default function About() {
  return (
    // Fond général Blanc w Bleu khfif
    <div className="min-vh-100 py-5" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">

        {/* HERO SECTION */}
        <div className="text-center pt-5 pb-4">
          <h1 className="display-3 fw-bold mb-3" style={{ color: "#3b82f6" }}>
            About Us
          </h1>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Discover the history, vision, and values of the AI &amp; Dev Community Club.
          </p>
        </div>

        {/* SECTION 1: Godmother & History */}
        <div className="card border-0 rounded-5 shadow-sm text-center p-5 my-5 bg-white">
          
          <div className="mb-4">
            <img
              src="./img/SanaaElfilali.png"
              alt="Sanaa El Filali"
              className="rounded-circle shadow-sm"
              style={{ width: "200px", height: "200px", objectFit: "cover", border: "4px solid #eff6ff" }}
            />
            <h3 className="mt-4 fw-bold fs-4 text-dark">Our Godmother</h3>
            <p className="fw-bold fs-5 mt-2" style={{ color: "#3b82f6" }}>
              {clubInfo.fondatrice}
            </p>
          </div>

          <div className="mx-auto" style={{ maxWidth: "800px" }}>
            <h2 className="fw-bold mb-4 fs-2 text-dark">Our History</h2>
            <p className="text-muted fs-6 lh-lg mb-3">
              The AI &amp; Dev Community Club, founded and led by Professor Sanaa El Filali, experienced its first year of existence in 2023-2024, a remarkable year characterized by a rapid increase in its membership.
            </p>
            <p className="text-muted fs-6 lh-lg">
              From its very beginnings, the club has attracted passionate members, united by exceptional collaboration and a shared commitment to innovation. Together, they have put their talents and expertise to work to achieve notable accomplishments, both within the university and beyond.
            </p>
          </div>
        </div>

        {/* SECTION 2: Our Objectives (Bordure Light Blue ghir f Jnab l-ysar) */}
        <div className="my-5 py-4">
          <h2 className="text-center fw-bold mb-5 fs-1 text-dark">Our Objectives</h2>
          <div className="row g-4">
            
            {/* Carte IA */}
            <div className="col-md-4">
              <div className="card h-100 rounded-4 text-start p-4 shadow-sm bg-white"
                style={{ border: "0", borderLeft: "5px solid #bfdbfe", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.15)'; e.currentTarget.style.borderLeftColor = '#3b82f6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderLeftColor = '#bfdbfe'; }}
              >
                <h3 className="fw-bold text-dark fs-4 mb-3">Artificial Intelligence</h3>
                <p className="text-muted fs-6 mb-0">Promote research and development in the field of AI and Machine Learning.</p>
              </div>
            </div>

            {/* Carte Dev */}
            <div className="col-md-4">
              <div className="card h-100 rounded-4 text-start p-4 shadow-sm bg-white"
                style={{ border: "0", borderLeft: "5px solid #bfdbfe", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.15)'; e.currentTarget.style.borderLeftColor = '#3b82f6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderLeftColor = '#bfdbfe'; }}
              >
                <h3 className="fw-bold text-dark fs-4 mb-3">Web Development</h3>
                <p className="text-muted fs-6 mb-0">Master software development technologies and create concrete applications.</p>
              </div>
            </div>

            {/* Carte Culture */}
            <div className="col-md-4">
              <div className="card h-100 rounded-4 text-start p-4 shadow-sm bg-white"
                style={{ border: "0", borderLeft: "5px solid #bfdbfe", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.15)'; e.currentTarget.style.borderLeftColor = '#3b82f6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderLeftColor = '#bfdbfe'; }}
              >
                <h3 className="fw-bold text-dark fs-4 mb-3">Digital Culture</h3>
                <p className="text-muted fs-6 mb-0">Encourage interdisciplinarity and cultural openness through scientific events.</p>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 3: Our Vision */}
        <div className="card border-0 rounded-5 text-center text-white p-5 my-5 position-relative overflow-hidden" style={{ 
            backgroundColor: "#1e3a8a",
            boxShadow: "0 10px 30px rgba(30, 58, 138, 0.2)"
          }}>
          
          <div className="position-relative" style={{ zIndex: "10" }}>
            <h3 className="fw-bold mb-4 display-6 text-white">
              Our Vision
            </h3>
            <p className="fst-italic mx-auto fs-5 lh-lg mb-0" style={{ maxWidth: "900px", color: "#bfdbfe" }}>
              "Our club is not just a meeting place, but a space where ideas come to life and where every member finds the inspiration to push their limits. Together, we have proven that learning and sharing can transform passions into concrete skills. Every project, every event has been an opportunity to grow and build a supportive and dynamic network."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}