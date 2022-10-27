import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";

const Cart = () => {

    const {cart} = useContext(CartContext)
    
    if(cart.length === 0){
        return(
            <div className="carritoVacio">
                <h2>El carrito está vacio</h2>
                <p>Dale click al boton y agrega algun producto</p>
                <Link to="/">
                    <button className="css-button-arrow--black">Ir a los productos</button>
                </Link>
            </div>
        )
    }else{
        return(
            <CartList/>
        )
    }

}

export default Cart