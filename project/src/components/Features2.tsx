import { FaChartLine, FaDollarSign, FaGlobe, FaRobot, FaHandsHelping, FaDesktop, FaWifi, FaBell, FaRoute, FaBalanceScale } from 'react-icons/fa';
const leftFeatures = [
  { icon: <FaChartLine />, text: 'Increase Profitability' },
  { icon: <FaDollarSign />, text: 'Cost Effective, Simple and Extendable' },
  { icon: <FaGlobe />, text: 'Global Best Practices with pre built templates' },
  { icon: <FaRobot />, text: 'AI based Real Time Decisions' },
  { icon: <FaHandsHelping />, text: 'Innovative Support System' },
];

const rightFeatures = [
  { icon: <FaDesktop />, text: 'Pre-Defined Parameters for Expense and Monitoring' },
  { icon: <FaWifi />, text: 'Offline Access' },
  { icon: <FaBell />, text: 'User Defined Alerts' },
  { icon: <FaRoute />, text: 'Traceability' },
  { icon: <FaBalanceScale />, text: 'Department wise Profitability & Costs' },
];

const Features2 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">Why finance teams</h2>
        <h3 className="text-xl text-gray-600 mb-4">love NavPBCS?</h3>
        <p className="text-md text-gray-500 max-w-xl mx-auto mb-12">
        We believe planning should be smart, agile, and stress-free. If you value simplicity and control in financial management, you're in the right place.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-end gap-6">
            {leftFeatures.map((item, index) => (
              <div key={index} className="flex items-center text-left gap-3 text-red-600">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm text-gray-800 w-48">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Center - Phone Mockup */}
          <div className="flex justify-center">
            <div className="w-[240px] h-[480px] bg-white border-2 border-gray-200 rounded-3xl flex items-center justify-center shadow-xl">
              <img
                src="public\NavPBCS Logo.png" // Replace with your actual logo path
                alt="NavFarm Logo"
                className="w-24"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start gap-6">
            {rightFeatures.map((item, index) => (
              <div key={index} className="flex items-center text-left gap-3 text-red-600">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm text-gray-800 w-48">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
