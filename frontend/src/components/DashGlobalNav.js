import { Link } from 'react-router-dom';
const DashGlobalNav = () => {

    
    return (
        <div className='dashGlobalNav'>
            <section>
                <img alt="map pin drop icon" />
                <Link to='/'>Manage Locations</Link>
            </section>
            <section>
                <img alt="people gathered icon" />
                <Link to='/'>Manage Users</Link>
            </section>
            <section>
                <img alt="calendar icon" />
                <Link to='/'>Manage Events</Link>
            </section>
            <section>
                <img alt="document icon" />
                <Link to='/'>Create Report</Link>
            </section>
            <section>
                <img alt="circular portrait icon" />
                <Link to='/'>My Account</Link>
            </section>
        </div>
    )
}

export default DashGlobalNav;