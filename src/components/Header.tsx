import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-2xl">
          <nav className="hidden md:flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {links.map((l) => (
              <Link
                key={l.name}
                to={l.path}
                className="text-[10px] sm:text-xs md:text-sm transition-colors"
                style={{
                  color: location.pathname === l.path ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)'
                }}
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute inset-x-4 top-16 z-40 bg-[#101010] rounded-2xl p-6 flex flex-col gap-4 shadow-2xl border border-white/5">
          {links.map((l) => (
            <Link key={l.name} to={l.path} onClick={() => setOpen(false)} className={`text-sm ${location.pathname === l.path ? 'text-primary' : 'text-primary/70'}`}>
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
