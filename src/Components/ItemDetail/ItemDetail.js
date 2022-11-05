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
            id: productId, name, price, cantidad, img
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
            <div className="divDescripcionProducto">
                <h2>${price}</h2>

                <li className="textDescription">{description1}</li>
                <li className="textDescription">{description2}</li>
                <li className="textDescription">{description3}</li>
                <li className="textDescription">{description4}</li>

                { !isInCart(productId)
                    ?
                    <footer>
                        <ItemCount stock={stock} onAdd={handleOnAdd} initial={cantidadAgregada}/>
                        {
                            stock !== 0 ? <p className="textCant">Stock disponible: {stock} </p>
                            :
                            <p className="textCant"> No hay stock</p>
                        }
                    </footer> 
                    :
                    <footer>
                        <ItemCount stock={stock} onAdd={handleOnAdd} initial={cantidadAgregada}/>
                        <Link to={"/cart"}><button className="css-button-neumorphic">Ir al carrito</button></Link>
                        <Link to={"/"}><button className="css-button-neumorphic">Seguir Comprando</button></Link>
                    </footer>    
                }    
                  
            </div>
        </div>
    )
}

export default ItemDetail