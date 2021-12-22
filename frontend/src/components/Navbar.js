import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className='navigationBar'>
            <HashLink to="./#aboutSection">About Us</HashLink>
            <HashLink to="./#findSection">Find a Trivia</HashLink>
            <HashLink to='./#eventSection'>Events</HashLink>
            <HashLink to='/'>Login</HashLink>
        </div>
    )
}

export default Navbar