import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass =
    'block px-4 py-2 text-white hover:text-yellow-400 transition-colors duration-200';

  const activeClass = 'text-yellow-400 font-semibold';

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Zulutech</div>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          ☰
        </button>
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Contact</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Login</NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Signup</NavLink>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <NavLink to="/" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Contact</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Login</NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Signup</NavLink>
        </div>
      )}
    </nav>
  );
}
