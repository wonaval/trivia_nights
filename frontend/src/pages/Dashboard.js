import { useState, useEffect } from 'react';
import env from 'react-dotenv';
import axios from 'axios';

import '../index.css';
import DashHeader from '../components/DashHeader';
import DashGlobalNav from '../components/DashGlobalNav';
import DashStats from '../components/DashStats';
import DashPastEvents from '../components/DashPastEvents';

const Dashboard = () => {
  const [userList, setUserList] = useState([]);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    axios
      .get(`${env.REACT_APP_BACKEND_URL}/events`)
      .then((response) => {
        setEventList(response.data.events);
      })
      .catch((error) => {
        console.log('Error fetching');
      });
  };

  return (
    <div className="dashboard">
      <DashHeader />
      <DashGlobalNav />
      <DashStats userList={userList} setUserList={setUserList} />
      <DashPastEvents eventList={eventList} setEventList={setEventList} />
    </div>
  );
};

export default Dashboard;
