import DashHeader from '../components/DashHeader';
import DashGlobalNav from '../components/DashGlobalNav';
import DashStats from '../components/DashStats';
import DashPastEvents from '../components/DashPastEvents';
import axios from 'axios'
import { useState, useEffect }  from 'react'
import '../index.css'

const Dashboard = () => {
    const [ userList, setUserList ] = useState([]);
    const [ eventList, setEventList ] = useState([])

    useEffect(()=>{
        getEvents()
    }, [])


    const getEvents = () => {
        try {
            axios.get('http://localhost:3001/events')
            .then((response)=>{setEventList([...response.data.events]); console.log(response.data.users)})
        } catch (error) {
            
        }
    }

    return (
        <div className="dashboard">
            {/* <DashHeader /> */}
            {/* <DashGlobalNav /> */}
            <DashStats userList={userList} setUserList={setUserList}/>
            <DashPastEvents eventList={eventList} setEventList={setEventList}/>
        </div>
    )
}

export default Dashboard;