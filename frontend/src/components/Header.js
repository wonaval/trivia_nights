import Navbar from "./Navbar"
import SignupForm from "./SignupForm"

const Header = () => {
    return (
        <div className="header" >
        <Navbar />
        <div className="titleSignup">
        <h1 className="Title">Compete with your friends</h1>
        <p>Get updates about trivia near you</p>
        <SignupForm />
        </div>
        </div>
        )
}

export default Header