export default function Hero({ theme = 'dark' }) {
  return (
    <section className="relative text-center py-20 px-6 overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/d2756ce3-23e9-4087-9eb7-f35fe9c84def.webm" 
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for readability */}
      <div className={`absolute inset-0 z-10 ${
        theme === 'dark' ? 'bg-black/40' : 'bg-black/20'
      }`} />
      {/* Content */}
      <div className="relative z-20 w-full">
        <h1 className="text-5xl font-bold mb-4 text-white">DJI MINI 4 PRO</h1>
        <p className="text-xl mb-6 text-white">A New Standard for Compact Flight</p>
        <p className={`max-w-xl mx-auto mb-8 ${
          theme === 'dark' ? 'text-gray-200' : 'text-gray-100'
        }`}>
          Advanced technology meets effortless portability. Capture stunning aerial footage with ease.
        </p>
        <button className={`py-2 px-6 rounded transition-colors text-white ${
          theme === 'dark' 
            ? 'bg-gray-700 hover:bg-gray-600' 
            : 'bg-gray-800 hover:bg-gray-700'
        }`}>
          Buy Now
        </button>
      </div>
    </section>
  );
}