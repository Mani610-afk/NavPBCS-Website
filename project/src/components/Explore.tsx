import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

// Category list
const categories = ['Direct Expenses', 'In Direct Expenses', 'Fixed Assets'] as const;
type Category = typeof categories[number];

// Features for each category
const featureMap: Record<Category, string[]> = {
  'Direct Expenses': ['Purchase', 'Inventory', 'Employee Cost', 'Other Direct Cost', 'Maintenance'],
  'In Direct Expenses': ['Employee cost', 'Projects', 'Incentives', 'Overheads', 'Depreciation', 'Finance Cost'],
  'Fixed Assets': ['Project Cost','Employee Cost','Indirect Cost','Finance Cost'],
};

const explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Direct Expenses');
  const features = featureMap[selectedCategory];
  const mid = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, mid);
  const rightFeatures = features.slice(mid);

  return (
    <section id="DirectExpenses" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
   <div className="flex justify-center">
  <div className="w-[300px] h-[500px] bg-gray-100 rounded-3xl shadow-inner relative p-4 overflow-hidden">
    <img 
      src="/Explore.png" 
      alt="Phone Screenshot"
      className="max-w-5xl w-full rounded-3xl shadow-xl"
    />
  </div>
</div>
          {/* Right - Text + Categories + Features */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Systematic, Automated and Built-in Control Mechanism
            </h2>
            <p className="text-xl text-gray-600 mb-4">Works with Common ERP like Tally, SAP, Oracle, Microsoft etc</p>
            <p className="text-md text-gray-500 mb-6">
              Consolidated view of your entire Budgeting and Planning process across departments — all in single powerful platform.
            </p>

            {/* Categories */}
            <div className="flex overflow-x-auto gap-4 mb-6">
              {categories.map(cat => (
                <div
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-w-[100px] px-4 py-4 rounded-lg text-center text-sm font-medium shadow-md cursor-pointer transition ${
                    cat === selectedCategory
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-red-500 border'
                  }`}
                >
                  {cat}
                </div>
              ))}
            </div>
{/* Features split into two columns with inline flex-gap of 2rem (32px) */}
<div
  className="flex mb-6 text-sm"
  style={{ gap: '2rem' /* 2rem = 32px */ }}
>
  {/* Left column */}
  <div className="flex flex-col gap-y-2">
    {leftFeatures.map(feat => (
      <div key={feat} className="flex items-center gap-2 whitespace-nowrap">
        <FaCheckCircle className="text-blue-900 shrink-0" />
        {feat}
      </div>
    ))}
  </div>
  {/* Right column */}
  <div className="flex flex-col gap-y-2">
    {rightFeatures.map(feat => (
      <div key={feat} className="flex items-center gap-2 whitespace-nowrap">
        <FaCheckCircle className="text-blue-900 shrink-0" />
        {feat}
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default explore;
