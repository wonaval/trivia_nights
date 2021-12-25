import { Link } from 'react-router-dom';

const DashHeader = () => {
  return (
    <div className="dashHeader">
      <div>
        <input type="text" />
      </div>
      <div>Users header</div>
      <div>
        <div>
          <div>Sign-ups header</div>
          <div>
            <div>671</div>
            <div>Users</div>
          </div>
          <div>
            <div>71</div>
            <div>Unsubscribed</div>
          </div>
        </div>
        <div>
          <div>Sign-ups: Last 180 days (header)</div>
          <div>Line graph</div>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
