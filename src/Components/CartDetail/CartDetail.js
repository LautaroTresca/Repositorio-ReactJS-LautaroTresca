import "./CartDetail.css"
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import tachoDeBasura from "./assets/eliminar.png"

const CartDetail = () => {
    const {removeItem, cart, total, vaciarCarrito} = useContext(CartContext)
    return(
        <div>
            <table className="tablaProductos">
                <tbody>
                    <tr>
                        <td><strong>Cantidad</strong></td>
                        <td><strong>Productos</strong></td>
                        <td><strong>Precio</strong></td>
                        <td><strong>Eliminar</strong></td>
                    </tr>
                    {
                        cart.map(prod => 
                            <tr key={prod.id}>
                                <td className="fila">{prod.cantidad}</td>
                                <td className="fila">{prod.name}</td>
                                <td className="fila">${prod.price}</td>
                                <td><button onClick={() => removeItem(prod.id)}><img  alt="eliminar-producto" src={tachoDeBasura}/></button></td>
                            </tr> 
                            
                    )}
                </tbody>
            </table>
            <section className="precioTotal">
                <p>Total: ${total}</p>
            </section>
            <section className="containerBotonesCartList">
                <button className="css-button-arrow--black">Finalizar Compra</button>
                <button onClick={vaciarCarrito} className="css-button-arrow--black">Vaciar Carrito</button>
            </section>

        </div>
        
    )
}

export default CartDetail