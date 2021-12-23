import axios from 'axios';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context';
// import Confirmation from './Confirmation';

const Account = () => {

    
    const { nameState, emailState, lastNameState, passwordState } = useContext(Context);
    const [ name, setName ] = nameState;
    const [ email, setEmail ] = emailState;
    const [ lastName, setLastName ] = lastNameState;
    const [ password, setPassword ] = passwordState;

    let navigate = useNavigate();
    
    const createUser = async (e) => {
        e.preventDefault();
        try {
            const signup_date = new Date();
            let response = await axios.post(`http://localhost:3001/users`, { name, email, password, signup_date })
            navigate('./Confirmation')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='account'>
            <img className='accountImg' alt="" />
            <div className='accountRight'>
                <h2>Welcome to Team Rocket Trivia, {name}!</h2>
                <p>Would you like to create an account?</p>
                <form 
                    className='accountForm'>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type='text' value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/> 
                </form>
                <Link to="/fakeEvents">Skip</Link>
                <button
                        className='buttons'
                        onClick={createUser} >Create Account
                </button>
            </div>
        </div>
    )
}

export default Account;