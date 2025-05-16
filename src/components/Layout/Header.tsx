
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-900">Promptie</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-purple-500">Home</Link>
          <Link to="/#features" className="text-sm font-medium text-gray-600 hover:text-purple-500">Features</Link>
          <Link to="/#about" className="text-sm font-medium text-gray-600 hover:text-purple-500">About Us</Link>
          <Link to="/#contact" className="text-sm font-medium text-gray-600 hover:text-purple-500">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hidden md:inline-flex">Log In</Button>
          <Button className="bg-purple-light hover:bg-purple text-white">Sign Up</Button>
          
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-purple-500">Home</Link>
            <Link to="/#features" className="text-sm font-medium text-gray-600 hover:text-purple-500">Features</Link>
            <Link to="/#about" className="text-sm font-medium text-gray-600 hover:text-purple-500">About Us</Link>
            <Link to="/#contact" className="text-sm font-medium text-gray-600 hover:text-purple-500">Contact</Link>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 justify-start px-0">Log In</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
