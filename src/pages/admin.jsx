import { useContext, useEffect, useState } from "react";
import { VacancyContext } from "../context/VacancyContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./admin.css";

function AdminPage() {
  const { vacancies, setVacancies } = useContext(VacancyContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [leads, setLeads] = useState([]);
  const [applications, setApplications] = useState([]);

  const isAdmin = localStorage.getItem("isAdmin");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const loadData = async () => {
      try {
        // vakansiyalar
        const vakRes = await fetch(
          "https://beginner7070.pythonanywhere.com/admin-panel/vakansiyalar/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const vakData = await vakRes.json();
        setApplications(vakData.results || vakData);

        // leadlarni olish
        const leadRes = await fetch(
          "https://beginner7070.pythonanywhere.com/admin-panel/leadlar/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const leadData = await leadRes.json();
        setLeads(leadData.results || leadData);

      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, [navigate]);

  if (!isAdmin) return <h2 style={{paddingTop: 100, textAlign: 'center'}}>Ruxsat yo'q</h2>;

  /* ================= VACANCY CRUD ================= */

  const handleSubmit = () => {
    if (!title || !desc) return;

    if (editingId) {
      setVacancies(
        vacancies.map(v =>
          v.id === editingId
            ? { ...v, title, description: desc }
            : v
        )
      );
      setEditingId(null);
    } else {
      setVacancies([
        ...vacancies,
        { id: Date.now(), title, description: desc }
      ]);
    }

    setTitle("");
    setDesc("");
  };

  const handleEdit = (v) => {
    setEditingId(v.id);
    setTitle(v.title);
    setDesc(v.description);
  };

  const handleDelete = (id) => {
    setVacancies(vacancies.filter(v => v.id !== id));
  };

  const toggleLeadStatus = async (lead) => {
    try {
      const token = localStorage.getItem("token");
      const newStatus = !lead.boglanildi;
      
      // Backend'ga PATCH yoki PUT so'rovi yuborish
      await fetch(
        `https://beginner7070.pythonanywhere.com/admin-panel/leadlar/${lead.id}/`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            boglanildi: newStatus
          })
        }
      );
      
      // Local state'ni yangilash
      setLeads(leads.map(l => 
        l.id === lead.id 
          ? { ...l, boglanildi: newStatus }
          : l
      ));
    } catch (err) {
      console.error(err);
      alert('Holatni o\'zgartirishda xatolik yuz berdi');
    }
  };

  const handleDeleteLead = async (id) => {
    if (!window.confirm('Rostdan ham o\'chirmoqchimisiz?')) return;
    
    try {
      const token = localStorage.getItem("token");
      await fetch(
        `https://beginner7070.pythonanywhere.com/admin-panel/leadlar/${id}/`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      setLeads(leads.filter(l => l.id !== id));
    } catch (err) {
      console.error(err);
      alert('O\'chirishda xatolik yuz berdi');
    }
  };

  const handleDeleteApplication = async (id) => {
    if (!window.confirm('Rostdan ham o\'chirmoqchimisiz?')) return;
    
    try {
      const token = localStorage.getItem("token");
      await fetch(
        `https://beginner7070.pythonanywhere.com/admin-panel/vakansiyalar/${id}/`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      setApplications(applications.filter(a => a.id !== id));
    } catch (err) {
      console.error(err);
      alert('O\'chirishda xatolik yuz berdi');
    }
  };

  const downloadText = (text, name) => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${name}.txt`;
    link.click();
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('uz-UZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="admin-container">

      <h1>Admin panel</h1>

      {/* ================= VAKANSIYA QO'SHISH ================= */}
      <section className="admin-add">
        <h2>Vakansiya qo'shish</h2>

        <div className="admin-form">
          <label>Lavozim nomi</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Masalan: Matematika o'qituvchisi"
          />

          <label>Tavsif</label>
          <textarea
            rows="4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Vakansiya haqida batafsil ma'lumot..."
          />

          <button onClick={handleSubmit}>
            {editingId ? "Saqlash" : "Qo'shish"}
          </button>
        </div>
      </section>

      {/* ================= VAKANSIYALAR ================= */}
      <section className="admin-list">
        <h2>Mavjud vakansiyalar</h2>

        {vacancies.length === 0 ? (
          <div className="empty-state">
            <i className="fa-solid fa-briefcase"></i>
            <p>Hozircha vakansiyalar mavjud emas</p>
          </div>
        ) : (
          <div className="admin-vacancies-list">
            {vacancies.map(v => (
              <div key={v.id} className="admin-vacancy-item">
                <h3>{v.title}</h3>
                <p>{v.description}</p>

                <div className="table-actions">
                  <button className="table-btn view" onClick={() => handleEdit(v)}>
                    <i className="fa-solid fa-pen"></i> Tahrirlash
                  </button>
                  <button className="table-btn delete" onClick={() => handleDelete(v.id)}>
                    <i className="fa-solid fa-trash"></i> O'chirish
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= LEADLAR JADVALI ================= */}
      <section className="admin-list">
        <h2>Bog'lanish so'rovlari</h2>

        {leads.length === 0 ? (
          <div className="empty-state">
            <i className="fa-solid fa-users"></i>
            <p>Hozircha so'rovlar mavjud emas</p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>F.I.O</th>
                  <th>Telefon raqam</th>
                  <th>Email</th>
                  <th>Murojaat vaqti</th>
                  <th>Holat</th>
                  <th>Amallar</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id}>
                    <td data-label="F.I.O">{lead.ism_familiya || '-'}</td>
                    <td data-label="Telefon">{lead.telefon || '-'}</td>
                    <td data-label="Email" className="text-muted">{lead.email || '-'}</td>
                    <td data-label="Murojaat vaqti" className="text-muted">
                      {formatDate(lead.created_at)}
                    </td>
                    <td data-label="Holat">
                      <button 
                        className={`status-toggle ${lead.boglanildi ? 'connected' : 'not-connected'}`}
                        onClick={() => toggleLeadStatus(lead)}
                        title={lead.boglanildi ? 'Bog\'lanildi' : 'Bog\'lanilmadi'}
                      >
                        <i className={`fa-solid ${lead.boglanildi ? 'fa-check' : 'fa-xmark'}`}></i>
                      </button>
                    </td>
                    <td data-label="Amallar">
                      <div className="table-actions">
                        <button 
                          className="table-btn delete" 
                          onClick={() => handleDeleteLead(lead.id)}
                        >
                          <i className="fa-solid fa-trash"></i> O'chirish
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ================= VAKANSIYA ARIZALARI JADVALI ================= */}
      <section className="admin-list">
        <h2>Vakansiya arizalari</h2>

        {applications.length === 0 ? (
          <div className="empty-state">
            <i className="fa-solid fa-file-lines"></i>
            <p>Hozircha arizalar mavjud emas</p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>F.I.O</th>
                  <th>Telefon</th>
                  <th>Email</th>
                  <th>Murojaat vaqti</th>
                  <th>Amallar</th>
                </tr>
              </thead>
              <tbody>
                {applications.map(app => (
                  <tr key={app.id}>
                    <td data-label="F.I.O">{app.ism_familiya || '-'}</td>
                    <td data-label="Telefon">{app.telefon || '-'}</td>
                    <td data-label="Email" className="text-muted">{app.email || '-'}</td>
                    <td data-label="Murojaat vaqti" className="text-muted">
                      {formatDate(app.created_at)}
                    </td>
                    <td data-label="Amallar">
                      <div className="table-actions">
                        {app.tarjimahol_files && (
                          <button
                            className="table-btn view"
                            onClick={() => window.open(app.tarjimahol_files, "_blank")}
                          >
                            <i className="fa-solid fa-file-pdf"></i> Rezyume
                          </button>
                        )}
                        
                        {app.malumot && (
                          <button
                            className="table-btn download"
                            onClick={() => downloadText(app.malumot, app.ism_familiya)}
                          >
                            <i className="fa-solid fa-download"></i> Textni yuklash
                          </button>
                        )}
                        
                        <button 
                          className="table-btn delete" 
                          onClick={() => handleDeleteApplication(app.id)}
                        >
                          <i className="fa-solid fa-trash"></i> O'chirish
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ================= LOGOUT ================= */}
      <div className="logout-section">
        <button className="logout-btn" onClick={() => {
          logout();
          navigate("/");
        }}>
          <i className="fa-solid fa-right-from-bracket"></i> Chiqish
        </button>
      </div>

    </div>
  );
}

export default AdminPage;