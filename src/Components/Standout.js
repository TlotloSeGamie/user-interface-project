import cup from '../Images/Standout/image-stand-out.jpg';

function Standout() {
    return (
        <div className="standout">
            <div className="cup">
                <img src={cup} className='cup' alt="Stand out to the right audience" />
            </div>
            <div className="stand-text">
                <h1><b>Stand out to the right audience</b></h1>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                <h4><b>LEARN MORE</b></h4>
            </div>
        </div>
    );
}

export default Standout;
