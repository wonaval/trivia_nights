import DashHeader from '../components/DashHeader';
import DashGlobalNav from '../components/DashGlobalNav';
import DashStats from '../components/DashStats';
import DashPastEvents from '../components/DashPastEvents';
import axios from 'axios'
import { useState, useEffect }  from 'react'

const Dashboard = () => {
    const [ userList, setUserList ] = useState([]);

    useEffect(()=>{
        getUsers()
    }, [])


    const getUsers = () => {
        try {
            axios.get('http://localhost:3001/user')
            .then((response)=>{setUserList(response.data.users);})
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="dashboard">
            {/* <DashHeader /> */}
            {/* <DashGlobalNav /> */}
            <DashStats userList={userList} setUserList={setUserList}/>
            {/* <DashPastEvents /> */}
        </div>
    )
}

export default Dashboard;