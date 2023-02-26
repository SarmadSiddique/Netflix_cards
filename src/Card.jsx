
const margin = {
    marginLeft: '5px'
}
function Card(props) {
    return (<>
        <div className="main">
            <div className="card"  >
                <img className="img " src={props.cardimg} alt='mypic' />
                <div className="body">
                    <span style={margin} className='cardtitle'>{props.cardtitle}</span>
                    <h3 style={margin}>{props.cardcat}</h3>
                    <a href={props.link}><button id="butt" className="btn btn-succees ">Watch Now</button></a>
                </div>
            </div>
        </div>
    </>);
}
export default Card;