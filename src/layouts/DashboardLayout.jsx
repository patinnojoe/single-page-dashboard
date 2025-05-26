import { Outlet } from 'react-router-dom';
import { DashboardWrapper } from '../styleWrappers';
import { Sidebar } from '../components';

const DashboardLayout = () => {
  return (
    <DashboardWrapper>
      <div className="dashboard-layout">
        <Sidebar />
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </DashboardWrapper>
  );
};

export default DashboardLayout;
