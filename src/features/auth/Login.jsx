
import { useState } from 'react';
import CustomButton from '../../components/Button';
import FormField from '../../components/FormField';
import { supabase } from '../../api/supabaseClient';
import { Link } from 'react-router-dom'; // Add Link from React Router

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error('Login error:', error.message);
    } else {
      console.log('Login successful');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <FormField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <CustomButton onClick={handleLogin}>Login</CustomButton>

      {/* Add Signup Button with a link to the signup page */}
      <div style={{ marginTop: '10px' }}>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <CustomButton>Signup</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Login;
