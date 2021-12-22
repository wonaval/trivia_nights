import axios from 'axios';

const DashStats = (props) => {
    return (
        <div className="dashStats" >
            <section></section> {/*black bar under DashHeader/above the data viz*/}
            <div className="signUpNumbers">
                <h3>Sign-ups</h3>
                <p>{props.userList.length}</p>
                <p>Users</p>
                <p>71</p>
                <p>Unsubscribed</p>
            </div>
            <div className="signUpViz">
                <p>Sign-ups: Last 180 days</p>
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
                        return (
                            <div key={i} className='userContainer'>
                                <span className='userName'>{user.name}</span>
                                <span className='userEmail'>{user.email}</span>
                                <span className='userDate'>{user.signup_date.slice(0, 10)}</span>
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