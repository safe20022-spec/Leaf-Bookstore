import React, { useState } from 'react';
import { useAuthStore } from '../Store/useAuthStore';
import { useNavigate, Link } from 'react-router-dom'; 
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { authService } from '../Services/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  try {
    const result = await authService.login(email, password);
    if(result.success) {
      login(result.data);
      navigate('/books');
    }
  } catch (error: any) {
    setError(error.message);
  }
};

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-green-100 border border-green-50 w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Welcome Back!</h1>
          <p className="text-gray-500 text-sm">Login to access your personalized library</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-red-600 text-sm animate-in fade-in slide-in-from-top-2">
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <label className="text-xs font-bold text-gray-400 uppercase ml-2 mb-2 block tracking-wider">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-green-500 transition-all outline-none"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-bold text-gray-400 uppercase ml-2 mb-2 block tracking-wider">Password</label>
            <div className="relative">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-green-500 transition-all outline-none"
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all flex items-center justify-center gap-2 group active:scale-95"
          >
            Login to Account
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-600 font-bold cursor-pointer hover:underline transition-all">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;