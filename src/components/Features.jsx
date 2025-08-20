const features = [
  {
    title: 'Omnidirectional Sensing',
    desc: 'Obstacle detection in all directions for safer flights.',
    img: '/Obstacle-avoidance-function.webp',
  },
  {
    title: 'True Vertical Shooting',
    desc: 'Perfect for social media content with real vertical framing.',
    img: '/1_1.webp',
  },
  {
    title: 'ActiveTrack 360°',
    desc: 'Smart tracking with smooth and creative movements.',
    img: '/Jungle-flight-posture.webp',
  },
  {
    title: '20 km FHD Transmission',
    desc: 'Stable, long-range connection with Full HD quality.',
    img: '/Handheld-RC-2-Remote-Control-2.webp',
  },
  {
    title: '4K/60fps HDR',
    desc: 'High-definition video with vibrant colors and sharp details.',
    img: '/7.jpg',
  },
  {
    title: 'Under 249 g',
    desc: 'Ultralight and ideal for beginners and recreational flights.',
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