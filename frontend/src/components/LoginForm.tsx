import React, { useState } from 'react';
import axios from 'axios';

interface LoginFormProps {
  userType: 'student' | 'organization';
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ userType, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/api/login/${userType}`, { email, password });
      console.log(response.data);
      onLogin(); // Call the onLogin prop after successful login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login as {userType}</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
