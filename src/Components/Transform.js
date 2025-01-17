import egg from '../Images/Transform/image-transform.jpg';

function Transform() {
    return (
        <div className='transform'>
            <div className='text'>
                <h1><b>Transform your brand</b></h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <h4><b>LEARN MORE</b></h4>
            </div>
            <div className='egg'>
                <img src={egg} className='EGG' alt="Transform your brand" />
            </div>
        </div>
    );
}

export default Transform;
