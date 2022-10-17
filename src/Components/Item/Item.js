import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, name, stock, img, price}) =>{

    return(
        <div>
            <div key={id} className='card'>
                <h5>{name}</h5>
                <p className='stock'>Stock: {stock} unidades</p>
                <div>
                    <img className='img' src={img} alt="fotoDeProducto"/>
                </div>
                <p className="price">${price}</p>
                <Link to={`/detail/${id}`}><button className="css-button-neumorphic">Ver detalle del producto</button></Link>
            </div> 
        </div>
        )
}
  

export default Item    