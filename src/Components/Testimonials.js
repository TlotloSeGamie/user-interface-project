import emily from '../Images/Client testimonials/image-emily.jpg';
import thomas from '../Images/Client testimonials/image-thomas.jpg';
import jennie from '../Images/Client testimonials/image-jennie.jpg'; 
function Testimonials() {
    return(
        <div className="client">
            <div className="testi">
                <h1><b>CLIENT TESTIMONIALS</b></h1>
            </div>

            <div className="statements">
                <div className="emily">
                    <img src={emily} className='emi'/>
                    <div className='emi-text'>
                        <b>We put our trust in Sunnyside and they delivered, 
                            making sure our needs were met and dealines were always 
                            a hit.<br></br>
                            <br></br>
                            </b>
                    </div>
                    <div className='Emi-R'>
                        <b>Emily R.</b>
                        <h7 className='mark'><small>Marketing Director</small></h7>
                    </div>
                </div>
                <div className="thomas">
                    <img src={thomas} className='tom'/>
                    <div className='tom-text'>
                        <b>Sunnyside's enthuasiasm coupled with their keen interest 
                            in our brand's success made it a satisfying and enjoyable experience</b>
                            <br></br><br></br>
                    </div>
                    <div className='Tom-S'>
                        <b>Thomas S.</b>
                        <h7><small>Cheif Operating Officer</small></h7>
                    </div>
                </div>
                <div className="jennie">
                    <img src={jennie} className='jen'/>
                    <div className='jen-text'>
                        <b>Incredible end results! Our sales increased over 400%
                        when we worked with Sunnyside.
                        Highly recommended.</b>
                        <br></br><br></br>
                    </div>
                    <div className='Jen-F'>
                        <b>Jennie F.</b>
                        <h7><small>Business Owner</small></h7>
                    </div>
                </div>

            </div>
        </div>
    )
    
}

export default Testimonials;