import Banner from "./components/Banner";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App">
      <Banner/>
      <TextField label = "Nome" placeholder="Digite seu nome"/>
      <TextField label = "Cargo" placeholder="Digite seu cargo"/>
      <TextField label = "Imagem" placeholder="Digite o endereço da imagem"/>
      <TextField label = "Time"/>
    </div>
  );
}

export default App;
