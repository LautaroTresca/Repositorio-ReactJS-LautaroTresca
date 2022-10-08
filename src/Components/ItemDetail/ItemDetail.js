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
                <img className="imgDetail" src={product.img} alt={product.name}/>
            </div>
            <div>
                <h2>${product.price}</h2>
                <li className="textDescription">{product.description1}</li>
                <li className="textDescription">{product.description2}</li>
                <li className="textDescription">{product.description3}</li>
                <li className="textDescription">{product.description4}</li>
                <Counter stock={product.stock} onAdd={handleOnAdd}/>
                <p className="textCant">Stock disponible: {product.stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail