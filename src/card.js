

export default function Card(props){
    return(
        <div className="card">
            <img className="card--img" src={require(`./img/${props.item.coverImg}`)}/>
            
            <div className="hero">
                <div className="location">
                    <h4 className="card--location" >{props.item.location}</h4>
                    <a className="card--link" href="props.item.googleMapsUrl">View on Google Maps</a>
                </div>
                <div className="info">
                    <h1 className="card--title" >{props.item.title}</h1>
                    <p className="card--dates" ><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
                    <p className="card--desc" >{props.item.description}</p>
                </div>
            </div>
        </div>
    )

}