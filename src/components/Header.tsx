import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const links = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[800px] z-50 bg-absolute-zero/60 backdrop-blur-xl border border-deep-graphite/40 rounded-pill shadow-2xl">
        <div className="px-6 flex items-center justify-between h-14">
          <Link to="/" className="text-frosted-canvas font-semibold text-body-sm tracking-body-sm">
            Samyak.
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.name}
                to={l.path}
                className={`text-caption tracking-caption transition-colors ${
                  location.pathname === l.path ? 'text-frosted-canvas' : 'text-faded-steel hover:text-frosted-canvas'
                }`}
              >
                {l.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-caption text-frosted-canvas border border-frosted-canvas/30 rounded-pill px-5 py-1.5 hover:bg-frosted-canvas hover:text-absolute-zero hover:shadow-[0_0_20px_rgba(255,252,225,0.2)] transition-all duration-300"
            >
              Get in touch
            </Link>
          </nav>
          <button
            className="md:hidden text-frosted-canvas"
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
      {open && (
        <div className="md:hidden fixed inset-x-4 top-24 z-40 bg-absolute-zero/90 backdrop-blur-lg border border-deep-graphite/40 rounded-card p-6 flex flex-col gap-4 shadow-2xl">
          {links.map((l) => (
            <Link key={l.name} to={l.path} className={`text-body-sm ${location.pathname === l.path ? 'text-frosted-canvas' : 'text-faded-steel'}`}>
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
