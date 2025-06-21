import React from 'react';

export default function Friends() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-cover bg-center text-white py-20 px-4" style={{ backgroundImage: `url('/assets/friendsbg.png')` }}>
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find A Friend Near You.</h1>
          <p className="mb-6 text-lg">Fill the form below to connect with a friend just near you and talk.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Enter zip code, city, LG, state"
              className="w-full sm:w-auto px-4 py-2 text-black rounded shadow-md"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white">
              Find friend →
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">How It Works?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper pellentesque ut.
          Nam sed non nullam nisl non pulvinar.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-gray-50 p-6 rounded shadow text-left">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold ${
                num === 1 ? 'bg-gray-600' : num === 2 ? 'bg-blue-600' : 'bg-orange-500'
              }`}>
                {num}
              </div>
              <h3 className="font-semibold text-lg mb-2">Lorem ipsum dolor sit amet</h3>
              <p className="text-sm text-gray-600">
                Auctor suscipit eget urna sapien. Ullamcorper bibendum ut sit nunc pellentesque.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
