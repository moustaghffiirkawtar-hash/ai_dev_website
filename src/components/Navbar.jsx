import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 border-b border-cyan-500/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-extrabold text-xl tracking-wider">
            <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              AI & DEV
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-cyan-400 transition-colors font-medium">Accueil</Link>
            <Link to="/past-events" className="hover:text-cyan-400 transition-colors font-medium">Événements Passés</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors font-medium">Contact</Link>
            <Link to="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 py-2 rounded-full font-bold transition-all text-sm shadow-lg shadow-cyan-500/30">
              Rejoindre
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 text-center">
            <Link to="/" className="block py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Accueil</Link>
            <Link to="/past-events" className="block py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Événements Passés</Link>
            <Link to="/contact" className="block py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}