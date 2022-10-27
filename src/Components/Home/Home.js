import "./Home.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from "../Spinner/Spinner"
import { getDocs, collection, query, doc} from "firebase/firestore"
import { baseDeDatos } from "../services/firebase"

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const collectionBaseDeDatos = query(collection(baseDeDatos, "productos"))

        getDocs(collectionBaseDeDatos).then (response => {
            const productosMapeados = response.docs.map(doc => {
                const data = doc.data()
                return{id: doc.id, ...data}
            })
            
            setProducts(productosMapeados)
            
        }).finally(() => {
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
            <header>
                <section className="sectionHeader">
                    <img src="https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_960_720.jpg" alt="fondo-pantalla-principal" className="imgSectionHeader"/>
                    <h1 className="h1ImgSectionHeader">Buscá la inspiracion en tu forma de vestir.</h1>
                </section>
            </header>
            <main>
                <section className="sectionMain">
                    <span>
                        <h1 className="titleSectionMain">Todos los productos</h1>
                            <span className="containerCardsSectionMain">
                                {products.map(prod => 
                                    <Link key={prod.id} className="linkCards" to={`/detail/${prod.id}`}>
                                        <div className="cardSectionMain" >
                                            <img className="imgCardSectionMain" alt="imagen-producto" src={prod.img}/>
                                            <h5>{prod.name}</h5>
                                            
                                        </div>
                                    </Link> 
                                )}  
                            </span>
                    </span>
                </section>
            </main> 
        </div>
        
    )
}

export default Home