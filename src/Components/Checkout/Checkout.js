import "./Checkout.css"
import { useContext, useState } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { baseDeDatos } from "../../services/firebase"
import Swal from 'sweetalert2'

const Checkout = () => {
    const { cart, total } = useContext(CartContext)
    const [ name, setName ] = useState("")
    const [ tel, setTel ] = useState("")
    const [ email, setEmail ] = useState("")
   
    const createOrder = () => {
        const objOrder = {
            buyer: {
                name: name,
                phone: tel,
                email: email,
            },
            items: cart,
            total
        }

    const ordersRef = collection(baseDeDatos, "orders")
        addDoc(ordersRef, objOrder).then(response => {
            return(
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "¡Listo!",
                    text:  `Muchas gracias por su compra.
                            A la brevedad nos comunicaremos con usted.
                            El id de su compra es: ${response.id}`,
                    confirmButtonText: 'Ok',
                    showConfirmButton: true,
                  })
            )
        }).catch(() => {
            return(
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "Algo salio mal",
                    text: `Hubo un error inesperado al finalizar la compra`,
                    confirmButtonText: 'Ok',
                    showConfirmButton: true,
                  })
            ) 
        })
    } 

    return(
        <div className="divFormularioCheckout">
            <h2>Completa con tus datos para finalizar la compra</h2>
                <form className="form">
                    <label >Nombre y apellido:</label>
                    <input className="inputs" placeholder="Ingrese Nombre Completo" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label >Telefono:</label>
                    <input className="inputs" placeholder="Ingrese Numero De Telefono" type="tel" value={tel} onChange={(e) => setTel(e.target.value)}/>
                    <label >Correo electronico:</label>
                    <input className="inputs" placeholder="Ingrese Direccion De Correo Electronico" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </form>
                <button className="css-button-arrow--black" onClick={createOrder}>Finalizar Compra</button>
        </div>
    )
}

export default Checkout