import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline block mb-2">
          Return to Home
        </a>
        <a href="mailto:samyakchy1@gmail.com" className="text-indigo-500 hover:text-indigo-700 underline block mb-2">
          Email: samyakchy1@gmail.com
        </a>
        <a href="https://github.com/immsamyak" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black underline block mb-2">
          GitHub: immsamyak
        </a>
        <a href="https://www.linkedin.com/in/samyakchy/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 underline block">
          LinkedIn: samyakchy
        </a>
      </div>
    </div>
  );
};

export default NotFound;
