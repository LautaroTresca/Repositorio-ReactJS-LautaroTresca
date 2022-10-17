// Archivo con toda la logica del carrito
import { createContext, useState } from "react"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productoAgregado) => {
        if(!isInCart(productoAgregado.id)){
            setCart([...cart, productoAgregado])
            Toastify({
                text: "Se agrego el producto al carrito",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #810000, #b30000, #e20000)",
                }
              }).showToast();
        }else{
            Swal.fire({
                title: 'El producto ya esta en el carrito',
                icon: 'warning',
              })
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const itemEliminado = cart.filter(prod => prod.id !== id)
        setCart(itemEliminado) 
    }

    return(
        <CartContext.Provider value={{addItem, cart, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}