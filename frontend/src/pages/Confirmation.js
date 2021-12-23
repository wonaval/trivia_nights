import { useContext } from 'react';
import { Context } from '../context/Context';
import img from'../images/unsplash_topics.png';


const Confirmation = () => {

    const { firstNameState, emailState, lastNameState, passwordState } = useContext(Context);
    const [ firstName ] = firstNameState;
    const [ email ] = emailState;
    const [ lastName ] = lastNameState;
    const [ password ] = passwordState;

    return (
        <div className='confirmation'>
            <img src={img} className="confImage"alt="" />
            <div className='confirmationRight'>
            <h2>You’ve successfully created your account!</h2>
                <div className="confInfo">
                    <div>Name: {firstName} {lastName}</div>
                    <div>Email: {email} </div>
                    <div>Password: {password}</div>
                    <button className="buttons">Browse Events</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;