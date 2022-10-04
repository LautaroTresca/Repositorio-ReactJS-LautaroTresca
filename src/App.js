import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Listado de productos"}/>
    </div>
  );
}

export default App;
