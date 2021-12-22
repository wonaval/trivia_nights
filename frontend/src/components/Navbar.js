import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navigationBar'>
            <Link to='/'>About Us</Link>
            <Link to='/'>Find a Trivia</Link>
            <Link to='/'>Events</Link>
            <Link to='/'>Login</Link>
        </div>
    )
}

export default Navbar