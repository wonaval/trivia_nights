import { Link } from 'react-router-dom';
const DashGlobalNav = () => {

    
    return (
        <div className='dashGlobalNav'>
            <section>
                <img />
                <Link to='/'>Manage Locations</Link>
            </section>
            <section>
                <img />
                <Link to='/'>Manage Users</Link>
            </section>
            <section>
                <img />
                <Link to='/'>Manage Events</Link>
            </section>
            <section>
                <img />
                <Link to='/'>Create Report</Link>
            </section>
            <section>
                <img />
                <Link to='/'>My Account</Link>
            </section>
        </div>
    )
}

export default DashGlobalNav;