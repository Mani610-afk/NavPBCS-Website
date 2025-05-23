import { FaShieldAlt, FaChartPie, FaMobileAlt, FaCogs } from 'react-icons/fa';

const features = [
  {
    icon: <FaCogs className="text-red-500 text-2xl" />,
    title: 'Easy to Activate Solution',
    desc: "Our solution is easiest to configure and use. It takes very little time to start, which means you don’t have to wait for a long. The best thing is it easy to configure and operate .."
  },
  {
    icon: <FaChartPie className="text-red-500 text-2xl" />,
    title: 'Integrated Business',
    desc: "Your Key business costs will be in your pocket control with PBCS . Yes, it not only removes silos with integrated processes across departments, but also improves scalability, automatic controls and business agility while enjoying the benefits of other inter related applications."
  },
  {
    icon: <FaShieldAlt className="text-red-500 text-2xl" />,
    title: 'All in One Solution',
    desc: "PBCS enables you to manage your financial and operational data efficiently. From expenses to planning activities like forecasts, budgets, and workforce planning—everything is streamlined and easy to maintain with minimal effort."
  },
  {
    icon: <FaMobileAlt className="text-red-500 text-2xl" />,
    title: 'Business on the Move',
    desc: "PBCS' is a cloud-based solution that not only enables you access through any mobile devices on the move, but also you can access information from anywhere and update on fingertips. It’s time to adapt global practices, improve performance and decision making."
  },
  {
    icon: <FaShieldAlt className="text-red-500 text-2xl" />,
    title: 'Advanced Protection',
    desc: "PBCS  provides you with advanced protection, which include device binding, offline synchronization, audit trails, data encryption, automatic regular backups, and ransomware protection, etc."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-primary-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
              Organisation’s path to the success
            </h2>
            <p className="text-xl text-gray-700 mb-8">with NavPBCS Application</p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-primary-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-md">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">
              Read More
            </button> */}
          </div>

          {/* RIGHT: Mobile UI Image */}
          <div className="flex justify-center">
            <img
              src="/NavPBCS Dashboard.png" // Replace with actual image path or URL
              alt="NavPBCS mobile dashboard"
              className="max-w-3xl w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
