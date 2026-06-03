import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UpcomingEvents from "./pages/UpcomingEvents.jsx";
import Footer from "./components/Footer";
import ListOfMembers from "./pages/ListeOfMembers.jsx";
import Contact from "./pages/Contact.jsx";
import PastEvents from "./pages/PastEvents.jsx";
import About from "./pages/About";
import Navbar from "./components/Navbar.jsx";

const routes = [
  { path: "/", text: "Home", component: Home },
  { path: "/about", text: "About", component: About },
  { path: "/list-of-members", text: "Members", component: ListOfMembers },
  { path: "/upcoming-events", text: "Upcoming", component: UpcomingEvents },
  { path: "/past-events", text: "Past Events", component: PastEvents },
  { path: "/contact", text: "Contact", component: Contact },
];

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar routes={routes} />

        <main className="flex-grow-1">
          <div className="container mt-5 mb-5">
            <Routes>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
