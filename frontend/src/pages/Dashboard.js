import DashHeader from '../components/DashHeader';
import DashGlobalNav from '../components/DashGlobalNav';
import DashStats from '../components/DashStats';
import DashPastEvents from '../components/DashPastEvents';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashHeader />
            <DashGlobalNav />
            <DashStats />
            <DashPastEvents />
            
        </div>
    )
}

export default Dashboard;