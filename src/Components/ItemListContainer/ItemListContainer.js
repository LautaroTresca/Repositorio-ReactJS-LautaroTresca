import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"

const ItemListContainer = ({greeting}) =>{ 
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
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer