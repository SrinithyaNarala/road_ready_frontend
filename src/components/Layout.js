import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/login', '/register'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div className="layout">
      {!shouldHideNavbar && <Navbar />}
      <main className={`main-content ${shouldHideNavbar ? 'no-navbar' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

