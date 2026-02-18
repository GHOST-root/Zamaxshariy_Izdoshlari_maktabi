import { useState } from "react";
import "./components.css";

function LeadModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let ok = true;

    setNameError("");
    setPhoneError("");
    setSubmitError("");

    if (!name.trim()) {
      setNameError("Ism-familiya kiritilishi shart");
      ok = false;
    }

    if (!phone.trim()) {
      setPhoneError("Telefon raqam kiritilishi shart");
      ok = false;
    }

    return ok;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://beginner7070.pythonanywhere.com/lead-create/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ism_familiya: name.trim(),
            telefon: phone.trim(),
          }),
        }
      );

      if (!res.ok) throw new Error();

      // modalni yopamiz
      onClose();

      // modal yopilgach notification
      setTimeout(() => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }, 200);

      setName("");
      setPhone("");
    } catch {
      setSubmitError("Maʼlumot yuborilmadi. Qayta urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔔 TOP CENTER NOTIFICATION */}
      {success && (
        <div className="top-notification">
          Muvaffaqiyatli yuborildi, sizga tez orada bog'lanamiz
        </div>
      )}

      {/* 🪟 MODAL */}
      {open && (
        <div className="modal-overlay" onClick={onClose}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              ×
            </button>

            <div className="modal-texts">
              <h2>
                Maktabimiz haqida savollaringiz bo'lsa, quyida
                ma'lumotlaringizni kiriting.
              </h2>
              <p>Biz sizga tez orada bog'lanamiz.</p>
            </div>

            <div className="form-group">
              <input
                className={`contact-input ${nameError ? "input-error" : ""}`}
                type="text"
                placeholder="Ism-familiyangiz"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
              />
              {nameError && <span className="form-error">{nameError}</span>}
            </div>

            <div className="form-group">
              <input
                className={`contact-input ${phoneError ? "input-error" : ""}`}
                type="tel"
                placeholder="+998 __ ___ __ __"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError("");
                }}
              />
              {phoneError && <span className="form-error">{phoneError}</span>}
            </div>

            {submitError && (
              <p className="form-error submit-error">{submitError}</p>
            )}

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Yuborilmoqda..." : "Ma'lumot olish"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LeadModal;