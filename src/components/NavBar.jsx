import { useState, useEffect } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Hàm scroll mượt
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Đóng menu mobile
    }
  };

  // Highlight link khi scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset cho navbar cố định

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Gọi lần đầu
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-sm text-white shadow-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition"
        >
          My Portfolio
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`transition font-medium ${
                  activeSection === item.id
                    ? 'text-sky-400 font-bold'
                    : 'hover:text-sky-300'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Nút Toggle Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition font-medium ${
                    activeSection === item.id
                      ? 'text-sky-400 font-bold'
                      : 'hover:text-sky-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;