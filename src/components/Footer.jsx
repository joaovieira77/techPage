export default function Footer() {
  return (
    <footer className="relative w-full min-h-[200px] flex items-end bg-gray-950 dark:bg-gray-950 light:bg-gray-200 border-t border-gray-800 dark:border-gray-800 light:border-gray-300 overflow-hidden transition-colors">
      {/* Footer background image */}
      <img 
        src="/yurr.jpg" 
        alt="Footer background" 
        className="absolute inset-0 w-full h-full object-cover scale-110 z-0 object-[30%_62%]" 
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/60 light:bg-black/40 z-10" />
      {/* Content on the left */}
      <div className="relative z-20 flex flex-col items-start justify-end h-full max-w-4xl w-full px-8 py-10 gap-3">
        <p className="text-lg font-semibold text-white tracking-wide">Fly More. Create Better.</p>
        <a 
          href="./Pr" 
          className="text-blue-400 dark:text-blue-400 light:text-blue-500 hover:text-blue-300 dark:hover:text-blue-300 light:hover:text-blue-600 font-medium transition underline underline-offset-4"
        >
          Choose Your Edition →
        </a>
        <div className="text-gray-500 dark:text-gray-500 light:text-gray-400 text-sm mt-4">
          &copy; {new Date().getFullYear()} João Vieira. All rights reserved.
        </div>
      </div>
    </footer>
  );
}