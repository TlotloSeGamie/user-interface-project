import emily from '../Images/Client testimonials/image-emily.jpg';
import thomas from '../Images/Client testimonials/image-thomas.jpg';
import jennie from '../Images/Client testimonials/image-jennie.jpg';

function Testimonials() {
    return (
        <div className="client">
            <div className="testi">
                <h1><b>CLIENT TESTIMONIALS</b></h1>
            </div>

            <div className="statements">
                <div className="emily">
                    <img src={emily} className='emi' alt="Emily R." />
                    <div className='emi-text'>
                        <p>We put our trust in Sunnyside, and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    </div>
                    <div className='Emi-R'>
                        <b>Emily R.</b>
                        <p><small>Marketing Director</small></p>
                    </div>
                </div>

                <div className="thomas">
                    <img src={thomas} className='tom' alt="Thomas S." />
                    <div className='tom-text'>
                        <p>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
                    </div>
                    <div className='Tom-S'>
                        <b>Thomas S.</b>
                        <p><small>Chief Operating Officer</small></p>
                    </div>
                </div>

                <div className="jennie">
                    <img src={jennie} className='jen' alt="Jennie F." />
                    <div className='jen-text'>
                        <p>Incredible end results! Our sales increased over 400% when we worked with Sunnyside. Highly recommended.</p>
                    </div>
                    <div className='Jen-F'>
                        <b>Jennie F.</b>
                        <p><small>Business Owner</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
