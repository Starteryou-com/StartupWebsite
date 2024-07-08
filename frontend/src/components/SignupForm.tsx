import React, { useState } from 'react';
import axios from 'axios';

interface SignupFormProps {
  userType: 'student' | 'organization';
  onSignup: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ userType, onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/api/signup/${userType}`, { email, password, name });
      console.log(response.data);
      onSignup(); // Call the onSignup prop after successful signup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup as {userType}</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
