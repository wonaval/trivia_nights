import { Link } from "react-router-dom"
const Topics = () => {
    return (
        <div className="topic">
            <div className="topicImg">Left Image</div>
            <div className="topicRight">
                <h2>Welcome to Team Rocket Trivia, Ivan!</h2>
                <p>Which of these topics are you interested in?</p>
                <div className="topicButtons">
                    <button>Music</button>
                    <button>Film</button>
                    <button>Sports</button>
                    <button>General Knowledge</button>
                    <button>Pop Culture</button>
                    <button>History</button>
                    <button>Science</button>
                    <button>Current Events</button>
                </div>
                <div className="topicNextPage">
                    <Link to='/'>Skip</Link>
                    <button className="buttons">Next</button>
                </div>
            </div>

        </div>
    )
}

export default Topics