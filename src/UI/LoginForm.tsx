
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface Errors {
  email?: string;
  password?: string;
}

function LoginForm() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/account');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const savedData = localStorage.getItem('loginFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        
        if (parsedData && parsedData.rememberMe) {
          setFormData(parsedData);
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных из localStorage:', error);
  
        localStorage.removeItem('loginFormData');
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prevData => {
      const updatedData = {
        ...prevData,
        [name]: newValue
      };
      if (name === 'rememberMe' && !checked) {
        localStorage.removeItem('loginFormData');
      }
      
      if (updatedData.rememberMe) {
        localStorage.setItem('loginFormData', JSON.stringify(updatedData));
      }
      
      return updatedData;
    });
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (formData.rememberMe) {
      localStorage.setItem('loginFormData', JSON.stringify(formData));
    } else {
      localStorage.removeItem('loginFormData');
    }
    
    setErrors({});
    const userData = {
      username: 'PodcastLover',
      email: formData.email,
      joinDate: new Date().toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    };
    
    login(userData);
  };

  const clearSavedData = () => {
    localStorage.removeItem('loginFormData');
    setFormData({
      email: '',
      password: '',
      rememberMe: false
    });
  };

  return (
    <div className="w-full bg-gray-50 rounded-lg shadow-xl overflow-hidden">
      <div className="relative pt-12 pb-8 px-8">
        <div className="absolute top-4 left-4">
        </div>
        <div className="absolute top-4 right-4">
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-2 font-sans">LOGIN</h2>
        <p className="text-gray-600 text-center mb-8 font-sans">Join our podcast community</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-sans">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-sans`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600 font-sans">{errors.email}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 font-sans">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-sans`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="mt-1 text-sm text-red-600 font-sans">{errors.password}</p>}
          </div>
          
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 border-gray-300 rounded text-red-500 focus:ring-red-500"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="rememberMe" className="text-sm text-gray-700 font-sans">
                  Remember me
                </label>
              </div>
            </div>
            <button 
              type="button" 
              onClick={clearSavedData} 
              className="text-sm text-red-500 hover:underline font-sans"
            >
              Forget your password?
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#CD4631] hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300 font-sans"
          >
            LOGIN
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 font-sans">
            DON`T HAVE AN ACCOUNT? <button onClick={() => navigate('/register')} className="text-red-500 hover:underline font-medium">REGISTRATION</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;