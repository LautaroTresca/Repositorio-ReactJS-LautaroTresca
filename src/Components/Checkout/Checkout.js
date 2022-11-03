import "./Checkout.css"
import { useContext, useState } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { baseDeDatos } from "../../services/firebase"
import Swal from 'sweetalert2'

const Checkout = () => {
    const { cart, total, vaciarCarrito } = useContext(CartContext)
    const [datos, setDatos] = useState({
        nombre:"",
        telefono:"",
        email:"",
        emailConfirmed:""
    })
    
    const handleInputChange = (e) => {
        setDatos({
            ...datos, [e.target.name] : e.target.value
        })
    }

    const createOrder = (e) => {
        e.preventDefault()
            const objOrder = {
                buyer: {
                    name: [datos.nombre],
                    phone: [datos.telefono],
                    email: [datos.email],
                    emailConfirmed: [datos.emailConfirmed]
                },
                items: cart,
                total
            }
        
        const ordersRef = collection(baseDeDatos, "orders")
        if((datos.email && datos.nombre && datos.telefono !== "") && (datos.email === datos.emailConfirmed)){
            addDoc(ordersRef, objOrder).then(response => {
                return(
                    Swal.fire({
                        title: '¿Esta seguro de que quiere finalizar la compra?',
                        showDenyButton: true,
                        confirmButtonText: 'Finalizar',
                        denyButtonText: `Cancelar`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                            vaciarCarrito()
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
                        }
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
                        showCloseButton: true,
                    })
                    ) 
            })      
        }else if(datos.email !== datos.emailConfirmed){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Los correos electronicos no coinciden",
                confirmButtonText: 'Ok',
                showConfirmButton: true,
                showCloseButton: true,
            })
        }else{
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: "Complete todos los campos",
                confirmButtonText: 'Ok',
                showConfirmButton: true,
                showCloseButton: true,
            })
        }
    }
    
    return(
        <div className="divFormularioCheckout">
            <h2>Completa con tus datos para finalizar la compra</h2>
                <form className="form">
                    <label >Nombre y apellido:</label>
                    <input className="inputs" minLength="5" placeholder="Ingrese Nombre Completo" type="text" name="nombre" onChange={handleInputChange} required/>
                    <label >Telefono:</label>
                    <input className="inputs" minLength="5" placeholder="Ingrese Numero De Telefono" type="tel" name="telefono" onChange={handleInputChange} pattern="[0-9]+" required/>
                    <label >Correo electronico:</label>
                    <input className="inputs" minLength="5" placeholder="Ingrese Direccion De Correo Electronico"  type="email" name="email" onChange={handleInputChange} required/>
                    <label >Vuelva a ingresar su correo electronico:</label>
                    <input className="inputs" minLength="5" placeholder="Ingrese Nuevamente Su Direccion De Correo Electronico" type="email" name="emailConfirmed" onChange={handleInputChange} required/>
                    <input className="botonFormulario" type="submit" value="Finalizar Compra" onClick={createOrder}/>
                </form>
        </div>
    )
}

export default Checkout