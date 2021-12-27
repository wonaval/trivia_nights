import { Link } from 'react-router-dom';

const DashHeader = () => {
  return (
    <div className="dashHeader">
      <div>
        <input type="text" className="dash-search" />
      </div>
      <div className="dash-header__text">Users</div>
      <div className="dash-main">
        <div className="dash-left">
          <div>
            <div className="dash-left-header">Sign-ups</div>
            <div>671</div>
            <div>Users</div>
          </div>
          <div>
            <div>71</div>
            <div>Unsubscribed</div>
          </div>
        </div>
        <div className="dash-right">
          <div className="dash-right-header">Sign-ups: Last 180 days</div>
          <div>Line graph</div>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
