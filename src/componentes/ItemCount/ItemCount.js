import {useState} from 'react'
import "./ItemCount.css"

//llamo al hook useState y le paso por parametros el stock y la funcion onAdd

const Counter = ({stock, onAdd}) =>{ 
    const[value, setValue] = useState(0)

//creo las funciones para los botones

    const restar = () => {
        
        //pregunto si el valor es mayor a 0, si no lo es deja de ejecutar la funcion y deja de restar

        if(value > 0){
            setValue(value - 1)
        }
    }

    const sumar = () => {  

        //pregunto si el valor es menor que el stock, si no lo es deja de ejecutar la funcion y no suma mas

        if(value < stock){                        
            setValue(value + 1)
        }
        
    }

//creo los elementos para que React los renderize luego en el virtualDOM

    return(
        <div>
            <button className='css-button-neumorphic' onClick={restar}>-</button>
            <input className='input' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className='css-button-neumorphic' onClick={sumar}>+</button>
            <button className='css-button-neumorphic' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )  
}

export default Counter