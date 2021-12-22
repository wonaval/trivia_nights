import { useContext } from 'react';
import { Context } from '../context/Context';

const Confirmation = () => {

    const { nameState, emailState, lastNameState, passwordState } = useContext(Context);
    const [ name ] = nameState;
    const [ email ] = emailState;
    const [ lastName ] = lastNameState;
    const [ password ] = passwordState;

    return (
        <div>
            <img className="confImage" alt="" />
            <h2>You’ve successfully created your account!</h2>
                <div className="confInfo">
                    <div>Name: {name} {lastName}</div>
                    <div>Email: {email} </div>
                    <div>Password: {password}</div>
                    <button className="buttons">Browse Events</button>
                </div>
        </div>
    )
}

export default Confirmation