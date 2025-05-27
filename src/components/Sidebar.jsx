import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { profileImage } from '../assets/images';
// import SidebarWrapper from '../styleWrappers';
import { SidebarWrapper } from '../styleWrappers';
import { RiMenuLine, RiCloseLargeFill } from 'react-icons/ri';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <SidebarWrapper>
      {/* Toggle button for mobile */}
      <button className="mobile-toggle" onClick={() => setOpen(!open)}>
        {open ? <RiCloseLargeFill color="#d12121" fontSize={20} /> : <RiMenuLine color="#fff" fontSize={20} />}
      </button>

      {/* Sidebar container */}
      <aside className={`sidebar ${open ? '' : 'hidden'}`}>
        <header className="sidebar_header">
          <div className="sidebar_profile_outer">
            <div className="sidebar_profile_container">
              <img src={profileImage} alt="profile" className="sidebar_profile_img" />
              <span className="notification">4</span>
            </div>
          </div>
          <div className="d-flex flex-column gap-1">
            <h3>Samantha</h3>
            <p className="text-white-alt">samantha@gmail.com</p>
          </div>
        </header>

        <nav className="sidebar_nav">
          <ul onClick={() => setOpen(false)}>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => `app-menu-item ${isActive ? 'active' : ''}`}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={({ isActive }) => `app-menu-item ${isActive ? 'active' : ''}`}>
                Expenses
              </NavLink>
            </li>
            <li>
              <NavLink to="/wallet" className={({ isActive }) => `app-menu-item ${isActive ? 'active' : ''}`}>
                Wallet
              </NavLink>
            </li>
            <li>
              <NavLink to="/summary" className={({ isActive }) => `app-menu-item ${isActive ? 'active' : ''}`}>
                Summary
              </NavLink>
            </li>
            <li>
              <NavLink to="/accounts" className={({ isActive }) => `app-menu-item ${isActive ? 'active' : ''}`}>
                Accounts
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={({ isActive }) => `app-menu-item ${isActive ? 'active' : ''}`}>
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </SidebarWrapper>
  );
};

export default Sidebar;
