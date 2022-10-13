import "./Navbar.css"
import Carwidget from "../CarWidget/Carwidget"
import logo from "./assets/logo.png"
import { Link } from "react-router-dom"

const navbar = () => {
    return(
        <nav className="navbar">
            <Link to="/"><img className="logo" src={logo} alt="logo-pagina"/></Link>
            
                <div className="divBotones category">
                    <Link to={"/category/remeras"}><button className="css-button-arrow--black">Remeras</button></Link>
                    <Link to={"/category/pantalones"}><button className="css-button-arrow--black">Pantalones</button></Link>
                    <Link to={"/category/zapatillas"}><button className="css-button-arrow--black">Zapatillas</button></Link>          
                </div>
                <button className="css-button-arrow--black">
                    <Link to={"/cart"}><Carwidget/></Link>
                </button>  
        </nav>
    )
}

export default navbar