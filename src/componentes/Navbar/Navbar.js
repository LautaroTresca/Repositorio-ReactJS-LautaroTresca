import "./Navbar.css"
import Carwidget from "../CarWidget/Carwidget"

const navbar = () => {
    return(
        <nav className="navbar">
            <h1 className="tituloNav">Mi pagina e-commerce</h1>
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