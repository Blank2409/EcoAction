import { Leaf, UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="w-8 h-8" />
          <h1 className="text-2xl font-bold">EcoAction</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-green-200">Home</a></li>
              <li><a href="#" className="hover:text-green-200">About</a></li>
              <li><a href="#" className="hover:text-green-200">Contact</a></li>
            </ul>
          </nav>

          <button className="flex items-center space-x-2 hover:text-green-200">
            <UserCircle className="w-8 h-8" />
            <span className="hidden md:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;