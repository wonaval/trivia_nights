import line from '../images/line-graph.png';

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
