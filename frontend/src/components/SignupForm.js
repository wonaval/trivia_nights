import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../context/Context";

const SignupForm = () => {

    const { nameState, emailState } = useContext(Context);
    const [ name, setName ] = nameState;
    const [ email, setEmail ] = emailState;

    return (
        <div>
             
            <form className="signupForm">
                <input 
                    type='text' 
                    placeholder="First name"
                    // value={firstName}
                    onChange={(e) => setName(e.target.value)}/>
                <input 
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