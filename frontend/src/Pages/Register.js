import { useState } from 'react'
import { useRegister } from '../hooks/useRegister';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, error, loading } = useRegister();

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(email, password);
  }

  return (
    <form className="register" onSubmit={handleRegister}>
      <h3>Admin Registration</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={loading}>Register</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Register