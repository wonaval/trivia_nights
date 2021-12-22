import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {

    const [ firstName, setFirstName ] = useState("");
    const [ email, setEmail ] = useState("");

    return (
        <div>
             
            <form className="signupForm">
                <input className="nameSignup"
                    type='text' 
                    placeholder="First name"
                    // value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>
                <input className="emailSignup"
                    type='text'
                    placeholder="Email"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <Link to="/topics">
                    <input className="buttons" type="submit" value='Sign Up'/>
                </Link>
            </form>

        </div>
    )
}

export default SignupForm