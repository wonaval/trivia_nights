import line from '../images/line-graph.png';

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
          <div>
            <img src={line} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
