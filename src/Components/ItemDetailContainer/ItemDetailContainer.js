import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { baseDeDatos } from "../../services/firebase"

const ItemDetailContainer = () =>{ 
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    
    useEffect(() => { 
        const documentoDeLaBaseDeDatos = doc(baseDeDatos, "productos", productId) 

            getDoc(documentoDeLaBaseDeDatos).then (response => {
                setProduct(response.data())
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
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer