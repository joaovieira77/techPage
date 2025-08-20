import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ProEdition from './components/ProEdition';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`${theme === 'dark' 
      ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
      : 'bg-gradient-to-b from-gray-100 to-white text-gray-900'
    } font-sans transition-all duration-300 min-h-screen`}>
      <Hero theme={theme} />
      <Features theme={theme} />
      <Testimonials theme={theme} />
      <ProEdition theme={theme} />
      <Footer theme={theme} />
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;