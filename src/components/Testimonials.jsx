import { useState } from 'react';

const testimonials = [
  {
    name: 'Michael Chen',
    title: 'Aerial Photographer',
    img: '/Face.1jpeg.jpeg',
    review: 'The Mini 4\'s obstacle sensing and intelligent flight modes make capturing stunning aerial shots a breeze.'
  },
  {
    name: 'Sara Lee',
    title: 'Travel Blogger',
    img: '/Face2jpeg.jpeg',
    review: 'Lightweight and easy to use, it fits perfectly in my backpack for every adventure.'
  },
  {
    name: 'David Kim',
    title: 'Drone Enthusiast',
    img: '/Face3.jpeg',
    review: 'The 4K HDR video quality is simply stunning. I love sharing my footage online!'
  },
  {
    name: 'Anthoine Smith',
    title: 'Content Creator',
    img: '/Face4.jpeg',
    review: 'ActiveTrack 360° lets me get creative shots without worrying about controls.'
  },
  {
    name: 'Carla Mendes',
    title: 'Tech Reviewer',
    img: '/Face5.jpeg',
    review: 'Impressed by the long battery life and stable connection, even in windy conditions.'
  },
  {
    name: 'Stephen Brown',
    title: 'Filmmaker',
    img: '/Face.jpeg',
    review: 'The drone\'s portability and ease of use make it my go-to for quick shoots.'
  },
];

export default function Testimonials({ theme = 'dark' }) {
  const [selected, setSelected] = useState(0);
  
  return (
    <section className={`py-16 px-6 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <h2 className={`text-3xl font-semibold mb-8 text-center ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>See What Pilots Are Saying</h2>
      <div className="flex justify-center gap-6 mb-8">
        {testimonials.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`rounded-full border-4 transition-all duration-200 w-20 h-20 overflow-hidden focus:outline-none ${
              selected === i 
                ? `scale-110 ${theme === 'dark' ? 'border-blue-400' : 'border-blue-500'}` 
                : `${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`
            }`}
            aria-label={`Show testimonial from ${t.name}`}
          >
            <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      <div className={`max-w-2xl mx-auto rounded-lg p-8 text-center shadow-lg transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900' 
          : 'bg-white border border-gray-200'
      }`}>
        <p className={`text-lg italic mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>"{testimonials[selected].review}"</p>
        <p className={`${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>— {testimonials[selected].name}, {testimonials[selected].title}</p>
      </div>
    </section>
  );
}