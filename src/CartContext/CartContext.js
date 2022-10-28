import { createContext, useEffect, useState } from "react"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {
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
                text: `Se agrego ${productoAgregado.cantidad} ${productoAgregado.name} al carrito`,
                className: "info",
                position: "center",
                duration: 1000,
              }).showToast();
        }else{
            const cartActualizado = cart.map(prod => {
                if(prod.id === productoAgregado.id){
                    const productoActualizado = {
                        ...prod, 
                        cantidad: productoAgregado.cantidad
                    }
                    return productoActualizado
                }else{
                    return prod
                }
            })
            setCart(cartActualizado)
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
        return acumulador
    }

    const vaciarCarrito = () =>{
        setCart([])
        Toastify({
            text: "Carrito vacio",
            position: "center",
            duration: 1000
        }).showToast();
            
    }

    const getCantidadProducto = (id) => {
        const producto = cart.find(prod => prod.id === id)
        return producto?.cantidad
    }

    return(
        <CartContext.Provider value={{addItem, cart, isInCart, removeItem, cantidadTotal, total, vaciarCarrito, getCantidadProducto}}>
            {children}
        </CartContext.Provider>
    )
}