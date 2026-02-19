import { useState } from 'react';
import abstractBg from 'figma:asset/29fe9bf4fe8d7bc645e152c63d7bfc471c8a8cc4.png';

export function BetaAccessSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="bg-[#F7F9FC] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0 shadow-xl">
          {/* Left Side - Content and Form */}
          <div className="p-12 lg:p-16 flex flex-col justify-center bg-[#3ff4f400]">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Request Private Beta Access
            </h2>
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              Join our select group of healthcare pioneers and help shape the future of medical AI with intelligent automation at the point of care.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors uppercase tracking-wide text-sm"
              >
                Request Access
              </button>
            </form>
          </div>

          {/* Right Side - Abstract Image */}
          <div className="relative min-h-[400px] md:min-h-full">
            <img 
              src={abstractBg} 
              alt="Abstract blue flowing design" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}