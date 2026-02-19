import './components.css'
import logo from '../assets/logo.png'
import LeadModal from './LeadModal'
import { useState } from 'react'
import { NavLink } from "react-router-dom";

function MobileMenu({ open, onClose }) {
  const [openModal, setOpenModal] = useState(false); // ✅ har doim tepada

  if (!open) return null;

  return (
    <div
      className={`menu-overlay ${open ? "show" : ""}`}
      onClick={onClose}
    >
      <div
        className={`menu-panel ${open ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="menu-close" onClick={onClose}>
          ×
        </button>

        <div className="menu-head">
          <div className="menu-header">
            <img src={logo} alt="School" />
            <h2>ZAMAXSHARIY <br /> IZDOSHLARI</h2>
          </div>

          <nav className="menu-links">
            <NavLink to="/" onClick={onClose}>Bosh sahifa</NavLink>
            <NavLink to="/about" onClick={onClose}>Biz haqimizda</NavLink>
            <NavLink to="/vacansy" onClick={onClose}>Karyera</NavLink>
          </nav>
        </div>

        <button
          className="menu-cta"
          onClick={() => setOpenModal(true)}
        >
          Konsultatsiya olish
        </button>
      </div>

      <LeadModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default MobileMenu;
