import berry from '../Images/Graphic/image-graphic-design.jpg';
import naartjie from '../Images/Graphic/image-photography.jpg';

function Graphic() {
    return (
        <div className="design">
            <div className="red" style={{ backgroundImage: `url(${berry})` }}>
                <div className='red-text'>
                    <h2><b>Graphic Design</b></h2>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
                </div>
            </div>

            <div className='orange' style={{ backgroundImage: `url(${naartjie})` }}>
                <div className='orange-text'>
                    <h2><b>Photography</b></h2>
                    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>
        </div>
    );
}

export default Graphic;
