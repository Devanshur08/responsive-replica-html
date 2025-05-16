
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Promptie</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-purple-500">Home</Link>
          <Link to="/" className="text-sm font-medium hover:text-purple-500">Features</Link>
          <Link to="/" className="text-sm font-medium hover:text-purple-500">About Us</Link>
          <Link to="/" className="text-sm font-medium hover:text-purple-500">Contact</Link>
        </nav>
        
        <div className="flex">
          <Button className="bg-purple-light text-white hover:bg-purple">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
