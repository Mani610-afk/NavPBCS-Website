import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const handleGetStarted = () => {
    const el = document.getElementById('DirectExpenses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

  
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-r from-primary-900 to-primary-800 flex items-center overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAyczItLjkgMi0yLS45LTItMi0yLTIgLjktMiAyem0xNyAxN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bS0xNyAxN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bS0xNy0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6TTE5IDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div 
            ref={textRef} 
            className="text-white opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            
              <span className="text-accent-500"> Planning & Budgeting</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            navPBCS helps organizations create, monitor and control your annual operating plan for various cost centers, locations, departments, and segments — all in a single platform.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button  onClick={handleGetStarted} className="bg-accent-500 hover:bg-accent-600 text-white py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-primary-900 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative z-10 bg-white p-2 rounded-lg shadow-xl transform rotate-2 transition-transform duration-500 hover:rotate-0">
              <img 
                src="https://img.freepik.com/premium-photo/view-ui-developer-team-brainstorming-their-project-with-laptop-smartphone-digital-tablet-creative-digital-development-agencyxa_71455-1628.jpg" 
                alt="Team collaboration" 
                className="rounded w-full h-auto"
              />
            </div>
            <div className="absolute top-8 -left-8 w-full h-full bg-secondary-500 rounded-lg transform -rotate-3"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;