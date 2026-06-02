import "./index.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UpcomingEvents from "./pages/UpcomingEvents.jsx";
import ListOfMembers from "./pages/ListeOfMembers.jsx";

const routes = [
  { path: "/", text: "Home", component: Home },
  {
    path: "/UpcomingEvents",
    text: "Upcoming Events",
    component: UpcomingEvents,
  },
  { path: "/ListOfMembers", text: "List Of Members", component: ListOfMembers },
];

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg club-navbar shadow-sm">
        <div className="container">
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center gap-2"
          >
            <img
              src="/img/logo.png"
              alt="AI & Dev Community Logo"
              style={{ width: "36px", height: "36px", objectFit: "contain" }}
            />
            AI &amp; Dev Community
          </NavLink>

          <div className="navbar-nav ms-auto d-flex flex-row gap-1">
            {routes.map(({ path, text }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                {text}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          {routes.map(({ path, component: Comp }) => (
            <Route key={path} path={path} element={<Comp />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
