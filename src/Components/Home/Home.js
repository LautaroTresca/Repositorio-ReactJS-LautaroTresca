import "./Home.css"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Home = () => {
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
                            <span>
                                <ItemListContainer/>
                            </span>
                    </span>
                </section>
            </main> 
        </div>
        
    )
}

export default Home