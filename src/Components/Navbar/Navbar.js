import "./Navbar.css"
import Carwidget from "../CarWidget/Carwidget"
import logo from "./assets/logo.png"

const navbar = () => {
    return(
        <nav className="navbar">
            <img className="logo" src={logo}/>
                <div className="divBotones">
                    <button className="css-button-arrow--black">Remeras</button>
                    <button className="css-button-arrow--black">Pantalones</button>
                    <button className="css-button-arrow--black">Zapatillas</button>
                </div>
                <button className="css-button-arrow--black">
                    <Carwidget/>
                </button>  
        </nav>
    )
}

export default navbar