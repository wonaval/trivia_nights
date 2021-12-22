import { HashLink } from 'react-router-hash-link';
import img from'../images/Vector.png';

const Navbar = () => {
    return (
        <div className='navigationBar'>
            <img src={img}/>
            <HashLink  to="./#aboutSection" className='link'>About Us</HashLink>
            <HashLink to="./#findSection" className='link' >Find a Trivia</HashLink>
            <HashLink to='./#eventSection' className='link' >Events</HashLink>
            <HashLink to='/' className='login' >Login</HashLink>
        </div>
    )
}

export default Navbar