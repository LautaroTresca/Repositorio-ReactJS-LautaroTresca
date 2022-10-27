import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const ItemDetail = ({name, img, price, description1, description2, description3, description4, stock}) => {
    const { addItem, isInCart, getCantidadProducto } = useContext(CartContext)
    const { productId } = useParams()

    const handleOnAdd = (cantidad) => {
        const productoAgregado = {
            id: productId, name, price, cantidad
        }
        addItem({...productoAgregado})
    }

    const cantidadAgregada = getCantidadProducto(productId)

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

                { !isInCart(productId)
                    ? 
                    <ItemCount stock={stock} onAdd={handleOnAdd} initial={cantidadAgregada}/>
                    :
                    <footer>
                        <ItemCount stock={stock} onAdd={handleOnAdd} initial={cantidadAgregada}/>
                        <Link to={"/cart"}><button className="css-button-neumorphic">Ir al carrito</button></Link>
                        <Link to={"/"}><button className="css-button-neumorphic">Seguir Comprando</button></Link>
                    </footer>    
                }    
                  
                <p className="textCant">Stock disponible: {stock} </p>
            </div>
        </div>
    )
}

export default ItemDetail