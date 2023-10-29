import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-500 to-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            {/* Logo - Increased Size */}
     
            
           
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
