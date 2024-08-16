// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to={"/"}>
              <h1 className='font-bold'>
                ☀️ Aquinas Library
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to={"/feed"}>
              Quizzes
            </Link>
            <Link to={"/login"} className="bg-yellow-500 text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">
              Log In
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to={"/feed"} className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:text-gray-900">
            Quizzes
          </Link>
          <Link to={"/login"} className="bg-yellow-500 text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;