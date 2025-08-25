const features = [
  {
    title: '360° FlightShield Sensors',
    desc: 'Smart awareness in every direction for confident flying.',
    img: '/drone3.png',
  },
  {
    title: 'Social-Ready Vertical Capture',
    desc: 'Instant vertical framing for TikTok, Reels, and shorts.',
    img: '/drone1.jpg',
  },
  {
    title: 'AutoPilot MotionTrack',
    desc: 'Seamlessly follow subjects with cinematic motion paths.',
    img: '/drone4.png',
  },
  {
    title: 'UltraLink 18 km HD Stream',
    desc: 'Crystal-clear live feed with extended range stability.',
    img: '/drone2.jpg',
  },
  {
    title: '5K/60fps Quantum HDR',
    desc: 'Sharper detail, richer colors, smoother skies.',
    img: '/drone5.jpg',
  },
  {
    title: 'FeatherLite™ Design – 245 g',
    desc: 'Ultralight build, travel-ready for any adventure.',
    img: '/Valley-Product-Portfolio.webp',
  },
];

export default function Features({ theme = 'dark' }) {
  return (
    <section className={`py-16 px-6 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <h2 className="text-4xl font-bold text-center mb-12">Highlighted Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className={`p-6 rounded-lg shadow-md transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gray-900 hover:bg-gray-800'
              : 'bg-white hover:bg-gray-200 border border-gray-200'
          }`}>
            <div className="mb-4">
              <img
                src={f.img}
                alt={f.title}
                className={`w-full h-48 object-cover rounded-md ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}
              />
            </div>
            <h3 className={`text-xl font-semibold mb-2 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>{f.title}</h3>
            <p className={`text-center ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}