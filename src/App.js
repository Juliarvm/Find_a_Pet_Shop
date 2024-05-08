import logo from './logo.svg'; // Importa a logo 
import './App.css'; // Importa o arquivo CSS para o componente App
import './PetshopSelector.css'; // Importa o arquivo CSS para o componente PetshopSelector
import PetshopSelector from './components/PetshopSelector'; // Importa o componente PetshopSelector

// Define o componente funcional App
function App() {


  return (
    <div className="App">
      <div className="app-content">
        <h1>Seja bem vindo(a) ao Find a Pet Shop!</h1>
        <p>
          Aqui você vai encontrar o petshop ideal para o seu cão, considerando
          a data<br></br> do banho, o número de cachorros pequenos e grandes que você
          possui
        </p>
        <p>
          Descubra qual pet shop oferece o melhor custo-benefício <br></br>para as
          necessidades do seu animal de estimação!
        </p>
        <p>Insira os dados:</p>
      </div>
      <PetshopSelector />
    </div>
  );
}

export default App; // Exporta o componente App como padrão

