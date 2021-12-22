import Navbar from "./Navbar"
import SignupForm from "./SignupForm"

const Header = () => {
    return (
        <div className="header" >
        <Navbar />
        <h1 className="Title">Compete with your friends</h1>
        <h3>Get updates about trivia near you</h3>
        <SignupForm />
        </div>
        )
}

export default Header