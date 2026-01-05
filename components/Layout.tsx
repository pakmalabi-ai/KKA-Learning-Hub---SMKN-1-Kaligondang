import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, ChevronRight, BookOpen, Brain, Terminal } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Beranda' },
    { path: '/materi-1', label: '1. Konsep Data' },
    { path: '/materi-2', label: '2. ERD & Relasi' },
    { path: '/materi-3', label: '3. SQL Dasar' },
    { path: '/materi-4', label: '4. Computer Vision' },
    { path: '/materi-5', label: '5. Profesi AI' },
    { path: '/materi-6', label: '6. Etika AI' },
    { path: '/materi-7', label: '7. Prompting' },
    { path: '/materi-8', label: '8. Evaluasi AI' },
    { path: '/materi-9', label: '9. Design Thinking' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass border-b border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-500 transition-colors">
              <Cpu size={24} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                KKA <span className="text-indigo-400">Smaksaka</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
             <Link to="/" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/' ? 'bg-indigo-600/20 text-indigo-300' : 'text-slate-400 hover:text-white'}`}>Home</Link>
             <div className="h-4 w-px bg-slate-700 mx-2"></div>
             <span className="text-xs text-slate-500 font-mono uppercase tracking-widest mr-2">Modul:</span>
             <select 
                className="bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2"
                onChange={(e) => window.location.hash = e.target.value}
                value={location.pathname}
             >
                <option value="/" disabled>Pilih Materi...</option>
                {menuItems.slice(1).map((item) => (
                    <option key={item.path} value={item.path}>{item.label}</option>
                ))}
             </select>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 p-4 absolute w-full max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium flex justify-between items-center ${
                    location.pathname === item.path 
                      ? 'bg-indigo-900/30 text-indigo-300 border border-indigo-500/30' 
                      : 'text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && <ChevronRight size={16} />}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 px-4 container mx-auto mb-12">
        <div className="animate-[fadeIn_0.5s_ease-out]">
            {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 font-medium">Dibangun dengan dedikasi oleh: Tim Guru KKA SMK Negeri 1 Kaligondang</p>
          <p className="text-slate-600 text-sm mt-2">© 2026 Smaksaka Digital Learning. All Rights Reserved.</p>
          <div className="flex justify-center gap-4 mt-4 opacity-50 text-slate-500">
             <BookOpen size={16} />
             <Brain size={16} />
             <Terminal size={16} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;