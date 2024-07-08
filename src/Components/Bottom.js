import milk from '../Images/Bottom images/image-gallery-milkbottles.jpg';
import plate from '../Images/Bottom images/image-gallery-orange.jpg';
import cone from  '../Images/Bottom images/image-gallery-cone.jpg';
import sugar from '../Images/Bottom images/image-gallery-sugarcubes.jpg';
function Bottom() {
    return(
        <div className='Pics'>
            <img src={milk} className='milk'/>
            <img src={plate} className='plate' />
            <img src={cone} className='cone'/>
            <img src={sugar} className='sugar'/>
        </div>
    )
}

export default Bottom;