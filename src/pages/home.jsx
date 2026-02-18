import './pages.css'
import { useState, useLayoutEffect} from 'react'
import LeadModal from '../components/LeadModal'
import logo from '../assets/logo.png'
import ceo from '../assets/ceo.jpg'
import teacher from '../assets/teacher.jpg'
import FaqItem from '../components/FaqItem'

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            q: "Pulni bo‘lib to‘lash imkoniyati bormi?",
            a: "Ha, to‘lovni bo‘lib amalga oshirish imkoniyati mavjud."
        },
        {
            q: "Darslar qaysi tilda olib boriladi?",
            a: "Darslar o‘zbek va ingliz tillarida olib boriladi."
        },
        {
            q: "Qabul nechchi yoshdan boshlanadi?",
            a: "Qabul 6 yoshdan boshlanadi."
        },
        {
            q: "Ota-ona jarayondan xabardor bo‘ladimi?",
            a: "Ha, barcha jarayonlar ota-ona bilan ochiq muhokama qilinadi."
        },
        {
            q: "Baholash qanday olib boriladi?",
            a: "Har oy monitoring va baholash o‘tkaziladi."
        }
    ];

    useLayoutEffect(() => {
    const elements = document.querySelectorAll(
        ".reveal:not(.faq-reveal)"
    );

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



  return(
    <div className="container">
        
        <div className="header">
            <div className="header-texts reveal reveal-right">
                {/* <p className='projectName'>“Cambridge LC” o'quv markazidan yangi loyiha:</p> */}
                <h2> <span>Zamaxshariy izdoshlari</span> xususiy maktabi - <span>milliy</span> qadriyatlar asosida 
                <span> zamonaviy</span> ta’lim</h2>
                <p>Zamaxshariy izdoshlari maktabida ta’lim faqat bilim berish bilan cheklanmaydi. Bu yerda bola fikrlashni, tartibni va o‘z javobgarligini his qilishni o‘rganadi. Ota-ona uchun esa eng muhimi — jarayon va natijaning ochiqligi.</p>
                <button className='h-contact' onClick={() => setOpenModal(true)}>
                    Qabulga yozilish
                </button>
            </div>
            <div className="header-img reveal reveal-left">
                <img src={ceo} alt="img" />
            </div>
        </div>

        <div className="why">

            <div className="why-texts reveal reveal-bottom">
                <h2>Nega aynan <span>Zamaxshariy Izdoshlari</span>ni tanlashadi?</h2>
                <p>Bilimdagi bo‘shliqlar aniqlanadi va individual ishlash orqali bartaraf etiladi.</p>
            </div>

            <div class="why-cards">

                <div class="why-card big reveal reveal-left">
                    <div class="wc-title">
                    <div class="wc-title-icon">
                        <i class="fa-solid fa-shield-check"></i>
                    </div>
                    <h3>Qisqa vaqt ichida ko‘rinadigan yutuqlar</h3>
                    </div>
                    <p>
                    Maktab faoliyati boshlanganiga ko‘p vaqt bo‘lmaganiga qaramay,
                    fanlar bo‘yicha ilk natijalar, monitoring yutuqlari va stipendiyalar
                    bunga amaliy dalil bo‘la oladi.
                    </p>
                </div>

                <div class="why-card reveal reveal-bottom">
                    <div class="wc-title">
                    <div class="wc-title-icon">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <h3>Natija o‘lchanadi, kuzatiladi</h3>
                    </div>
                    <p>
                    Zamaxshariy izdoshlari maktabida bilim taxmin bilan baholanmaydi.
                    Har oy monitoring testlari o‘tkazilib, o‘quvchining real
                    o‘zlashtirishi ko‘rinadi. Natija yashirilmaydi, ochiq muhokama
                    qilinadi va rag‘batlantiriladi.
                    </p>
                </div>

                <div class="why-card reveal reveal-right">
                    <div class="wc-title">
                    <div class="wc-title-icon">
                        <i class="fa-solid fa-chess"></i>
                    </div>
                    <h3>Tarbiya dars bilan tugamaydi</h3>
                    </div>
                    <p>
                    Biz uchun tarbiya — alohida fan emas, balki butun jarayonning
                    bir qismi. Shaxmat, zakovat, sport musobaqalari va ma’naviy
                    tadbirlar bolaning fe’l-atvori va mas’uliyatini shakllantiradi.
                    </p>
                </div>

                <div class="why-card reveal reveal-bottom">
                    <div class="wc-title">
                    <div class="wc-title-icon">
                        <i class="fa-solid fa-user-graduate"></i>
                    </div>
                    <h3>Boshlang‘ich sinflarda e’tibor</h3>
                    </div>
                    <p>
                    Boshlang‘ich bosqich — eng muhim davr. Shu sababli maktabimizda
                    tajribali pedagoglar faoliyat yuritadi. Har bir bola bilan
                    individual yondashuv saqlanadi, muammo o‘z vaqtida aniqlanadi.
                    </p>
                </div>

                <div class="why-card reveal reveal-right">
                    <div class="wc-title">
                    <div class="wc-title-icon">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    <h3>Ota-ona jarayondan uzilmaydi</h3>
                    </div>
                    <p>
                    Zamaxshariy izdoshlari maktabida ota-ona faqat tomoshabin emas.
                    Natijalar, tadbirlar va o‘zgarishlar doimiy ravishda ochiq
                    yoritiladi. Savollar javobsiz qolmaydi, jarayon nazorat ostida.
                    </p>
                </div>

                </div>


        </div>

        <div className="teachers">
            <div className="teachers-texts reveal reveal-bottom">
                <h2>Bizning o‘qituvchilar</h2>
                <p>O‘z sohasida tajribali va natijaga yo‘naltirilgan ustozlar</p>
            </div>

            <div className="teacher-cards">
                <div class="teacher-card reveal reveal-left">
                <div class="teacher-img">
                    <img src={teacher} alt="Teacher name"/>
                </div>
                <div class="teacher-info">
                    <h3>Jahongir Po‘latov</h3>
                    <span>Matematika o‘qituvchisi</span>
                </div>
                </div>

                <div class="teacher-card reveal reveal-bottom">
                <div class="teacher-img">
                    <img src={teacher} alt="Teacher name"/>
                </div>
                <div class="teacher-info">
                    <h3>Madina Karimova</h3>
                    <span>Ingliz tili</span>
                </div>
                </div>

                <div class="teacher-card reveal reveal-bottom">
                <div class="teacher-img">
                    <img src={teacher} alt="Teacher name"/>
                </div>
                <div class="teacher-info">
                    <h3>Rustam Aliyev</h3>
                    <span>Fizika</span>
                </div>
                </div>

                <div class="teacher-card reveal reveal-right">
                <div class="teacher-img">
                    <img src={teacher} alt="Teacher name"/>
                </div>
                <div class="teacher-info">
                    <h3>Dilnoza Ismoilova</h3>
                    <span>Biologiya</span>
                </div>
                </div>
            </div>

            <button className='teacher-btn reveal reveal-bottom' onClick={() => setOpenModal(true)}>
                Jamoaga qo'shilish
            </button>

        </div>

        <div className="admission">
            <div className="admission-texts reveal reveal-bottom">
                <h2>Qabul jarayoni</h2>
                <p>Zamaxshariy izdoshlari maktabida qabul jarayoni oddiy va tushunarli. Har bir bosqich ota-ona uchun ochiq bo‘lib, ortiqcha murakkabliksiz tashkil etilgan.</p>
            </div>

            <div className="timeline">

                <div className="timeline-item left reveal reveal-left">
                <div className="content">
                    <div className="tit">
                        <div className="tit-icon">
                            <i class="fa-solid fa-file-signature"></i>
                        </div>
                        <h3>Ariza topshirish</h3>
                    </div>
                    <p>Qabul arizasi onlayn yoki maktab orqali topshiriladi. Ma’lumotlar qisqa va aniq shaklda qabul qilinadi.</p>
                </div>
                </div>

                <div className="timeline-item right reveal reveal-right">
                <div className="content">
                    <div className="tit">
                        <div className="tit-icon">
                            <i class="fa-solid fa-comments"></i>
                        </div>
                        <h3>Suhbat va tanishuv</h3>
                    </div>
                    <p>Bola va ota-ona bilan suhbat o‘tkaziladi. Bu jarayonda bolaning holati va ehtiyojlari inobatga olinadi.</p>
                </div>
                </div>

                <div className="timeline-item left reveal reveal-left">
                <div className="content">
                    <div className="tit">
                        <div className="tit-icon">
                            <i class="fa-solid fa-clipboard-list"></i>
                        </div>
                        <h3>Baholash va yo‘naltirish</h3>
                    </div>
                    <p>Bolaning bilim darajasi aniqlanadi va mos sinf yoki dastur tavsiya qilinadi.</p>
                </div>
                </div>

                <div className="timeline-item right reveal reveal-right">
                <div className="content">
                    <div className="tit">
                        <div className="tit-icon">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <h3>Qabulni tasdiqlash</h3>
                    </div>
                    <p>Hujjatlar rasmiylashtirilgach, bola maktabimiz safiga qabul qilinadi va o‘quv jarayoni boshlanadi.</p>
                </div>
                </div>

                <span className="timeline-end"></span>
            </div>
        </div>

        <div className="issues">

            <div className="issues-txt reveal reveal-bottom">
                <h2>Qanday muammolarga yechim beramiz?</h2>
                <p>Biz sizning og'riqlaringizdan xabardormiz va ularga yechim berish biz uchun muhim!</p>
            </div>

            <div class="qa-grid">

                <div class="qa-card">

                    <div className="dialog-card reveal reveal-left">
                        <div className="dialog-question">
                            <div className="avatar">
                                <i class="fa-regular fa-user"></i>
                            </div>

                            <div className="bubble question">
                            <span className="label">Ota-ona</span>
                            <p>Farzandim darsni tushunmayapti.</p>
                            </div>
                        </div>

                        <div className="dialog-answer">
                            <div className="bubble answer">
                            <span className="label">Maktab</span>
                            <p>
                                Bilim bo‘shliqlari aniqlanadi va individual reja asosida ishlanadi
                            </p>
                            </div>

                            <div className="school-icon">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="qa-card reveal reveal-right">
                    <div className="dialog-card">
                        <div className="dialog-question">
                            <div className="avatar">
                                <i class="fa-regular fa-user"></i>
                            </div>

                            <div className="bubble question">
                            <span className="label">Ota-ona</span>
                            <p>Bola tortinchoq, fikrini ayta olmaydi</p>
                            </div>
                        </div>

                        <div className="dialog-answer">
                            <div className="bubble answer">
                            <span className="label">Maktab</span>
                            <p>
                                Fikrlash va muloqot ko‘nikmalari mashg‘ulotlar orqali rivojlanadi
                            </p>
                            </div>

                            <div className="school-icon">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="qa-card reveal reveal-left">
                    <div className="dialog-card">
                        <div className="dialog-question">
                            <div className="avatar">
                                <i class="fa-regular fa-user"></i>
                            </div>

                            <div className="bubble question">
                            <span className="label">Ota-ona</span>
                            <p>Natija bormi-yo‘qmi bilib bo‘lmaydi</p>
                            </div>
                        </div>

                        <div className="dialog-answer">
                            <div className="bubble answer">
                            <span className="label">Maktab</span>
                            <p>
                                Natijalar monitoring va muntazam baholash orqali ko‘rinadi
                            </p>
                            </div>

                            <div className="school-icon">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="qa-card reveal reveal-right">
                    <div className="dialog-card">
                        <div className="dialog-question">
                            <div className="avatar">
                                <i class="fa-regular fa-user"></i>
                            </div>

                            <div className="bubble question">
                            <span className="label">Ota-ona</span>
                            <p>Bola tartib va intizomga ko‘nikmagan.</p>
                            </div>
                        </div>

                        <div className="dialog-answer">
                            <div className="bubble answer">
                            <span className="label">Maktab</span>
                            <p>
                                Tartib kundalik jarayon orqali mustahkamlanadi
                            </p>
                            </div>

                            <div className="school-icon">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>

        <div className="curricula">
            <div className="curricula-txt reveal reveal-bottom">
                <h2>O’quv dasturlarimiz</h2>
                <p>Eng yaxshi ta’lim sifati, tajribali o‘qituvchilar va innovatsion yondashuv bilan farzandingiz kelajagini biz bilan yarating!</p>
            </div>

            <div className="curricula-cards">

                <div className="curricula-card reveal reveal-left">
                    <div className="cla-img">
                        <div className='wc-title-icon'>
                            <i class="fa-solid fa-book-open"></i>
                        </div>
                        <div className="cla-title">
                            <p>Boshlangich</p>
                            <h3>1-4sinf</h3>
                        </div>
                    </div>
                    <p>Asosiy fanlar bilan birga fikrlash, tartib va mustaqil o‘rganish ko‘nikmalari shakllantiriladi. Bu bosqich keyingi ta’lim uchun poydevor bo‘lib xizmat qiladi.</p>

                    <button className='more-button' onClick={() => setOpenModal(true)}>
                        Batafsil ma'lumot
                    </button>
                </div>

                <div className="curricula-card reveal reveal-bottom">
                    <div className="cla-img">
                        <div className='wc-title-icon'>
                            <i class="fa-solid fa-language"></i>
                        </div>
                        <div className="cla-title">
                            <p>O'rta</p>
                            <h3>Xorijiy tillar</h3>
                        </div>
                    </div>
                    <p>Ingliz, rus, arab, turk, koreys va xitoy tillari yoshga mos metodika asosida o‘rgatiladi. Maqsad — yodlash emas, tushunish.</p>

                    <button className='more-button' onClick={() => setOpenModal(true)}>
                        Batafsil ma'lumot
                    </button>
                </div>

                <div className="curricula-card reveal reveal-right">
                    <div className="cla-img">
                        <div className='wc-title-icon'>
                            <i class="fa-solid fa-brain"></i>
                        </div>
                        <div className="cla-title">
                            <p>Yuqori</p>
                            <h3>Zamonaviy yo‘nalishlar</h3>
                        </div>
                    </div>
                    <p>Tanqidiy fikrlash, notiqlik va sun’iy intellekt (AI) kurslari orqali o‘quvchilar zamon talablariga mos bilim va ko‘nikmalarni oladi.</p>

                    <button className='more-button' onClick={() => setOpenModal(true)}>
                        Batafsil ma'lumot
                    </button>
                </div>
            </div>
        </div>

        <div className="questions">
            <div className="question-content">
                <div className="question-texts reveal reveal-bottom">
                    <h2>Maktabimiz haqida <br /> savollaringiz bormi?</h2>
                    <p>Biz sizga tez orada bog'lanamiz.</p>
                </div>

                <input
                    className='contact-input question-input reveal reveal-bottom'
                    type="text"
                    placeholder='Ism-familiyangiz'>
                </input>
                <input
                    className='contact-input question-input reveal reveal-bottom'
                    type="number"
                    inputmode="numeric"
                    placeholder="+998 __ ___ __ __"
                />

                <button className="submit-btn q-btn reveal reveal-bottom" onClick={() => setOpenModal(true)}>Ma'lumot olish</button>
            </div>
        </div>

        <div className="faq">

            <div className="faq-texts reveal reveal-bottom">
                <h2>Ko’p beriladigan savollar</h2>
                <p>Quyida bizdan tez-tez so'raladigan savollar uchun <br />javoblarni tayyorlab qo'ydik.</p>
            </div>

            <div className="faq-cards">
            {faqs.map((item, index) => (
                <FaqItem
                key={index}
                question={item.q}
                answer={item.a}
                open={openIndex === index}
                onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                }
                />
            ))}
            </div>

        </div>

     <LeadModal
        open={openModal}
        onClose={() => setOpenModal(false)}
    />

    </div>
  )
}

export default Home