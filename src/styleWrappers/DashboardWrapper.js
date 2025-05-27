import { styled } from '@mui/material';

const DashboardWrapper = styled('div')`
  .dashboard-layout {
    background-color: var(--primary);
    color: var(--text-white);
    width: 100vw;
    height: 100vh;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
  .dashboard-main {
    width: 100%;
    background-color: #fff;
    border-radius: 20px;
    color: var(--primary);
    margin: 2rem;
    /* padding: 2rem; */

    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-gutter: stable both-edges;
  }

  .dashboard-main::-webkit-scrollbar {
    width: 8px;
  }

  .dashboard-main::-webkit-scrollbar-track {
    background: transparent;
    margin-block: 10px;
  }

  .dashboard-main::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 20px;
    border: 2px solid #fff;
  }

  /* Firefox */
  .dashboard-main {
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
  }

  /* mobile media query */
  @media (max-width: 768px) {
    .dashboard-main {
      margin: 2rem 1rem;
    }
  }
`;

export default DashboardWrapper;
