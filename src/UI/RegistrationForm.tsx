import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});

    alert('Account created successfully!', formData);
    const userData = {
      username: formData.fullName,
      email: formData.email,
      joinDate: new Date().toISOString()
    };
  
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/account'); 
  };

  return (
    <div className="w-full bg-[#f7f2ef] rounded-lg shadow-xl overflow-hidden">
      <div className="relative pt-12 pb-8 px-8">
        <div className="absolute top-4 left-4">
        </div>
        <div className="absolute top-4 right-4">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">

          </svg>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-2 font-['Montserrat_Alternates']">Create Account</h2>
        <p className="text-gray-600 text-center mb-8 font-['Montserrat']">Join our podcast community</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1 font-['Montserrat']">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#CD4631] focus:border-transparent font-['Montserrat']`}
              placeholder="Your full name"
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-600 font-['Montserrat']">{errors.fullName}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-['Montserrat']">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#CD4631] focus:border-transparent font-['Montserrat']`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600 font-['Montserrat']">{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 font-['Montserrat']">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#CD4631] focus:border-transparent font-['Montserrat']`}
              placeholder="Create a password"
            />
            {errors.password && <p className="mt-1 text-sm text-red-600 font-['Montserrat']">{errors.password}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1 font-['Montserrat']">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#CD4631] focus:border-transparent font-['Montserrat']`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-600 font-['Montserrat']">{errors.confirmPassword}</p>}
          </div>
          
          <div className="mb-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 border-gray-300 rounded text-[#CD4631] focus:ring-[#CD4631]"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="agreeTerms" className="text-sm text-gray-700 font-['Montserrat']">
                  I agree to the <a href="#" className="text-[#CD4631] hover:underline">Terms of Service</a> and <a href="#" className="text-[#CD4631] hover:underline">Privacy Policy</a>
                </label>
                {errors.agreeTerms && <p className="mt-1 text-sm text-red-600 font-['Montserrat']">{errors.agreeTerms}</p>}
              </div>
            </div>
          </div>
          
          <button onClick={handleSubmit}
            type="submit"
            className="w-full bg-[#CD4631] hover:bg-[#b23d29] text-white font-semibold py-3 px-4 rounded-md transition duration-300 font-['Montserrat_Alternates']"
          >
            CREATE ACCOUNT
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 font-['Montserrat']">
            Already have an account? <a href="#" className="text-[#CD4631] hover:underline font-medium">LOG IN</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;