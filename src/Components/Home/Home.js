import "./Home.css"
import { getProducts } from "../../asyncMock"
import { useEffect, useState } from "react"
import Spinner from "../Spinner/Spinner"

const Home = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then (Response => {
            setProducts(Response)
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
                        <h1 className="titleSectionMain">Articulos destacados</h1>
                            <span className="containerCardsSectionMain">
                                {products.map(prod => 
                                    <div className="cardSectionMain" key={prod.id}>
                                        <img className="imgCardSectionMain" alt="imagen-producto" src={prod.img}/>
                                        <h5>{prod.name}</h5>
                                    </div>)}
                            </span>
                    </span>
                </section>
            </main> 
        </div>
        
    )
}

export default Home