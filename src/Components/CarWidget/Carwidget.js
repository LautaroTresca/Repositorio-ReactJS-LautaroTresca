import carro from "./assets/carro-de-la-carretilla.png"
import "./Carwidget.css"
import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"

const Carwidget = () =>{
    
    const {cantidadTotal} = useContext(CartContext)

    return(
        <div className="divCarrito">
            <img src={carro} alt="iconoDeCarrito"/>
            <p>{cantidadTotal}</p>
        </div>  
    )
}

export default Carwidget