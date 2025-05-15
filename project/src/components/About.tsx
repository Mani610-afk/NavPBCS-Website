import React from 'react';
import { CheckCircle } from 'lucide-react';

const values = [
  'Excellence in every detail',
  'Client-focused approach',
  'Innovative solutions',
  'Transparent communication',
  'Agile methodology',
  'Continuous improvement'
];
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team collaboration"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="absolute top-0 left-0 bg-primary-900 w-full h-full rounded-lg transform -translate-x-4 -translate-y-4 -z-0"></div>
            <div className="absolute -bottom-6 -right-6 bg-accent-500 w-32 h-32 rounded-lg transform rotate-12 -z-0"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">About Our Company</h2>
            <div className="w-20 h-1 bg-accent-500 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
            Started with an objective to enhance customer (user) delight and rich experience with advance featured - Pru Apps is focused on applications that enhance user experience. These applications are specifically designed to address advance business functionalities for ERP helping users in capturing/ extracting data beyond existing systems eventually building better control in automated manner. 
            </p>
            <p className="text-lg text-gray-600 mb-8">
            With this vision, the Alpha application launched Pru Apps is navPBCS. With Planning and budgeting application helps organizations to plan annual activities in advance and control via drilled down budgets. These budgets are mapped against actual on real time basis.
            </p>
            
            <h3 className="text-xl font-semibold text-primary-900 mb-4">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-accent-500 h-5 w-5" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-primary-900 hover:bg-primary-800 text-white py-3 px-8 rounded-full transition duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;