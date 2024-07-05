import cup from '../Images/Standout/image-stand-out.jpg'
function Standout() {
    return(
        <div className="standout">
            <div className="cup">
                <img src={cup} className='cup'/>
            </div>
            <div className="stand-text">
                <h1><b>Stand out the right audience</b></h1>
                <br></br>
                <p>Using a collaboratio formula of designers, reseachers, photographers,
                    videographers, and copywriters, we'll build and extend your brand in 
                    digital places
                </p>
                <br></br>
                <h4><b>LEARN MORE</b></h4>
            </div>
        </div>
    )
}

export default Standout;