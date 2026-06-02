import { clubInfo } from "../data/clubData";

export default function PastEvents() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark mb-3">
          Our Achievements & Past Events
        </h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
          A remarkable first year characterized by rapid membership growth and
          notable achievements.
        </p>
      </div>

      {/* Events Grid */}
      <div className="row g-4">
        {clubInfo.pastEvents.map((event) => (
          <div key={event.id} className="col-md-6 col-lg-4">
            {/* Interactive Card */}
            <div
              className="card h-100 border-0 shadow-sm event-card"
              style={{
                transition: "all 0.4s ease",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <div className="card-body d-flex flex-column p-4">
                {/* Date Badge */}
                <span
                  className="badge rounded-pill bg-light text-primary fs-6 mb-3 align-self-start"
                  style={{ fontWeight: "600" }}
                >
                  📅 {event.date}
                </span>

                {/* Title */}
                <h2 className="h4 fw-bold text-dark mb-3">{event.title}</h2>

                {/* Description */}
                <p className="card-text text-muted small flex-grow-1">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for Hover Effect (Injected) */}
      <style>
        {`
          .event-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
            border-color: #0d6efd !important;
          }
          .event-card:hover .card-body {
            background-color: #f8f9fa;
          }
        `}
      </style>
    </div>
  );
}
