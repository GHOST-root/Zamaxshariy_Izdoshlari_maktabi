import React, { useState, useContext, useEffect } from "react";
import "./vacansy.css";
import { VacancyContext } from "../context/VacancyContext";
import ApplicationModal from "../components/ApplicationModal";

const CareerPage = () => {
  const { vacancies } = useContext(VacancyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const openApplicationModal = () => {
    setIsModalOpen(true);
  };

  const closeApplicationModal = () => {
    setIsModalOpen(false);
  };

  return (

    <>

      {/* 🔔 TOP NOTIFICATION */}
      {success && (
        <div className="top-notification">
          Arizangiz muvaffaqiyatli yuborildi
        </div>
      )}

      {/* 🪟 MODAL COMPONENT */}
      <ApplicationModal
        open={isModalOpen}
        onClose={closeApplicationModal}
        onSuccess={() => {
          setTimeout(() => {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
          }, 200);
        }}
      />

    <div className="container">
      
      <article className="introduction reveal reveal-bottom">
        <h1>Zamaxshariy izdoshlari bilan ishlash</h1>
        <p>
          Agar siz ta'limni mas'uliyat deb bilsangiz, bolalar bilan ishlash tajribangiz bo'lsa
          va natija uchun javobgarlikni his qilsangiz — Zamaxshariy izdoshlari jamoasida
          siz uchun munosib o'rin bor.
        </p>
        <button onClick={openApplicationModal}>Jamoaga qo'shilish</button>
      </article>

      <section className="benefits">
        <h2 className="reveal reveal-bottom">Nega Zamaxshariy izdoshlari maktabida ishlashadi?</h2>
        <div className="benefits-list">
          <div className="benefit-item reveal reveal-left">
            <strong>Tizimli va tartibli ish muhiti</strong>
            <p>
              Ta'lim jarayonlari aniq reja asosida olib boriladi. Har bir xodim o'z vazifasi
              va javobgarligini aniq biladi.
            </p>
          </div>
          <div className="benefit-item reveal reveal-bottom">
            <strong>Hurmatga asoslangan jamoa</strong>
            <p>
              Jamoada sog'lom muhit, o'zaro hurmat va qo'llab-quvvatlash ustuvor hisoblanadi.
            </p>
          </div>
          <div className="benefit-item reveal reveal-right">
            <strong>Barqaror va ishonchli ish joyi</strong>
            <p>
              Zamaxshariy izdoshlari maktabi uzoq muddatli hamkorlik va barqaror faoliyatga
              yo'naltirilgan.
            </p>
          </div>
          <div className="benefit-item reveal reveal-left">
            <strong>Munosib maosh va rag'bat</strong>
            <p>
              Xodimlarning mehnati baholanadi. Natija ko'rsatgan pedagoglar qo'shimcha
              rag'bat va qo'llab-quvvatlovga ega bo'ladilar.
            </p>
          </div>
          <div className="benefit-item reveal reveal-bottom">
            <strong>Kasbiy rivojlanish imkoniyati</strong>
            <p>
              Pedagoglar uchun o'sish, o'rganish va tajriba almashish imkoniyatlari yaratiladi.
            </p>
          </div>
        </div>
      </section>

      <section className="candidate-profile">
        <h2 className="reveal reveal-bottom">Biz kimlarni izlaymiz?</h2>
        <div className="profile-list">
          <div className="profile-item reveal reveal-left">
            <strong>Mas'uliyatni his qiladigan jamoadosh</strong>
            <p>
              O'z ishiga jiddiy yondashadigan va jamoa bilan hamkorlikda ishlay oladigan
              mutaxassislar.
            </p>
          </div>
          <div className="profile-item reveal reveal-bottom">
            <strong>Natijaga yo'naltirilgan xodim</strong>
            <p>
              Ta'lim jarayonida natijani muhim deb biladigan va doimiy rivojlanishga intiladigan
              insonlar.
            </p>
          </div>
          <div className="profile-item reveal reveal-right">
            <strong>Tajribali va fidoyi pedagog</strong>
            <p>
              O'z fanini yaxshi biladigan va bolalar bilan ishlashni mas'uliyat deb hisoblaydigan
              mutaxassislar.
            </p>
          </div>
          <div className="profile-item reveal reveal-left">
            <strong>O'sishga ochiq shaxs</strong>
            <p>
              Yangi bilimlarni o'rganishga tayyor va o'z ustida ishlashdan to'xtamaydigan
              xodimlar.
            </p>
          </div>
        </div>
      </section>

      <section className="job-openings">
        <h2 className="reveal reveal-bottom">Zamaxshariy izdoshlari maktabida ochiq ish o'rinlari</h2>

        <div className="openings-list">
          {vacancies.length === 0 ? (
            <p style={{textAlign: 'center', color: 'var(--muted)', fontSize: '18px'}}>
              Hozircha ochiq ish o'rinlari mavjud emas
            </p>
          ) : (
            vacancies.map(v => (
              <div key={v.id} className="opening-item reveal reveal-bottom">
                <h3>{v.title}</h3>
                <p>{v.description}</p>
                <button className="arizaTopshirish" onClick={openApplicationModal}>
                  Ariza topshirish
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="hiring-steps">
        <h2 className="reveal reveal-bottom">Ishga qabul jarayoni</h2>
        <ol className="steps-list">
          <li className="reveal reveal-right">Ariza topshirish — Nomzod rezyumesini sayt orqali yoki e'lon asosida yuboradi.</li>
          <li className="reveal reveal-left">Suhbat — Tajriba, yondashuv va maktab qadriyatlariga moslik baholanadi.</li>
          <li className="reveal reveal-right">Sinov bosqichi — Texnik suhbat yoki sinov darsi orqali malaka aniqlanadi.</li>
          <li className="reveal reveal-left">Qabul va moslashuv — Nomzod jamoaga qo'shilib, moslashuv jarayonidan o'tadi.</li>
        </ol>
        <button className="reveal reveal-bottom" onClick={openApplicationModal}>Jamoaga qo'shilish</button>
      </section>
    </div>
    </>
  );
};

export default CareerPage;