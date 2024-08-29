import fb from '../Images/Footer/icon-facebook.svg';
import insta from '../Images/Footer/icon-instagram.svg';
import tweet from '../Images/Footer/icon-twitter.svg';
import pin from '../Images/Footer/icon-pinterest.svg';

function Footer() {
    return (
        <div className='footer'>
            <div className='sunny'>
                <h1><b><big>sunnyside</big></b></h1>
            </div>
            <div className='ASP'>
                <h4><b>About</b></h4>
                <h4><b>Services</b></h4>
                <h4><b>Projects</b></h4>
            </div>
            <div className='socials'>
                <img src={fb} alt="Facebook Icon" />
                <img src={insta} alt="Instagram Icon" />
                <img src={tweet} alt="Twitter Icon" />
                <img src={pin} alt="Pinterest Icon" />
            </div>
        </div>
    );
}

export default Footer;
