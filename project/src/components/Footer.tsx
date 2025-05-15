import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Nav<span className="text-accent-500">PBCS</span>
            </h2>
            <p className="text-gray-300 mb-6">
            We build intuitive cloud solutions that let you monitor and control your annual operating plan, cost centers, locations, departments, and segments — all in one place..
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#DirectExpenses" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Explore</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Expertise</a>
              </li>
              <li>
                <a href="#Business Services" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Business Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Pricing</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Expertise</h3>
            <ul className="space-y-3">
              <li>
                <a href="#service" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Research and Development (R&D) Centers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">GOI Projects - Cost Monitoring and Control</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Not for Profit Sector (NGO)</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Micro, Small and Medium Enterprises (MSME)</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors duration-300">Organizations working on Tally, Busy and other Platforms</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300"> B1/H3, MOHAN CO-OPERATIVE,Mathura Rd, Industrial Area, BLOCK,New Delhi 110044</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@pruapps.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {year} NavPBCS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;