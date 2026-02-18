import { useContext, useState } from 'react';
import { VacancyContext } from '../context/VacancyContext';
import './vacansy.css';

function CareerPage() {
  const { vacancies } = useContext(VacancyContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <h1>Ochiq vakansiyalar</h1>

      <div className="openings-list">
        {vacancies.map(v => (
          <div key={v.id} className="opening-item">
            <h3>{v.title}</h3>
            <p>{v.description}</p>
            <button onClick={() => setOpen(true)}>Ariza topshirish</button>
          </div>
        ))}
      </div>

      {open && <div className="application-modal">Modal…</div>}
    </div>
  );
}

export default CareerPage;
