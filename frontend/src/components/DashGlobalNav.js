import { Link } from 'react-router-dom';
import location from '../images/location.png';
import report from '../images/report.png';
import users from '../images/users.png';
import account from '../images/account.png';
import events from '../images/events.png';
import img from '../images/Vector.png';

const DashGlobalNav = () => {
  return (
    <div className="dashGlobalNav">
      <div>
        <img src={img} className="navHeader" />
      </div>
      <div className="dashRow">
        <div className="dashIcon">
          <img src={location} alt="map pin drop icon" />
        </div>
        <div className="dashLink">
          <Link to="/">Manage Locations</Link>
        </div>
      </div>
      <div className="dashRow">
        <div className="dashIcon">
          <img src={users} alt="people gathered icon" />
        </div>
        <div className="dashLink">
          <Link to="/">Manage Users</Link>
        </div>
      </div>
      <div className="dashRow">
        <div className="dashIcon">
          <img src={events} alt="calendar icon" />
        </div>
        <div className="dashLink">
          <Link to="/">Manage Events</Link>
        </div>
      </div>
      <div className="dashRow">
        <div className="dashIcon">
          <img src={report} alt="document icon" />
        </div>
        <div className="dashLink">
          <Link to="/">Create Report</Link>
        </div>
      </div>
      <div className="dashRow">
        <div className="dashIcon">
          <img src={account} alt="circular portrait icon" />
        </div>
        <div className="dashLink">
          <Link to="/">My Account</Link>
        </div>
      </div>
    </div>
  );
};

export default DashGlobalNav;
