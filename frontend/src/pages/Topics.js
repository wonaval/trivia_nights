import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../context/Context';

import img from '../images/unsplash_topics.png';

const Topics = () => {
  const { firstNameState } = useContext(Context);
  const [firstName, setFirstName] = firstNameState;
  const [music, setMusic] = useState(false);
  const [film, setFilm] = useState(false);
  const [sports, setSports] = useState(false);
  const [general, setGeneral] = useState(false);
  const [pop, setPop] = useState(false);
  const [history, setHistory] = useState(false);
  const [science, setScience] = useState(false);
  const [current, setCurrent] = useState(false);

  const handleToggle = () => {
    setMusic(!music);
  };

  return (
    <div className="topic">
      <img src={img} className="topicImg" />
      <div className="topicRight">
        <h2>Welcome to Team Rocket Trivia, {firstName}!</h2>
        <p>Which of these topics are you interested in?</p>
        <div className="topicButtons">
          <input name="musicButton" type="checkbox" value="Music" />
          <label htmlFor="musicButton">Music</label>
          <button>Film</button>
          <button>Sports</button>
          <button>General Knowledge</button>
          <button>Pop Culture</button>
          <button>History</button>
          <button>Science</button>
          <button>Current Events</button>
        </div>
        <div className="topicNextPage">
          <Link to="/account" className="skip">
            Skip
          </Link>
          <Link to="/account">
            <button className="buttons">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topics;
