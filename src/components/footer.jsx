import './components.css'
import LeadModal from './LeadModal';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import ApplicationModal from './ApplicationModal';

function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const [openVacancyModal, setOpenVacancyModal] = useState(false);
  const location = useLocation();
  
  return (
    <>
      <footer className="footer">

          <div className="footer-content">
                 <div className="footer-logo">
                  <div className='flogo'>
                    <img src={logo} alt="logo" />
                      <h4>ZAMAXSHARIY <br /> IZDOSHLARI</h4>
                  </div>

                  <button
                    className="f-btn"
                    onClick={() => {
                      if (location.pathname === "/vacansy") {
                        setOpenVacancyModal(true);
                      } else {
                        setOpenModal(true);
                      }
                    }}
                  >
                    {location.pathname === "/vacansy"
                      ? "Ariza topshirish"
                      : "Bog'lanish"}
                  </button>
                </div>

                  <div className="footer-contact">
                    <h3>Aloqa uchun</h3>
                    <div className="footer-pages">
                      <NavLink to="/">Bosh sahifa</NavLink>
                      <NavLink to="/about">Biz haqimizda</NavLink>
                      <NavLink to="/vacansy">Karyera</NavLink>
                    </div>
                  </div>

                  <div className="footer-social">
                      <h3>Bizning ijtimoiy tarmoqlarimiz</h3>
                      <div className="social-m">
                          <div className="media-icon">
                              <i className="fa-brands fa-youtube"></i>
                              <a href='https://youtube.com/'>YouTube</a>
                          </div>
                          <div className="media-icon">
                              <i className="fa-brands fa-instagram"></i>
                              <a href='https://indtagram.com/'>Instagram</a>
                          </div>
                          <div className="media-icon">
                              <i className="fa-brands fa-telegram"></i>
                              <a href='https://google.com/'>Telegram</a>
                          </div>
                      </div>
                  </div>

                  <div className="footer-c">
                    <h3>Biz bilan bog'laning</h3>

                    <div className="f-cs">
                      <p> <i className="fa-solid fa-phone"></i> +998123456789</p>
                      <p><span>Manzil: </span>Toshkent shahri, Olmazor tuman</p>
                      <p><span>Mo'ljal: </span>do'kon ro'parasi</p>
                    </div>
                  </div>
          </div>

          <hr className='footer-hr' />

          <div className="copyright">
            <p>Copyright © 2026 Zamaxshariy Izdoshlari Shool LLC. All Rights Reserved</p>
            <a href="./">Public Offer</a>
          </div>

      </footer>
      
      

      <LeadModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

      <ApplicationModal
            open={openVacancyModal}
            onClose={() => setOpenVacancyModal(false)}
      />

    </>
  );
}

export default Footer;