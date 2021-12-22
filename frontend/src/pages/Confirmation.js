const Confirmation = () => {
    return (
        <div>
            <img className="confImage"/>
            <h2>You’ve successfully created your account!</h2>
                <div className="confInfo">
                    <div>Name: </div>
                    <div>Email: </div>
                    <div>Password: </div>
                    <button className="buttons">Browse Events</button>
                </div>
        </div>
    )
}

export default Confirmation