import img from'../images/unsplash_8x.png';

const About = () => {
    return (
        <div>
            <div className='homePageSection'>
            <img src={img} className="image"/>
            <div className="homepageComp" id="aboutSection">
                    <h3>About Team Rocket Trivia</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis a sed amet et. Iaculis in ut fermentum est. Faucibus quis lectus praesent convallis eu blandit vitae. Ornare turpis habitant mauris, mauris porttitor morbi et.
                    Eu eu etiam vestibulum felis pharetra.

                    Fermentum fermentum id elementum quam. Risus at ac velit eget tempor. Netus nunc pulvinar a iaculis. Purus, diam blandit ut velit imperdiet mi dui.</p>
            </div>   
            </div>
        </div>
    )
}

export default About