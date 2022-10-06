import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const handleOnAdd = () => {
    Toastify({
      text: "Producto agregado al carrito",
      duration: 3000
    }).showToast();
}

const ItemDetail = ({product}) => {
    return(
        <div className="divItemDetail">
            <div>
                <h1>{product.name}</h1>
                <img src={product.img}/>
            </div>
            <div>
                <h2>{product.price}</h2>
                <p>{product.description}</p>
                <Counter stock={product.stock} onAdd={handleOnAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail