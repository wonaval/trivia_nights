import Navbar from "./Navbar"
import SignupForm from "./SignupForm"

const Header = () => {
    return (
        <div>
        <Navbar />
        <h1>Compete with your friends</h1>
        <h3>Get updates about trivia near you</h3>
        <SignupForm />
        </div>
        )
}

export default Header