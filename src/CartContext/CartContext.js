// Archivo con toda la logica del carrito
import { createContext, useEffect, useState } from "react"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setCantidadTotal(cantidadEnTiempoReal)
    }, [cart])

    useEffect(() => {
        setTotal(precioTotal)
    }, [cart])

    const addItem = (productoAgregado) => {
        if(!isInCart(productoAgregado.id)){
            setCart([...cart, productoAgregado])
            
            Toastify({
                text: "Se agrego el producto al carrito"  ,
                className: "info",
                style: {
                  background: "linear-gradient(to right, #006e07, #009400, #058c00)",
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

    const cantidadEnTiempoReal = () => {
        let acumulador = 0

        cart.forEach(prod => {
            acumulador += prod.cantidad
        })
        return acumulador
    }

    const precioTotal = () => {
        let acumulador = 0

        cart.forEach(prod => {
            acumulador += prod.cantidad * prod.price
        })
    }

    return(
        <CartContext.Provider value={{addItem, cart, isInCart, removeItem, cantidadTotal, total}}>
            {children}
        </CartContext.Provider>
    )
}