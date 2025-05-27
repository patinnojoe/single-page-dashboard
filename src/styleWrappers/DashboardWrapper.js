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
    overflow-x: hidden;
  }

  /* mobile media query */
  @media (max-width: 768px) {
    .dashboard-main {
      margin: 1rem;
    }
  }
`;

export default DashboardWrapper;
