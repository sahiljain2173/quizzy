
// src/features/auth/Signup.jsx
import { useState } from 'react';
import CustomButton from '../../components/Button';
import FormField from '../../components/FormField';
import { supabase } from '../../api/supabaseClient';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error('Signup error:', error.message);
    } else {
      console.log('Signup successful');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <FormField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <FormField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <CustomButton onClick={handleSignup}>Signup</CustomButton>
    </div>
  );
};

export default Signup;
