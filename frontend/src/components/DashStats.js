import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const DashStats = (props) => {

    const [ signUps, setSignUps ] = useState('')
    const [ newUsers, setNewUsers ] = useState([])
    const [ usersWithInterests, setUsersWithInterests ] = useState([])

    // retrieve number of total users signed up
    const showSignUps = async () => {  
        try {
            let response = await axios.get(`http://localhost:3001/users`);
            setSignUps(response.data.users.length);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    // populate new users list
    const postNewUsers = async () => {
        try {
            let response = await axios.get(`http://localhost:3001/users`);
            // setNewUsers(response.data.users);
        } catch (error) {
            console.log(error);
        }
    }
    
    // ascertain number of users who have indicated interests on their profile
    const userInterests = async () => {
        try {
            let response = await axios.get(`http://localhost:3001/users`);
            for (let user of response.data.users) {
                if (user.interst) {
                    usersWithInterests.push(user);
                }
            }
            console.log(usersWithInterests);
        } catch (error) {
            console.log(error);
        }
    }

    // execute showSignUps, postNewUsers, userInterests on load
    useEffect(() => {
        showSignUps();
        postNewUsers();
        userInterests();
    }, [])

    return (
        <div className="dashStats" >
            <section></section> {/*black bar under DashHeader/above the data viz*/}
            <div className="signUpNumbers">
                <h3>Sign-ups</h3>
                <p>{signUps.length}</p>
                <p>Users</p>
                <p>71</p>
                <p>Unsubscribed</p>
            </div>
            <div className="signUpViz">
                <p>Sign-ups: Last 180 days</p>
                <section></section> {/*data visualization here*/}
            </div>
            <div className="newUsers">
                <p>New Users</p>
                <div>
                    <div>
                    <span>Name</span>
                    <span>Email Address</span>
                    <span>Signup Date</span>
                    </div>
                    {props.userList && props.userList.map((user, i)=>{
                        console.log('User', user)
                        return (
                            <div key={i}>
                                <span>{user.name}</span>
                                <span>{user.email}</span>
                                <span>{user.signup_date.slice(0, 10)}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="userInterests">
                <div><h3>User Interests</h3></div>
                <p>{props.userList.length} Users</p>
                <div>Music: </div>
                <div>Film: </div>
                <div>Sports: </div>
                <div>General Knowledge: </div>
                <div>Pop Culture: </div>
                <div>History: </div>
                <div>Science: </div>
                <div>Current Events: </div>

            </div>
        </div>
    )
}

export default DashStats;