import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Listado de productos"}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
