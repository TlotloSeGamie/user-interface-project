import icon from '../Images/icon-arrow-down.svg';

function Hero() {
    return (
        <div className="hero-img">
            <h2>WE ARE CREATIVE</h2>
            <img src={icon} className='arrow' alt="Down Arrow Icon" />
        </div>
    );
}

export default Hero;
