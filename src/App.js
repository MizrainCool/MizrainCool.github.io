import './App.css'
import { Header } from './components/cabecera/Header';
import { ParticulasHexagonales } from './components/particulas/ParticulasHexagonales';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ParticulasHexagonales></ParticulasHexagonales>
    </div>
  );
}

export default App;
