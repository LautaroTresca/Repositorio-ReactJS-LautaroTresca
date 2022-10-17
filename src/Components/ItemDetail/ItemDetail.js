import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"

const ItemDetail = ({id, name, img, price, description1, description2, description3, description4, stock}) => {

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        const productoAgregado = {
            id, name, price, cantidad
        }
        

        addItem({...productoAgregado})
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
                <ItemCount stock={stock} onAdd={handleOnAdd}/>   
                {/* { cart === 0 ?
                        :
                            <footer>
                                <p>Se agregó {cart} al carrito</p>
                                <Link to={"/cart"}><button className="css-button-neumorphic">Finalizar compra</button></Link>
                                <Link to={"/"}><button className="css-button-neumorphic">Seguir Comprando</button></Link>
                            </footer>    
                }     */}
                <p className="textCant">Stock disponible: {stock} </p>
            </div>
        </div>
    )
}

export default ItemDetail