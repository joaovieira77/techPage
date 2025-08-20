import { useState } from 'react';

const versions = [
  {
    name: 'DJI Mini 4 Pro (RC-N2)',
    price: '€809',
    description: 'Includes the RC-N2 remote controller. Enjoy advanced features like omnidirectional obstacle sensing, ActiveTrack 360°, and 4K/60fps HDR video for professional-level creativity and safety.',
    image: 'rc.png',
    whatsIncluded: ['Drone', 'RC-N2 Remote Controller', 'Battery'],
  },
  {
    name: 'DJI Mini 4 Pro (RC2)',
    price: '€1019',
    description: 'Comes with the upgraded RC2 remote controller featuring a built-in screen. Experience all the advanced flight and camera features, plus enhanced convenience and control for seamless flying.',
    image: 'rc2.png',
    whatsIncluded: ['Drone', 'RC2 Remote Controller', 'Battery'],
  },
  {
    name: 'Fly More Combo',
    price: '€1149',
    description: 'Get the complete package: extra batteries, propellers, charging hub, and a carrying case. Perfect for extended adventures and uninterrupted shooting sessions.',
    image: 'combo.png',
    whatsIncluded: ['Drone', 'Remote Controller', '3 Batteries', 'Charging Hub', 'Carrying Case'],
  },
];

export default function VersionsSlider({ theme = 'dark' }) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % versions.length);
  const prev = () => setCurrent((current - 1 + versions.length) % versions.length);
  const version = versions[current];

  return (
    <section className={`py-20 px-6 text-center transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <h2 className={`text-4xl font-bold mb-10 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>Choose Your Version</h2>

      <div className="relative max-w-3xl mx-auto p-8">
        {/* Image */}
        <div className="h-64 mb-6 flex items-center justify-center overflow-visible">
          {version.image ? (
            <img 
              src={version.image} 
              alt={version.name} 
              className="h-full object-contain transition-transform duration-300 hover:scale-105" 
            />
          ) : (
            <span className="text-gray-500">[ Error. ]</span>
          )}
        </div>

        {/* Info */}
        <h3 className={`text-2xl font-semibold mb-2 ${
          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
        }`}>{version.name}</h3>

        <p className={`mb-2 text-base md:text-lg ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>{version.description}</p>

        {/* What's Included */}
        <div className="mb-4">
          <h4 className={`text-lg font-semibold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>What's Included</h4>
          <ul className={`list-disc list-inside text-left max-w-xs mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {version.whatsIncluded.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <p className={`text-2xl font-bold mb-4 ${
          theme === 'dark' ? 'text-green-400' : 'text-green-600'
        }`}>{version.price}</p>

        <button className={`px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 mb-2 ${
          theme === 'dark' 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}>
          Buy Now
        </button>

        {/* Arrows */}
        <div className="flex justify-between mt-8">
          <button 
            onClick={prev} 
            className={`text-3xl px-4 py-2 rounded-full shadow-md transition-all ${
              theme === 'dark' 
                ? 'bg-gray-800/70 text-white hover:text-blue-400' 
                : 'bg-gray-300/70 text-gray-900 hover:text-blue-600'
            }`}
          >
            ←
          </button>
          <button 
            onClick={next} 
            className={`text-3xl px-4 py-2 rounded-full shadow-md transition-all ${
              theme === 'dark' 
                ? 'bg-gray-800/70 text-white hover:text-blue-400' 
                : 'bg-gray-300/70 text-gray-900 hover:text-blue-600'
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
