import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { baseDeDatos } from "../services/firebase"

const ItemListContainer = () =>{ 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()

    useEffect(() => { 

        const collectionBaseDeDatos = category ? query(collection(baseDeDatos, "productos"), where("category", "==", category)) : collection(baseDeDatos, "productos") 

        getDocs(collectionBaseDeDatos).then (response=> {
            const productosMapeados = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
   
            setProducts(productosMapeados)

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