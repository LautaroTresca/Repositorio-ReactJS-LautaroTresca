import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{ 
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => { 
        getProductById(productId).then (response => {
            setProduct(response)
        }).finally(() =>{
            setLoading(false)
        })
            
    }, [productId])

    if(loading){
        return(
            <Spinner/>
        )
    }

    return(
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer