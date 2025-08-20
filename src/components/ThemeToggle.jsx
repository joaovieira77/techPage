import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
<button
  onClick={toggleTheme}
  className={`fixed right-6 bottom-8 z-50 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 border ${
    theme === 'dark' ? 'bg-black border-gray-700' : 'bg-white border-gray-300'
  }`}
  aria-label="Toggle theme"
  title="Toggle light/dark mode"
>
  <img
    src="/light.png"
    alt="Toggle theme icon"
    className="w-10 h-10"
  />
</button>


  );
}