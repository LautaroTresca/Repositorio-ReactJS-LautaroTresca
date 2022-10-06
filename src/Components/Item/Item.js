import ButtonDetail from "../ButtonDetail/ButtonDetail"
import "./Item.css"




const Item = ({id, name, stock, img}) =>{
    
    return(
        <div>
            <div key={id} className='card'>
                <h4>{name}</h4>
                <p className='stock'>Stock: {stock} unidades</p>
                <div>
                    <img className='img' src={img} alt="fotoDeProducto"/>
                </div>
                {/* <Counter stock={stock} onAdd={handleOnAdd}/> */}
                <ButtonDetail/>
            </div> 
        </div>
        )
}

    

export default Item    