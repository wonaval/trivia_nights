import { Link } from "react-router-dom"
import img from'../images/unsplash_topics.png';
const Topics = () => {
    return (
        <div className="topic">
            <img src={img} className="topicImg"/>
            <div className="topicRight">
                <h2>Welcome to Team Rocket Trivia, Ivan!</h2>
                <p>Which of these topics are you interested in?</p>
                <div className="topicButtons">
                    <button>Music</button>
                    <button>Film</button>
                    <button>Sports</button>
                    <button>General Knowledge</button>
                    <button className="Pop">Pop Culture</button>
                    <button>History</button>
                    <button>Science</button>
                    <button>Current Events</button>
                </div>
                <div className="topicNextPage">
                    <Link to='/' className="skip">Skip</Link>
                    <button className="buttons">Next</button>
                </div>
            </div>

        </div>
    )
}

export default Topics