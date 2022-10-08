import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({ products }) =>{
    
    return(
        <div className="divCards">
            {products.map(prod => <Item key={prod.id} id={prod.id} img={prod.img} name={prod.name} category={prod.category} stock={prod.stock} price={prod.price}/>)}
        </div>
    )
}

export default ItemList