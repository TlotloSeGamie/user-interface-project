import berry from '../Images/Graphic/image-graphic-design.jpg'
import naartjie from '../Images/Graphic/image-photography.jpg'

function Graphic() {
    return(
        <div className="design">
            <div className="red">
                <div className='red-text'> 
                    <h2><b>Graphic Design</b></h2>
                    <br></br>
                    <h6>Great design makes you memorable. We deliver artwork that underscores
                        your brand message and captures potential client's attention.</h6>
                </div>
             </div>

            <div className='orange'>
                <div className='orange-text'>
                    <h2><b>Photography</b></h2>
                    <h6><small>Increase your creditibily b getting the most stunning, high-quality 
                        phots tha improve your business image.</small></h6>
                </div>
            </div>
        </div>
    )
    
}

export default Graphic;