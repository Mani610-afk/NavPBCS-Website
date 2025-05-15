import React from 'react';
import { Monitor, Smartphone, Code, PenTool, BarChart } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Research and Development (R&D)  Centers',
    description: 'Direct and Indirect Cost for R&D Projects (including Prototype cost),Large R&D Project runs into numbers of Fiscal years',
    icon: <Monitor className="h-10 w-10" />,
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    title: 'GOI Projects - Cost Monitoring and Control',
    description: 'navPBCS is good tool to monitor and control GOI projects costs and it saves time in Reporting and controlling the budgets.',
    icon: <Smartphone className="h-10 w-10" />,
    color: 'from-green-500 to-green-700',
  },
  {
    id: 3,
    title: ' Not for Profit Sector (NGO)',
    description: 'NGO Sector has various magnitude and dimensions of Projects ,Certain Project runs into numbers of Fiscal years',
    icon: <Code className="h-10 w-10" />,
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 4,
    title: 'Micro, Small and Medium Enterprises (MSME)',
    description: 'navPBCS is the standard tool to assist MSME sector in strengthening internal Financial Controls',
    icon: <PenTool className="h-10 w-10" />,
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    id: 5,
    title: 'Organizations working on Tally, Busy and other Platforms',
    description: 'Connectors are installed with existing Accounting Software (Tally),navPBCS  tool has Direct links with General Ledger codes',
    icon: <BarChart className="h-10 w-10" />,
    color: 'from-pink-500 to-pink-700',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Taylor Made Solution for</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Driving performance through strategic planning and variance monitoring with tight contol on annual operating plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradientColors={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;