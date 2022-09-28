import './App.css';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Counter from './componentes/ItemCount/ItemCount';

function App() {

  const handleOnAdd = () => {
    Toastify({
      text: "Producto agregado al carrito",
      duration: 3000
    }).showToast();
  }

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a mi tienda"}/>
      <Counter stock={5} onAdd={handleOnAdd} titulo={"Remera basica"}/>
    </div>
  );
}

export default App;
