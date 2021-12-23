import Header from "../components/Header"
import About from "../components/About"
import Find from "../components/Find"
import Events from "../components/Events"
import Footer from "../components/Footer"

const Landing = () => {
    return (
        <div className="userHome">
        

            <Header />
            <About />
            <Find />
            <Events />
            <Footer />
        </div>
    )
}

export default Landing;