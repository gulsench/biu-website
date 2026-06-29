import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-color-bg">
      <div className="text-center">
        <h1 className="font-heading text-5xl font-medium mb-4 text-color-text">
          404
        </h1>
        <p className="text-xl text-color-text-muted mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue hover:opacity-80 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
