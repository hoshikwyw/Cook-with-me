import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-surface shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-primary font-display font-bold text-xl">
              Cook With Me
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link 
                to="/" 
                className="text-primary font-semibold hover:text-primary-600 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/recipes" 
                className="text-text-dark hover:text-primary transition-colors"
              >
                Recipes
              </Link>
              <Link 
                to="/meal-plans" 
                className="text-text-dark hover:text-primary transition-colors"
              >
                Meal Plans
              </Link>
              <Link 
                to="/profile" 
                className="text-text-dark hover:text-primary transition-colors"
              >
                Profile
              </Link>
            </div>
          </div>
          <button className="bg-accent text-white px-6 py-2 rounded-xl font-semibold hover:bg-accent-600 transition-colors shadow-playful">
            Explore
          </button>
        </div>
      </div>
    </nav>
  );
}

