import {useState} from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock, onAdd, initial = 1}) =>{ 
    const[cantidad, setCantidad] = useState(initial)

    const restar = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }


    const sumar = () => {  
        if(cantidad < stock){                        
            setCantidad(cantidad + 1)
        }
    }


    return(
        <div>
            <button className='css-button-neumorphic' onClick={restar}>-</button>
            <input className='input' value={cantidad} onChange={(e) => setCantidad(e.target.cantidad)}/>
            <button className='css-button-neumorphic' onClick={sumar}>+</button>
           <button className='css-button-neumorphic' onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
        </div>
    )  
}

export default ItemCount