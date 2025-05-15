import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientColors: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, gradientColors }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className={`bg-gradient-to-r ${gradientColors} p-6 flex justify-center`}>
        <div className="rounded-full bg-white/20 p-4 text-white">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-6 inline-flex items-center text-accent-600 font-medium hover:text-accent-800 transition-colors">
          Learn more
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;