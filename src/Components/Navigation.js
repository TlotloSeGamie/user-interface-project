import logo from '../Images/Navigation/logo.svg';

function Navigation() {
    return (
        <div className='nav'>
            <img src={logo} alt="Sunnyside Logo" />
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#" className='contact'><b>CONTACT</b></a></li>
            </ul>
        </div>
    );
}

export default Navigation;
