const DashStats = (props) => {
    return (
        <div className="dashStats" >
            <section></section> // black bar under DashHeader/above the data viz
            <div className="signUpNumbers">
                <p>671</p>
                <p>Users</p>
                <p>71</p>
                <p>Unsubscribed</p>
            </div>
            <div className="signUpViz">
                <p>Sign-ups: Last 180 days</p>
                <section></section> // data visualization here
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