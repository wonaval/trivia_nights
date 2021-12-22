import { useContext } from 'react';
import { Context } from '../context/Context';

const EventUpdates = () => {

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
                    <div>Name: {name}</div>
                    <div>Email: {email} </div>
                    
                    <button className="buttons">Browse Events</button>
                </div>
        </div>
    )
}

export default EventUpdates;