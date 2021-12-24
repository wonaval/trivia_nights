import { Link } from 'react-router-dom';
import location from '../images/location.png'
import report from '../images/report.png'
import users from '../images/users.png'
import account from '../images/account.png'
import events from '../images/events.png'
const DashGlobalNav = () => {

    
    return (
        <div className='dashGlobalNav'>
            <section>
                <img src={location} alt="map pin drop icon" />
                <Link to='/'>Manage Locations</Link>
            </section>
            <section>
                <img src={users} alt="people gathered icon" />
                <Link to='/'>Manage Users</Link>
            </section>
            <section>
                <img src={events} alt="calendar icon" />
                <Link to='/'>Manage Events</Link>
            </section>
            <section>
                <img src={report} alt="document icon" />
                <Link to='/'>Create Report</Link>
            </section>
            <section>
                <img src={account} alt="circular portrait icon" />
                <Link to='/'>My Account</Link>
            </section>
        </div>
    )
}

export default DashGlobalNav;