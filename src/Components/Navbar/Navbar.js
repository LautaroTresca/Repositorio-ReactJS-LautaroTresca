import "./Navbar.css"
import Carwidget from "../CarWidget/Carwidget"
import logo from "./assets/logo.png"
import { Link } from "react-router-dom"
import { getDocs, collection, query, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"
import { baseDeDatos } from "../../services/firebase"

const Navbar = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const collectionRef = query(collection(baseDeDatos, "categories"), orderBy("order")) 
        
        getDocs(collectionRef).then(response => {
            const categoriasBaseDeDatos = response.docs.map(doc => {
                return{id: doc.id, ...doc.data()} 
            })
            setCategorias(categoriasBaseDeDatos)
        })
    }, [])

    return(
        <nav className="navbar">
            <Link to="/"><img className="logo" src={logo} alt="logo-pagina"/></Link>
                <section className="divBotones category">
                    {
                        categorias.map(categoria => (
                            <Link key={categoria.id} to={`/category/${categoria.slug}`}><button className="css-button-sliding-to-bottom--black">{categoria.label}</button></Link>
                        ))
                    }
                </section>
                <button className="css-button-sliding-to-bottom--black">
                    <Link className="carrito" to={"/cart"}><Carwidget/></Link>
                </button>  
        </nav>
    )
}

export default Navbar