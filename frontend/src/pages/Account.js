import axios from 'axios';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context';
import Confirmation from './Confirmation';
import img from'../images/unsplash_topics.png';


const Account = () => {

    
    const { firstNameState, emailState, lastNameState, passwordState } = useContext(Context);
    const [ firstName, setFirstName ] = firstNameState;
    const [ email, setEmail ] = emailState;
    const [ lastName, setLastName ] = lastNameState;
    const [ password, setPassword ] = passwordState;

    let navigate = useNavigate();
    
    const createUser = async (e) => {
        e.preventDefault();
        try {
            const signup_date = new Date();
            const name = `${firstName} ${lastName}`
            let response = await axios.post(`http://localhost:3001/users`, { name, email, password, signup_date })
            console.log(name);
            navigate('./Confirmation')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='account'>
            <img src={img} className='accountImg' alt="" />
            <div className='accountRight'>
                <h2>Welcome to Team Rocket Trivia, {firstName}!</h2>
                <p>Would you like to create an account?</p>
                <form 
                    className='accountForm'>
                    <p>First Name</p>
                    <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <p>Last Name</p>
                    <input type='text' value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                    <p>Email</p>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <p>Password</p>
                    <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/> 
                </form>
                <Link to="/fakeEvents" className='skip'>Skip</Link>
                <button
                        className='buttons'
                        onClick={createUser} >Create Account
                </button>
            </div>
        </div>
    )
}

export default Account;