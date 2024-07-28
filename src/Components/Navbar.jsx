// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-700 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-3xl font-bold">START FRAMEWORK</Link>
        <ul className="flex space-x-10 font-bold ">
          <li><Link to="/about" className='align-middle text-pink-300'>About</Link></li>
          <li><Link to="/portfolio" className='align-middle text-pink-300'>Portfolio</Link></li>
          <li><Link to="/contact" className='align-middle text-pink-300'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
