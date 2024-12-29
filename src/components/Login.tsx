import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.scss'; // 確保這裡的路徑是正確的

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Mock API call for login
    const isValidUser = username === 'admin' && password === 'password';

    if (isValidUser) {
      navigate('/dashboard'); // Redirect to dashboard on success
    } else {
      setError('用戶名稱或密碼錯誤');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>用戶登入</h1>
        <div className="form-group">
          <label htmlFor="username">使用者名稱</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">登錄</button>
      </form>
    </div>
  );
};

export default Login;