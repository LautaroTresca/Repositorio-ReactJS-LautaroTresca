import carro from "./assets/carro-de-la-carretilla.png"
import "./Carwidget.css"

const Carwidget = () =>{
    return(
        <div className="divCarrito">
            <img src={carro} alt="iconoDeCarrito"/>
            3
        </div>  
    )
}

export default Carwidget