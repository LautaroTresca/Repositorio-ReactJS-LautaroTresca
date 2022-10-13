import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({name, img, price, description1, description2, description3, description4, stock}) => {
   
    const [productoAgregado, setProductoAgregado] = useState([])

    const handleOnAdd = (cantidad) => {
        setProductoAgregado({cantidad, name, price, img})
     }

    return(
        <div className="divItemDetail">
            <div>
                <h1>{name}</h1>
                <img className="imgDetail" src={img} alt={name}/>
            </div>
            <div>
                <h2>${price}</h2>
                <li className="textDescription">{description1}</li>
                <li className="textDescription">{description2}</li>
                <li className="textDescription">{description3}</li>
                <li className="textDescription">{description4}</li>
                { productoAgregado.length === 0 ?
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>   
                        :
                            <footer>
                                <p>Se agregó {productoAgregado.cantidad} {productoAgregado.name} al carrito</p>
                                <Link to={"/cart"}><button className="css-button-neumorphic">Finalizar compra</button></Link>
                                <Link to={"/"}><button className="css-button-neumorphic">Seguir Comprando</button></Link>
                            </footer>    
                }    
                <p className="textCant">Stock disponible: {productoAgregado.cantidad > 0 ? `${stock}` - `${productoAgregado.cantidad}` : `${stock}` }</p>
            </div>
        </div>
    )
}

export default ItemDetail