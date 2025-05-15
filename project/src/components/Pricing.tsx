import { FaTruck, FaWind, FaCity } from 'react-icons/fa';

const Pricing = () => {
  return (
<section id="pricing" className="py-20 bg-gray-50">    
  <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">Affordable Pricing and Packages</h2>
        <p className="text-xl text-gray-600 mb-2">Select the plan that fits your needs best</p>
        <p className="text-md text-gray-500 max-w-2xl mx-auto mb-12">
          Monotonectally grow strategic process improvements vis-a-vis integrated resources.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Plan Card Template */}
          {[
            {
              icon: <FaTruck />,
              title: 'Small',
              price: 'Limited Free Trial',
              description: 'Enjoy all the benefits that come with our Farm Operations, Daily Receipts & Expenses Module without any commitments.',
              button: 'Start Now',
              theme: 'red',
              ctaLink: '#',
            },
            {
              icon: <FaWind />,
              title: 'Medium',
              price: '$45 /User/Month',
              description: 'Best suited for small farm owners with our Pre-defined Templates, Real-time Notifications & Reports.',
              button: 'Purchase Now',
              theme: 'blue',
              ctaLink: '#',
              popular: true,
            },
            {
              icon: <FaCity />,
              title: 'Enterprise',
              price: 'Get a Quote',
              description: 'For Large Agribusinesses with Multi-farm Operations, Integrated Units, and Advanced Reports.',
              button: 'Request Demo',
              theme: 'blue',
              ctaLink: '#',
            },
          ].map((plan, index) => (
            <a
              key={index}
              // href={plan.ctaLink}
              className={`relative block bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform text-center group ${
                plan.popular ? 'border-2 border-red-500 shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className={`text-4xl text-${plan.theme}-600 mb-4 mx-auto`}>
                {plan.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{plan.title}</h3>
              <p className="text-md font-bold text-gray-800 mb-4">{plan.price}</p>
              <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
              <span
                className={`inline-block px-6 py-2 rounded-full text-sm font-medium ${
                  plan.theme === 'red'
                    ? 'text-red-700 border border-red-600 group-hover:bg-red-50'
                    : 'bg-blue-900 text-white group-hover:bg-blue-800'
                }`}
              >
                {plan.button}
              </span>
              <p className="text-xs text-blue-500 underline mt-2">Read more</p>
            </a>
          ))}
        </div>

        {/* Contact prompt */}
        <p className="text-sm text-gray-500 mb-12">
          Need a custom solution or more information?{' '}
          <a href="#contact" className="text-blue-600 underline">
            Contact us
          </a>
        </p>

        {/* Bottom Info Grid */}
        <div className="grid md:grid-cols-4 gap-8 text-left text-sm text-gray-600 max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Mode of Payment</h4>
            <p>NEFT, Credit/Debit Card, PayPal – all accepted to ensure ease of payment.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Taxes Applicable as Actuals</h4>
            <p>VAT and local taxes will be added as per your country's regulations.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Yearly Packages</h4>
            <p>Yearly subscribers enjoy surprise discounts and special promotions. Contact us to learn more.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">One Price, Multiple Benefits</h4>
            <p>
              One subscription works for poultry, dairy, fisheries, and more — no separate charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
