import milk from '../Images/Bottom images/image-gallery-milkbottles.jpg';
import plate from '../Images/Bottom images/image-gallery-orange.jpg';
import cone from '../Images/Bottom images/image-gallery-cone.jpg';
import sugar from '../Images/Bottom images/image-gallery-sugarcubes.jpg';

function Bottom() {
    return (
        <div className='Pics'>
            <img src={milk} className='milk' alt="Milk Bottles" />
            <img src={plate} className='plate' alt="Orange Plate" />
            <img src={cone} className='cone' alt="Ice Cream Cone" />
            <img src={sugar} className='sugar' alt="Sugar Cubes" />
        </div>
    );
}

export default Bottom;
