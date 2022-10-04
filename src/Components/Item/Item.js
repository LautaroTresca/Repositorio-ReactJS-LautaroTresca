import "./Item.css"
import Spinner from "../Spinner/Spinner"
import Counter from "../ItemCount/ItemCount"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ButtonDetail from "../ButtonDetail/ButtonDetail"


const handleOnAdd = () => {
    Toastify({
      text: "Producto agregado al carrito",
      duration: 3000
    }).showToast();
}

const Item = () =>{
    const [products, setProducts] = useState([])
        const [loading, setLoading] = useState(true)


        useEffect(() => { 
            getProducts().then (response=> {
                setProducts(response)
            }).finally(() =>{
                setLoading(false)
            })
                
        }, [])

        if(loading){
            return(
                <Spinner/>
            )
        }
    
    return(
        <div className="divCards">
            {products.map(prod => 
                <div key={prod.id} className='card'>
                    <h4>{prod.name}</h4>
                    <p className='stock'>Stock: {prod.stock} unidades</p>
                    <div>
                        <img className='img' src={prod.img} alt="fotoDeProducto"/>
                    </div>
                    <Counter stock={prod.stock} onAdd={handleOnAdd}/>
                    <ButtonDetail/>
                </div> 
            )}
        </div>
        )
}

export default Item    