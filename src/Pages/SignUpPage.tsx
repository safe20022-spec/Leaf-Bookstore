import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { authService } from '../Services/authService';
import { useAuthStore } from '../Store/useAuthStore';
const SignUpPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSignUp = async(e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if(formData.name.length === 0){
        setError("Please Enter Your Name");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if(formData.password.length === 0){
        setError('Password Can Not Be Empty');
        return;
    }
    if(formData.password.length < 5){
        setError('Password Should Be At Least 5 Charctars');
        return;
    }

    try {
      const result = await authService.signUp(formData);
      if (result.success) {
        login(result.data);
        navigate('/books');
      }
      } catch (err: any) {
        setError(err.message); 
      }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-green-100 border border-green-50 w-full max-w-md">
        <h1 className="text-3xl font-black text-gray-900 mb-6 text-center">Create Account</h1>
        
        {error && <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm font-bold">⚠️ {error}</div>}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="relative">
            <input 
              type="text" placeholder="Full Name"
              className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <div className="relative">
            <input 
              type="text" placeholder="Email Address"
              className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <div className="relative">
            <input 
              type="password" placeholder="Password"
              className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <button type="submit" className="w-full cursor-pointer bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all">
            Get Started <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;