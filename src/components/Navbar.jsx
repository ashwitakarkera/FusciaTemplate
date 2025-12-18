import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#E91E63]/95 to-[#FF1493]/95 backdrop-blur-xl border-b-2 border-[#FFD700]/40 shadow-2xl px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#E91E63] rounded-2xl shadow-xl flex items-center justify-center">
              <span className="text-lg font-bold text-white">S&amp;P</span>
            </div>
            <h1 className="text-lg font-light italic text-[#FFD700] drop-shadow-lg">
              Saumya &amp; Pratham
            </h1>
          </div>

          {/* Hamburger Button */}
          <button
            className="p-2 text-[#FFD700] hover:text-white hover:bg-white/20 rounded-xl transition-all duration-300 shadow-lg text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-2 bg-[#E91E63]/98 backdrop-blur-xl border-t-2 border-[#FFD700]/50 py-6 px-4 rounded-b-3xl shadow-2xl">
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Couple', id: 'couple' },
                { name: 'Events', id: 'events' },
                { name: 'Venue', id: 'venue' },
                { name: 'Dress Code', id: 'dresscode' },
                { name: 'RSVP', id: 'rsvp' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left py-4 px-4 text-white hover:text-[#FFD700] font-semibold text-base border-b border-[#FFD700]/30 hover:border-[#FFD700]/70 transition-all duration-300 flex items-center rounded-xl hover:bg-white/10"
                  >
                    <span className="flex-1">{item.name}</span>
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full opacity-70"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}


