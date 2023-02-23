import { Outlet } from 'react-router-dom';

const CompanyHub = () => {
    return (
        <div>
            <h1>Company HUb Page</h1>
            <Outlet />
        </div>
    );
};

export default CompanyHub;