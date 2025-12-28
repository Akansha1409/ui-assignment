import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "$0", features: ["1 User", "Basic Support", "5GB Storage"] },
    { name: "Pro", price: "$29", features: ["5 Users", "Priority Support", "50GB Storage"], recommended: true },
    { name: "Enterprise", price: "$99", features: ["Unlimited Users", "24/7 Support", "Unlimited Storage"] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-400">Choose the plan that fits your scale.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative bg-card p-8 rounded-2xl border ${plan.recommended ? 'border-primary shadow-2xl shadow-primary/20' : 'border-gray-800'} flex flex-col`}>
             {plan.recommended && (
               <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full font-bold">MOST POPULAR</span>
             )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-extrabold mb-6">{plan.price}<span className="text-lg font-normal text-gray-500">/mo</span></div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-gray-300">
                  <Check className="h-5 w-5 text-green-400" /> {feat}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${plan.recommended ? 'bg-primary hover:bg-indigo-600' : 'bg-white/10 hover:bg-white/20'}`}>
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;