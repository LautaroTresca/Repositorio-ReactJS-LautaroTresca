import "./Navbar.css"
import Carwidget from "../CarWidget/Carwidget"
import logo from "./assets/logo.png"
import { Link } from "react-router-dom"

const navbar = () => {
    return(
        <nav className="navbar">
            <Link to="/"><img className="logo" src={logo} alt="logo-pagina"/></Link>
                <section className="divBotones category">
                    <Link to={"/"}><button className="css-button-sliding-to-bottom--black">Inicio</button></Link>
                    <Link to={"/category/remeras"}><button className="css-button-sliding-to-bottom--black">Remeras</button></Link>
                    <Link to={"/category/pantalones"}><button className="css-button-sliding-to-bottom--black">Pantalones</button></Link>
                    <Link to={"/category/zapatillas"}><button className="css-button-sliding-to-bottom--black">Zapatillas</button></Link>          
                </section>
                <button className="css-button-sliding-to-bottom--black">
                    <Link to={"/cart"}><Carwidget/></Link>
                </button>  
        </nav>
    )
}

export default navbar