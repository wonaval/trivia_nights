import img from'../images/Vector.png';

const Footer = () => {
    return (
        <div className="footer">
            <p>
            © Team Rocket Trivia 2021.<br/>
            Made in Hawaii, Washington, California, Illinois, and Massachusetts.
            </p>
            <img src={img}/>
        </div>
    )
}

export default Footer