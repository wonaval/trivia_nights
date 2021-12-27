import linegraph from '../images/line-graph.png';
import search from '../images/search.png';

const DashHeader = () => {
  const randomUsers = Math.floor(Math.random() * 1000);
  const randomUnsub = Math.floor(Math.random() * randomUsers);

  return (
    <div className="dashHeader">
      <div className="search-icon">
        <input type="text" className="dash-search" />
        <img src={search} />
      </div>
      <div className="dash-header__text">Users</div>
      <div className="dash-main">
        <div className="dash-left">
          <div className="dash-left-header">Sign-ups</div>
          <div className="dash-left--main">
            <div className="dash-user-number">{randomUsers}</div>
            <div className="dash-user-unsub">Users</div>
            <div className="dash-unsub-number">{randomUnsub}</div>
            <div className="dash-user-unsub">Unsubscribed</div>
          </div>
        </div>
        <div className="dash-right">
          <div className="dash-right-header">Sign-ups: Last 180 days</div>
          <div>
            <img className="linegraph" src={linegraph} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
