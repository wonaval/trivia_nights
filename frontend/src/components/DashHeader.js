import { Link } from 'react-router-dom';

const DashHeader = () => {
    return (
        <div className="dashHeader" >
            <section>
                <p>TEAM ROCKET</p>
                <p>TRIVIA</p>
            </section>
            <Link to='/'>Lorem Ipsum</Link>
            <Link to='/'>Lorem Ipsum</Link>
            <Link to='/'>Log Out</Link>
        </div>
    )
}

export default DashHeader;