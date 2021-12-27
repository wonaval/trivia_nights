import { useEffect, useState } from 'react';
import env from 'react-dotenv';
import axios from 'axios';

import piechart from '../images/pie-chart.png';

const DashStats = (props) => {
  const chartData = [
    { title: 'Two', value: 20, color: '#F3E45E' },
    { title: 'One', value: 25, color: '#2D758F' },
    { title: 'Three', value: 15, color: '#D33666' },
  ];

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`${env.REACT_APP_BACKEND_URL}/users`)
      .then((response) => {
        setUserList(response.data.users);
      })
      .catch((err) => {
        console.log('Error fetching');
      });
  };

  return (
    <div className="dashStats">
      <div className="newUsers">
        <div className="newUsersHeader">
          <span className="userHeaderMargin">New Users</span>
        </div>
        <div className="newUsersContainer">
          {userList &&
            userList.map((user, i) => {
              return (
                <div key={i} className="userContainer">
                  <span className="userName">{`${user.first} ${user.last}`}</span>
                  <span className="userEmail">{user.email}</span>
                  <span className="userDate">{user.signup.slice(0, 10)}</span>
                </div>
              );
            })}
        </div>
      </div>
      <div className="userInterests">
        <div className="intHeaders">
          <span className="intHeaderText">User Interests</span>
        </div>
        <div className="intMain">
          <div className="intLeft">
            <div className="usersText">{userList.length} Users</div>
            <div className="bars">
              <div>Topics</div>
              <div className="fullBar">
                <div className="bar1"></div>
              </div>
              <div className="fullBar">
                <div className="bar2"></div>
              </div>
              <div className="fullBar">
                <div className="bar3"></div>
              </div>
            </div>
          </div>
          <div className="intRight">
            <div className="pieChart">
              <img src={piechart} />
            </div>
            <div className="legend">
              <div className="sports"></div>
              <div className="legend-text">Sports</div>
            </div>
            <div className="legend">
              <div className="music"></div>
              <div className="legend-text">Music</div>
            </div>
            <div className="legend">
              <div className="film"></div>
              <div className="legend-text">Film</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashStats;
