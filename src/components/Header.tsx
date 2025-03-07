import React from 'react';
import { useAppDispatch } from '../hooks/redux';
import { toggleSidebar } from '../features/sidebar/sidebarSlice';
import hamburger from '../assets/hamburger.svg'
import profile from '../assets/profile.svg'
import notification from '../assets/notification.svg'

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  }; 

  return (
    <header className='bg-navyBlue max-lg:w-screen lg:border-l-2 border-white p-2 shadow-[0_2px_4px_rgba(0,0,0,0.1)] flex justify-between items-center'>
      <section className='flex items-center'>
        <button 
          onClick={handleToggleSidebar}
        >
          <img src={hamburger} />
        </button>
      </section>
      <section className='flex items-center gap-4 pr-7'>
        <button>
          <img src={notification} />
        </button>
        <button>
          <img src={profile} />
        </button>
      </section>
    </header>
  );
};

export default Header;
