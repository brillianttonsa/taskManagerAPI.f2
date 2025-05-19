import { useState } from 'react';
import {Menu, Plus} from 'lucide-react'

// imports components
import SideMenu from './SideMenu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div className='relative'>
    <header className="sticky top-0mx-auto p-2 sm:p-4  bg-blue-400 text-white">
        <div className='flex items-center space-x-1'>
          <button onClick={toggleSidebar}>{isOpen?<Plus/>:<Menu/>}</button>
          <h1>TaskManagement Dashboard</h1>
        </div>
    </header>
    <div className={`fixed bg-white shadow-2xl border-r-1 border-gray-300 w-48 h-screen transform transition-transform duration-300 ease-in-out ${isOpen? 'translate-x-0':'-translate-x-full'}`}>
        {isOpen && (
          <SideMenu/> 
     )}
    </div>
    </div>
  );
}

export default Header;