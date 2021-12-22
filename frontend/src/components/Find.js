import img from'../images/FindTrivia.png';

const Find = () => {
    return (
        <div>
            <div className="homePageSection">
                <div className="homepageComp" id="findSection">
                    <h3>Find a Trivia</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis a sed amet et. Iaculis in ut fermentum est. Faucibus quis lectus praesent convallis eu blandit vitae. Ornare turpis habitant mauris, mauris porttitor morbi et.
                    Eu eu etiam vestibulum felis pharetra.
                    </p>
                    <button className="buttonTeal">Find a Trivia</button>
                </div>
                <img src={img} className="image" alt=""/>
            </div>
        </div>
    )
}

export default Find