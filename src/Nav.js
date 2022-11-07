import worldLogo from "./img/worldwide.png"


export default function Nav(){
    return(
        <nav>
            <img className="nav--img" src={worldLogo}/>
            <h2 className="nav--header" >my travel journal.</h2>
        </nav>
    )
}