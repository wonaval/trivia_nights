import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navigationBar'>
            <Link className="link" to='/'><li>About Us</li></Link>
            <Link className="link" to='/'><li>Find a Trivia</li></Link>
            <Link className="link" to='/'><li>Events</li></Link>
            <Link className='login' to='/'>Login</Link>
        </div>
    )
}

export default Navbar