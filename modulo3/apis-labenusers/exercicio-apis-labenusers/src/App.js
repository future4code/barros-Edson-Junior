import { useState } from "react";
import TelaDeCadastro from "./components/TelaDeCadastro";
import TelaDeLista from "./components/TelaDeLista";

function App() {

  const [tela, setTela] = useState("principal")

  const trocarDeTela = () =>{
    switch(tela){
      case "principal":
        return <TelaDeCadastro/>
      case "lista":
        return <TelaDeLista/>
        default:
          return <div>Algo deu errado!</div>
    }
  }

  return (
    <div className="App">
      {/* deixei as telas aqui para mostrar no surge */}
      <TelaDeCadastro/>
      <TelaDeLista/>

      {trocarDeTela}
      <button onClick={trocarDeTela}>Trocar de Tela</button>
      

    </div>
  );
}

export default App;
