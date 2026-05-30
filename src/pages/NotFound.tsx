import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();
  useEffect(() => { console.error('404:', location.pathname); }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-absolute-zero px-6">
      <div className="text-center">
        <h1 className="text-display font-semibold text-deep-graphite">404</h1>
        <p className="text-body text-faded-steel mb-10">Page not found</p>
        <a href="/" className="text-body-sm text-frosted-canvas border border-frosted-canvas rounded-pill px-6 py-3 hover:bg-frosted-canvas hover:text-absolute-zero transition-colors">
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
