import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'О бренде', path: '/about' },
    { name: 'Каталог', path: '/catalog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-stone-50 selection:bg-rose-200 selection:text-rose-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 text-rose-600 group-hover:bg-rose-100 transition-colors">
                <img src="/images/logo.png" alt="СкинФарм" className="w-8 h-8 object-cover rounded-full mix-blend-multiply" />
              </div>
              <span className="text-2xl font-semibold tracking-tight text-stone-900">СкинФарм</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                    isActive(link.path) ? 'text-rose-600' : 'text-stone-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/catalog"
                className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-rose-600 transition-colors flex items-center gap-2"
              >
                Подобрать уход
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-stone-600 hover:text-stone-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-200 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-rose-50 text-rose-600'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="md:col-span-1 space-y-4">
              <span className="text-2xl font-semibold tracking-tight text-white block mb-4">СкинФарм</span>
              <p className="text-sm text-stone-400 leading-relaxed">
                Космецевтика нового поколения, созданная на стыке природы и науки для здоровья вашей кожи.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Навигация</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-rose-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-stone-500" />
                  <a href="tel:+74950000000" className="hover:text-rose-400 transition-colors">+7 (495) 000-00-00</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-stone-500" />
                  <a href="mailto:hello@skinpharm.ru" className="hover:text-rose-400 transition-colors">hello@skinpharm.ru</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Соцсети</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="flex items-center gap-2 text-stone-400 hover:text-rose-400 transition-colors text-sm">
                  Telegram канал
                </a>
                <a href="#" className="flex items-center gap-2 text-stone-400 hover:text-rose-400 transition-colors text-sm">
                  ВКонтакте
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
            <p>© {new Date().getFullYear()} СкинФарм. Все права защищены. Разработано в лабораториях Москвы.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
