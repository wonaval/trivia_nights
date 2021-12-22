import img from'../images/unsplash.png';
const Events = () => {
    return (
        <div>

            <div className="homePageSection">
                <img src={img} className="image"/>
                <div className="homepageComp" id="eventSection">
                    <h3>Events</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis a sed amet et. Iaculis in ut fermentum est. Faucibus quis lectus praesent convallis eu blandit vitae. Ornare turpis habitant mauris, mauris porttitor morbi et.
                    Eu eu etiam vestibulum felis pharetra.
                    </p>
                    <button className="buttonTeal">Browse Events</button>
                </div>
                <img className="image" alt="" />

            </div>
        </div>
    )
}

export default Events