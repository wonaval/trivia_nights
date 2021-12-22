const DashStats = () => {
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
                <section></section> // write out function here to post when users signup
            </div>
            <div className="userInterests">
                <p>436 Users</p>
                <section></section> // data visualization here
                <section></section> // data visualization here
            </div>
            
        </div>
    )
}

export default DashStats;