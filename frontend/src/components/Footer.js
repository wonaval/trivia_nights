import { Link } from 'react-router-dom';
import img from '../images/Vector.png';

const Footer = () => {
  return (
    <div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="footer">
        <p>
          © Team Rocket Trivia 2021.
          <br />
          Made in Hawaii, Washington, California, Illinois, and Massachusetts.
        </p>
        <img src={img} />
      </div>
    </div>
  );
};

export default Footer;
