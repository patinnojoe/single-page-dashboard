import { styled } from '@mui/material';

const SidebarWrapper = styled('div')`
  .sidebar_profile_outer {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .sidebar_header {
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .app-menu-item {
    color: var(--text-white-alt);
    text-decoration: none;
    font-size: var(--font-18);
    transition: all 0.3s ease-in-out;
    display: inline-block;
  }
  .app-menu-item:hover {
    transform: scale(1.1);
    color: var(--text-white);
  }

  .app-menu-item.active {
    color: var(--text-white);
    font-weight: 600;
  }

  .notification {
    position: absolute;
    top: -15px;
    right: -8px;
    background-color: var(--danger);
    padding: 0.5rem;
    border-radius: 50%;
    height: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30px;
  }

  .sidebar {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    transform: translateX(0);
  }
  .sidebar_profile_container {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
  }
  .sidebar_profile_container .sidebar_profile_img {
    height: 100%;
    width: 100%;
    /* object-fit: cover; */
  }

  .sidebar.hidden {
    transform: translateX(-100%);
    display: none;
  }

  .mobile-toggle {
    display: none;
    position: fixed;
    top: -10px;
    left: 1rem;
    z-index: 1100;
    font-size: 2rem;
    color: white;
    background: transparent;
    border: none;
  }

  .sidebar_nav > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
  }

  /* mobile media query */
  @media (max-width: 768px) {
    .mobile-toggle {
      display: block;
    }

    .sidebar {
      padding: 2rem;
      background: var(--black);
      height: 100vh;
      z-index: 99;
      position: absolute;
      top: 0;
    }
  }
`;

export default SidebarWrapper;
