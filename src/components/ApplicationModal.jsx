import { useState } from "react";
import "../pages/vacansy.css";

function ApplicationModal({ open, onClose, onSuccess }) {
  const [form, setForm] = useState({
    ismi: "",
    familyasi: "",
    tel: "",
    email: "",
    malumot: "",
    tarjimahol_files: null, // 📎 ixtiyoriy
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // 🔴 FAQAT MAJBURIY MAYDONLAR
    if (!form.ismi || !form.familyasi || !form.tel) {
      setError("Ism, familiya va telefon raqami majburiy.");
      setLoading(false);
      return;
    }
    
    try {
      const formData = new FormData();
      formData.append("ismi", form.ismi);
      formData.append("familyasi", form.familyasi);
      formData.append(
        "tel",
        "+998" + form.tel.replace(/\D/g, "").slice(-9)
      );
      formData.append("email", form.email);
      formData.append("malumot", form.malumot);

      // 📎 FILE — FAQAT BO‘LSA
      if (form.tarjimahol_files) {
        formData.append("tarjimahol_files", form.tarjimahol_files);
      }

      const res = await fetch(
        "https://beginner7070.pythonanywhere.com/royxat-api/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const data = await res.json();
        console.error("Backend error:", data);
        throw new Error();
      }

      onSuccess();
      onClose();

      // 🧹 forma tozalanadi
      setForm({
        ismi: "",
        familyasi: "",
        tel: "",
        email: "",
        malumot: "",
        tarjimahol_files: null,
      });
    } catch {
      setError("Ariza yuborilmadi. Qayta urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="application-modal" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>

        <h2>Ariza shakli</h2>

        <form onSubmit={handleSubmit}>
          <label>Ism:</label>
          <input
            type="text"
            name="ismi"
            value={form.ismi}
            onChange={handleChange}
          />

          <label>Familiya:</label>
          <input
            type="text"
            name="familyasi"
            value={form.familyasi}
            onChange={handleChange}
          />

          <label>Telefon raqam:</label>
          <input
            type="tel"
            name="tel"
            value={form.tel}
            onChange={handleChange}
            placeholder="+998 __ ___ __ __"
          />

          <label>Elektron pochta:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Rezyume (PDF yoki DOCX) — ixtiyoriy:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                tarjimahol_files: e.target.files[0] || null,
              }))
            }
          />

          <label>Qo‘shimcha ma’lumot:</label>
          <textarea
            name="malumot"
            rows="5"
            value={form.malumot}
            onChange={handleChange}
          />

          {error && <p className="form-error submit-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Yuborilmoqda..." : "Yuborish"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationModal;