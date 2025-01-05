import { useState } from 'react';
import { supabase } from '../../application/core/supabaseClient';
import LoginForm from '@/presentation/components/ui/login/LoginForm';
import { useNavigate } from 'react-router';
import './Login.scss';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    setLoading(true);
    setError('');
    setSuccess('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess('Login successful!');
      navigate('/');
    }
  };

  return (
    <div className='auth-container'>
      <div className='auth-form'>
        <h1>Sign in to your account</h1>
        <LoginForm loading={loading} onSubmit={handleLogin} />
        {error && <p className='error-message'>{error}</p>}
        {success && <p className='success-message'>{success}</p>}
      </div>
    </div>
  );
};

export default Login;
