import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {

    const [ firstName, setFirstName ] = useState("");
    const [ email, setEmail ] = useState("");

    return (
        <div>
             
                 
                
           
            <form className="signupForm">
                <div className='signUpLine'>
                <p className='signUpLineName'>Name</p>
                <input className="nameSignup"
                    type='text' 
                    placeholder="First name"
                    // value={firstName}
                    onChange={(e) => setName(e.target.value)}/>
 
                </div>
                <div className='signUpLine'>
                <p className='signUpLineEmail'>Email</p>   

                <input className="emailSignup"
                    type='text'
                    placeholder="Email"
                    // value={email}
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