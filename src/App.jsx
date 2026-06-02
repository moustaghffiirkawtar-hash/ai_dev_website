import "./index.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UpcomingEvents from "./pages/UpcomingEvents.jsx";
import Footer from "./components/Footer";
import ListOfMembers from "./pages/ListeOfMembers.jsx";
import Contact from "./pages/Contact.jsx";
import PastEvents from "./pages/PastEvents.jsx";
import About from "./pages/About";

const routes = [
  { path: "/", text: "Home", component: Home },
  { path: "/about", text: "About", component: About },
  { path: "/list-of-members", text: "Members", component: ListOfMembers },
  { path: "/upcoming-events", text: "Upcoming", component: UpcomingEvents },
  { path: "/past-events", text: "Past Events", component: PastEvents },
  { path: "/contact", text: "Contact", component: Contact },
];

const joinLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSdu_abXzvs4gCvMcGVI3BvOTdo4Sn_tCop03G0CrhUkmEHYJA/viewform?urp=gmail_link";

function App() {
  return (
    <BrowserRouter>
      {/* Wrapper to push footer to bottom */}
      <div className="d-flex flex-column min-vh-100">
        {/* 1. NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 sticky-top">
          <div className="container">
            <NavLink
              to="/"
              className="navbar-brand d-flex align-items-center gap-2 fw-bold text-dark"
            >
              <img
                src="/img/logo.png"
                alt="AI & Dev Community Logo"
                style={{ width: "36px", height: "36px", objectFit: "contain" }}
              />
              <span className="fs-5">AI & Dev Community</span>
            </NavLink>

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav ms-auto d-flex align-items-center gap-1">
                {routes.map(({ path, text }) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === "/"}
                    className={({ isActive }) =>
                      "nav-link px-3 py-2 rounded-3 " +
                      (isActive
                        ? "text-primary fw-semibold bg-light"
                        : "text-secondary")
                    }
                  >
                    {text}
                  </NavLink>
                ))}

                {/* Join Us Button */}
                <a
                  href={joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-4 py-2 rounded-pill ms-3 fw-bold shadow-sm"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* 2. MAIN CONTENT */}
        {/* flex-grow-1 ensures this section takes up available space */}
        <main className="flex-grow-1">
          <div className="container mt-5 mb-5">
            <Routes>
              {routes.map(({ path, component: Comp }) => (
                <Route key={path} path={path} element={<Comp />} />
              ))}
            </Routes>
          </div>
        </main>

        {/* 3. FOOTER (Outside the Nav and Main) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
