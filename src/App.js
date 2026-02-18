import { Routes, Route, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Vacansy from "./pages/vacancy";
import LeadModal from "./components/LeadModal";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/footer";
import "./App.css";
import logo from "./assets/logo.png";
import AdminPage from "./pages/admin";
import { VacancyProvider } from "./context/VacancyContext";
import { AuthProvider } from "./context/AuthContext";
import AdminLogin from "./pages/AdminLogin";
import ProtectedAdmin from "./components/ProtectedAdmin";
import ApplicationModal from "./components/ApplicationModal";

function App() {
  // const [openModal, setOpenModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const [phoneClicks, setPhoneClicks] = useState([]);
  const location = useLocation();

  const [openLeadModal, setOpenLeadModal] = useState(false);
  const [openVacancyModal, setOpenVacancyModal] = useState(false);

  const hideLayout =
    location.pathname === "/admin-login" ||
    location.pathname === "/dashboard";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <AuthProvider>
      <VacancyProvider>
        {!hideLayout && (
          <nav className="navbar">
            <NavLink to="/">
              <div className="logo frame">
                <img className="logo" src={logo} alt="logo" />
              </div>
            </NavLink>

            <div className="nav-items">
              <p
                onClick={() => {
                  const now = Date.now();

                  const updated = [...phoneClicks, now].filter(
                    (t) => now - t < 5000 // 5 soniya ichida
                  );

                  setPhoneClicks(updated);

                  if (updated.length >= 3) {
                    navigate("/admin-login");
                    setPhoneClicks([]);
                  }
                }}
              >
                +998123456789
              </p>

              <button
                className="contact"
                onClick={() => {
                  if (location.pathname === "/vacansy") {
                    setOpenVacancyModal(true);
                  } else {
                    setOpenLeadModal(true);
                  }
                }}
              >
                {location.pathname === "/vacansy"
                  ? "Ariza topshirish"
                  : "Bog'lanish"}
              </button>

              <button
                className="drpdwn"
                onClick={() => setMenuOpen(true)}
              >
                <i className="fa-solid fa-bars"></i>
              </button>

              <button
                className="theme-switch"
                onClick={() =>
                  setTheme(theme === "light" ? "dark" : "light")
                }
              >
                <i
                  className={`fa-solid ${
                    theme === "light" ? "fa-moon" : "fa-sun"
                  }`}
                ></i>
              </button>
            </div>
          </nav>
        )}

          <LeadModal
            open={openLeadModal}
            onClose={() => setOpenLeadModal(false)}
          />

          <ApplicationModal
            open={openVacancyModal}
            onClose={() => setOpenVacancyModal(false)}
          />

          <MobileMenu
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          />

          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vacansy" element={<Vacansy />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedAdmin>
              <AdminPage />
            </ProtectedAdmin>
          }
        />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
              
            {!hideLayout && (
              <Footer />
            )}
      </VacancyProvider>
    </AuthProvider>
  );
}

export default App;
