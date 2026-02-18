import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import './adminLogin.css'

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://beginner7070.pythonanywhere.com/api/users/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Login xato");
      }

      // ⚠️ backend nima qaytarishini tekshir
      const token = data.token || data.access;

      if (!token) throw new Error("Token topilmadi");

      login(token);
      navigate("/dashboard");

    } catch (err) {
      setError("Login yoki parol noto'g'ri");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container" style={{ paddingTop: 85 }}>
      <form onSubmit={handleLogin} className="admin-login-form">
        
        {/* Icon */}
        <div className="admin-login-icon">
          <i className="fa-solid fa-user-shield"></i>
        </div>

        {/* Title */}
        <h2>Admin Login</h2>
        <p className="admin-login-subtitle">
          Tizimga kirish uchun ma'lumotlaringizni kiriting
        </p>

        {/* Username Input */}
        <div className="admin-input-group">
          <label htmlFor="username">Foydalanuvchi nomi</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="admin-input-group">
          <label htmlFor="password">Parol</label>
          <input
            id="password"
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="admin-error-message">{error}</p>}

        {/* Submit Button */}
        <button 
          type="submit" 
          className={`admin-login-button ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? "Kirilmoqda..." : "Kirish"}
        </button>

        {/* Optional Footer Links */}
        {/* <div className="admin-login-footer">
          <a href="/forgot-password">Parolni unutdingizmi?</a>
        </div> */}
      </form>
    </div>
  );
}

export default AdminLogin;