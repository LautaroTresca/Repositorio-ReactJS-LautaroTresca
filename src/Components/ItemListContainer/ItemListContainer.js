import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import { getProductByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"

const ItemListContainer = () =>{ 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()

    useEffect(() => { 

        const api = category ? getProductByCategory : getProducts

        api(category).then (response=> {
            setProducts(response)
        }).finally(() =>{
            setLoading(false)
        })
            
    }, [category])


    if(loading){
        return(
            <Spinner/>
        )
    }

    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer