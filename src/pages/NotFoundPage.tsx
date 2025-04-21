import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Home } from '@mui/icons-material';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#f7ede8] p-8 relative overflow-hidden">
      <div className="absolute top-20 left-0">
      </div>
      
      <div className="absolute bottom-20 right-10">
        
      </div>

      <main className="max-w-3xl mx-auto relative z-10 text-center">
        <div className="mb-16 mt-20">
          <h1 className="text-8xl font-bold mb-6">
            <span className="text-black">4</span>
            <span className="text-[#CD4631]">0</span>
            <span className="text-black">4</span>
          </h1>
          <h2 className="text-3xl font-medium mb-4">Page Not Found</h2>
          <p className="text-gray-700 max-w-lg mx-auto mb-12">
            The page you're looking for doesn't exist or might have been moved.
          </p>

          <div className="flex justify-center space-x-4">
            <button className="bg-[#CD4631] text-white px-6 py-2 rounded-md">GO HOME</button>
            <button className="border border-black px-6 py-2 rounded-md">CONTACT US</button>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <svg width="240" height="120" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,60 C20,30 60,30 120,60 C180,90 220,90 220,60" stroke="black" strokeWidth="2" />
            <circle cx="20" cy="60" r="8" fill="#FF6B6B" />
            <circle cx="220" cy="60" r="8" fill="#FF6B6B" />
          </svg>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto pt-8 border-t border-gray-300">
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-4">
            <a href="/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2" />
                <path d="M12 6L12 18" stroke="black" strokeWidth="2" />
                <path d="M6 12L18 12" stroke="black" strokeWidth="2" />
              </svg>
            </a>
            <span className="text-sm">© 2025 Company Name. All rights reserved.</span>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;