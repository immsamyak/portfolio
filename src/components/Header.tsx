import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-200 bg-charcoal ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link to="/" className="font-mono text-sm text-snow tracking-heading" aria-label="Home">
              samyak.dev
            </Link>
            <nav className="hidden md:flex gap-6" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-mono text-xs transition-colors ${
                    location.pathname === item.path ? 'text-snow' : 'text-steel hover:text-snow'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <button
              className="md:hidden text-steel hover:text-snow transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-14 z-40 bg-charcoal border-t border-ash">
          <nav className="px-6 py-4 flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-mono text-xs py-2 ${
                  location.pathname === item.path ? 'text-snow' : 'text-steel'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
