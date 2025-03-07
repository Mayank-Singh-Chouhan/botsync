import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { Toaster } from './ui/sonner';

const Layout: React.FC = () => {
  return (
    <div className='flex h-screen' >
      <Sidebar />
      <div className='flex flex-col flex-1 overflow-hidden' >
        <Header />
        <main className='flex-1 py-9 px-8 max-lg:w-screen overflow-auto'>
          <Outlet />
        </main>
        <Toaster />
      </div>
    </div>
  );
};

export default Layout;