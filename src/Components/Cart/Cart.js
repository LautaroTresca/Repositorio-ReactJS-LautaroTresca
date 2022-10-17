import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import tachoDeBasura from "./assets/eliminar.png"

const Cart = () => {

    const {cart, removeItem} = useContext(CartContext)
    
    if(cart.length === 0){
        return(
            <div className="carritoVacio">
                <p>El carrito está vacio</p>
            </div>
        )
    }else{
        return(
            <table className="tablaProductos">
                <tbody>
                    <tr>
                        <td><strong>Cantidad</strong></td>
                        <td><strong>Productos</strong></td>
                        <td><strong>Precio</strong></td>
                    </tr>
    
                    {cart.map(prod => 
                    
                    <tr key={prod.id}>
                        <td className="fila">{prod.cantidad}</td>
                        <td className="fila">{prod.name}</td>
                        <td className="fila">{prod.price}</td>
                        <td><button onClick={() => removeItem(prod.id)}><img  alt="eliminar-producto" src={tachoDeBasura}/></button></td>
                    </tr> )}
                </tbody>
            </table>
        )
    }
}

export default Cart