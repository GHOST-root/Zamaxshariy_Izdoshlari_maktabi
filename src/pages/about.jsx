import './about.css'
import { useState, useLayoutEffect } from 'react'
import LeadModal from '../components/LeadModal'
import building from '../assets/ceo.jpg' // Maktab binosi rasmi
import students from '../assets/teacher.jpg' // O'quvchilar rasmi

const About = () => {
    const [openModal, setOpenModal] = useState(false);

    useLayoutEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-container">
            
            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-texts reveal reveal-right">
                    <h1>Zamaxshariy Izdoshlari <span>haqida</span></h1>
                    <p>Biz zamonaviy ta'lim standartlari va milliy qadriyatlarni birlashtirgan holda, har bir bolaning iqtidorini ro'yobga chiqarishga intilamiz.</p>
                </div>
                <div className="about-hero-img reveal reveal-left">
                    <img src={building} alt="Maktab binosi" />
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="mission-vision">
                <div className="mission-vision-texts reveal reveal-bottom">
                    <h2>Missiya va <span>Qarashlarimiz</span></h2>
                    <p>Kelajak avlodni tarbiyalashda o'z hissamizni qo'shamiz</p>
                </div>

                <div className="mv-cards">
                    <div className="mv-card reveal reveal-left">
                        <div className="mv-icon">
                            <i className="fa-solid fa-bullseye"></i>
                        </div>
                        <h3>Bizning Missiyamiz</h3>
                        <p>
                            Zamaxshariy izdoshlari maktabi o'quvchilarni faqat bilim bilan qurollantirish bilan cheklanmaydi. 
                            Biz har bir bolaning shaxsini, fikrlash qobiliyatini va ijtimoiy mas'uliyat tuyg'usini rivojlantiramiz. 
                            Maqsadimiz — jamiyatga foyda keltiradigan, mustaqil fikrlaydigan va o'z kelajagini o'zi quradigan 
                            shaxslarni tarbiyalash.
                        </p>
                    </div>

                    <div className="mv-card reveal reveal-right">
                        <div className="mv-icon">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <h3>Bizning Qarashlarimiz</h3>
                        <p>
                            Biz O'zbekistonda eng yaxshi xususiy maktablardan biri bo'lishni ko'zlaymiz — bu yerda 
                            milliy qadriyatlar va zamonaviy pedagogik yondashuvlar muvofiqlikda ishlaydi. 
                            Har bir o'quvchi o'z qobiliyatlarini to'liq ochib berishga, muvaffaqiyatli kelajakni 
                            qurishga imkoniyat topadi.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="values-section">
                <div className="values-texts reveal reveal-bottom">
                    <h2>Bizning <span>Qadriyatlarimiz</span></h2>
                    <p>Maktabimiz faoliyati quyidagi asosiy tamoyillarga asoslanadi</p>
                </div>

                <div className="values-grid">
                    <div className="value-card reveal reveal-left">
                        <div className="value-number">01</div>
                        <h3>Sifatli ta'lim</h3>
                        <p>
                            Eng yuqori ta'lim standartlari, zamonaviy o'quv dasturlari va 
                            tajribali o'qituvchilar yordamida bilim beramiz.
                        </p>
                    </div>

                    <div className="value-card reveal reveal-bottom">
                        <div className="value-number">02</div>
                        <h3>Individual yondashuv</h3>
                        <p>
                            Har bir o'quvchining o'ziga xos xususiyatlarini hisobga olib, 
                            shaxsiy rivojlanish rejasini tuzamiz.
                        </p>
                    </div>

                    <div className="value-card reveal reveal-right">
                        <div className="value-number">03</div>
                        <h3>Milliy qadriyatlar</h3>
                        <p>
                            O'zbek xalqining boy madaniy merosi, an'analari va 
                            qadriyatlarini hurmat qilamiz va o'rgatamiz.
                        </p>
                    </div>

                    <div className="value-card reveal reveal-left">
                        <div className="value-number">04</div>
                        <h3>Ochiqlik va ishonch</h3>
                        <p>
                            Ota-onalar bilan ochiq muloqot, natijalarning shaffof 
                            yoritilishi bizning ustuvor yo'nalishimiz.
                        </p>
                    </div>

                    <div className="value-card reveal reveal-bottom">
                        <div className="value-number">05</div>
                        <h3>Innovatsiya</h3>
                        <p>
                            Zamonaviy texnologiyalar va o'qitish metodlarini 
                            doimiy ravishda joriy etamiz.
                        </p>
                    </div>

                    <div className="value-card reveal reveal-right">
                        <div className="value-number">06</div>
                        <h3>Jamoa ruhi</h3>
                        <p>
                            Do'stona muhit, hamkorlik va bir-biriga yordam berish 
                            tamoyillarini o'rgatamiz.
                        </p>
                    </div>
                </div>
            </div>

            {/* History Timeline */}
            {/* Maktab kelib chiqishi */}
            <div className="admission">
              <div className="admission-texts reveal reveal-bottom">
                <h2>Maktab kelib chiqishi</h2>
                <p>
                  Zamaxshariy izdoshlari xususiy maktabi ta’limdagi real ehtiyojdan kelib chiqib
                  tashkil etilgan. Uning shakllanishida tajriba, tahlil va qadriyatlarga tayangan
                  yondashuv asos bo‘lgan.
                </p>
              </div>

              <div className="timeline">

                <div className="timeline-item left reveal reveal-left">
                  <div className="content">
                    <div className="tit">
                      <div className="tit-icon">
                        <i className="fa-solid fa-file-signature"></i>
                      </div>
                      <h3>Ehtiyojni aniqlash</h3>
                    </div>
                    <p>
                      Ta’lim jarayonidagi bo‘shliqlar, tarbiya masalalari va ota-onalarning
                      kutgan natijalari chuqur tahlil qilindi.
                    </p>
                  </div>
                </div>

                <div className="timeline-item right reveal reveal-right">
                  <div className="content">
                    <div className="tit">
                      <div className="tit-icon">
                        <i className="fa-solid fa-comments"></i>
                      </div>
                      <h3>Yondashuvni shakllantirish</h3>
                    </div>
                    <p>
                      Ilm, tarbiya va mas’uliyatni bir tizimda olib boradigan ta’lim modeli
                      bosqichma-bosqich ishlab chiqildi.
                    </p>
                  </div>
                </div>

                <div className="timeline-item left reveal reveal-left">
                  <div className="content">
                    <div className="tit">
                      <div className="tit-icon">
                        <i className="fa-solid fa-clipboard-list"></i>
                      </div>
                      <h3>Tizimni yo‘lga qo‘yish</h3>
                    </div>
                    <p>
                      O‘quv jarayoni, monitoring va tarbiyaviy faoliyat yagona tizimga
                      keltirildi va amaliyotga tatbiq etildi.
                    </p>
                  </div>
                </div>

                <div className="timeline-item right reveal reveal-right">
                  <div className="content">
                    <div className="tit">
                      <div className="tit-icon">
                        <i className="fa-solid fa-circle-check"></i>
                      </div>
                      <h3>Bugungi faoliyat</h3>
                    </div>
                    <p>
                      Bugun Zamaxshariy izdoshlari maktabi shu tamoyillar asosida faoliyat yuritib,
                      natija va jarayonni birdek muhim deb biladi.
                    </p>
                  </div>
                </div>

                <span className="timeline-end"></span>
              </div>
            </div>


            {/* Statistics */}
            <div className="stats-section">
                <div className="stats-texts reveal reveal-bottom">
                    <h2>Maktabimiz <span>raqamlarda</span></h2>
                    <p>Biz bilan erishilgan yutuqlar</p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card reveal reveal-left">
                        <div className="stat-icon">
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <h3>150+</h3>
                        <p>O'quvchilar</p>
                    </div>

                    <div className="stat-card reveal reveal-bottom">
                        <div className="stat-icon">
                            <i className="fa-solid fa-chalkboard-user"></i>
                        </div>
                        <h3>25+</h3>
                        <p>Tajribali o'qituvchilar</p>
                    </div>

                    <div className="stat-card reveal reveal-right">
                        <div className="stat-icon">
                            <i className="fa-solid fa-trophy"></i>
                        </div>
                        <h3>40+</h3>
                        <p>Olimpiada g'oliblari</p>
                    </div>

                    <div className="stat-card reveal reveal-left">
                        <div className="stat-icon">
                            <i className="fa-solid fa-book"></i>
                        </div>
                        <h3>15+</h3>
                        <p>O'quv dasturlari</p>
                    </div>
                </div>
            </div>

            {/* Facilities */}
            <div className="facilities-section">
                <div className="facilities-texts reveal reveal-bottom">
                    <h2>Bizning <span>Infratuzilma</span></h2>
                    <p>Zamonaviy ta'lim uchun qulay muhit</p>
                </div>

                <div className="facilities-grid">
                    <div className="facility-card reveal reveal-left">
                        <div className="facility-img">
                            <img src={students} alt="Darsxonalar" />
                        </div>
                        <h3>Zamonaviy darsxonalar</h3>
                        <p>
                            Interaktiv doska, proyektor va zamonaviy mebel bilan 
                            jihozlangan keng va yorug' xonalar.
                        </p>
                    </div>

                    <div className="facility-card reveal reveal-bottom">
                        <div className="facility-img">
                            <img src={students} alt="Kutubxona" />
                        </div>
                        <h3>Boy kutubxona</h3>
                        <p>
                            5000+ kitobdan iborat kutubxona, elektron resurslar 
                            va o'qish zallari.
                        </p>
                    </div>

                    <div className="facility-card reveal reveal-right">
                        <div className="facility-img">
                            <img src={students} alt="Sport majmuasi" />
                        </div>
                        <h3>Sport majmuasi</h3>
                        <p>
                            Basket, voleybol maydonlari, sport zali va 
                            ochiq sport maydonchasi.
                        </p>
                    </div>

                    <div className="facility-card reveal reveal-left">
                        <div className="facility-img">
                            <img src={students} alt="Kompyuter xonasi" />
                        </div>
                        <h3>IT laboratoriyasi</h3>
                        <p>
                            Zamonaviy kompyuterlar, robotika va dasturlash 
                            o'rgatish uchun maxsus laboratoriya.
                        </p>
                    </div>

                    <div className="facility-card reveal reveal-bottom">
                        <div className="facility-img">
                            <img src={students} alt="Ovqatlanish" />
                        </div>
                        <h3>Oshxona</h3>
                        <p>
                            Sog'lom va muvozanatli ovqatlanish, o'quvchilar uchun 
                            alohida menyu tuziladi.
                        </p>
                    </div>

                    <div className="facility-card reveal reveal-right">
                        <div className="facility-img">
                            <img src={students} alt="Dam olish hududi" />
                        </div>
                        <h3>Dam olish zonasi</h3>
                        <h3>Dam olish zonasi</h3>
                        <p>
                            Yashil maydonlar, o'yin maydonchalari va o'quvchilar 
                            uchun xavfsiz dam olish joylari.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="about-cta">
                <div className="about-cta-content reveal reveal-bottom">
                    <h2>Bizning jamoaga <span>qo'shiling!</span></h2>
                    <p>
                        Farzandingiz uchun eng yaxshi ta'limni tanlamoqchimisiz? 
                        Zamaxshariy izdoshlari maktabi sizni kutmoqda!
                    </p>
                    <button className='cta-button' onClick={() => setOpenModal(true)}>
                        Qabulga yozilish
                    </button>
                </div>
            </div>

            <LeadModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />

        </div>
    )
}

export default About