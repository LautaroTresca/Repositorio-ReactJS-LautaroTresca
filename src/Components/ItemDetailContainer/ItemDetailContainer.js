import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner"

const ItemDetailContainer = () =>{ 
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => { 
        getProductById(1).then (response => {
            setProduct(response)
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
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer