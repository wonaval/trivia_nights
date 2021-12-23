import { Link } from "react-router-dom"
import img from'../images/unsplash_topics.png';
import { useContext } from 'react';
import { Context } from "../context/Context";

const Topics = () => {

    const { firstNameState } = useContext(Context);
    const [ firstName, setFirstName ] = firstNameState;

    return (
        <div className="topic">
            <img src={img} className="topicImg"/>
            <div className="topicRight">
                <h2>Welcome to Team Rocket Trivia, {firstName}!</h2>
                <p>Which of these topics are you interested in?</p>
                <div className="topicButtons">
                   
                    <button >Music</button>
                    <button >Film</button>
                    <button >Sports</button>
                    <button >General Knowledge</button>
                    <button >Pop Culture</button>
                    <button >History</button>
                    <button >Science</button>
                    <button >Current Events</button>
                </div>
                <div className="topicNextPage">
                    <Link to='/account' className="skip">Skip</Link>
                    <Link to='/account'>
                        <button className="buttons">Next</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Topics;