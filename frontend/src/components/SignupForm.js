import { useState, useContext } from 'react';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';

const SignupForm = () => {

    const { firstNameState, emailState } = useContext(Context);
    const [ email, setEmail ] = emailState;
    const [ firstName, setFirstName ] = firstNameState;

    return (
        <div>
            <form className="signupForm">
                <div className='signUpLine'>
                <p className='signUpLineName'>Name</p>
                <input className="nameSignup"
                    type='text' 
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}/>
 
                </div>
                <div className='signUpLine'>
                <p className='signUpLineEmail'>Email</p>

                <input className="emailSignup"
                    type='text'
                    placeholder="Email"

                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <Link to="/topics">
                    <input className="buttons" type="submit" value='Sign Up'/>
                </Link>
            </form>

        </div>
    )
}

export default SignupForm