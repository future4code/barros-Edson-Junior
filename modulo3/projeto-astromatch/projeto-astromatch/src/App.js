import React, { useState } from "react";
import Header from "./components/Header";
import TelaInicial from "./components/TelaInicial";
import TelaMatches from "./components/TelaMatches";
import './App.css';

function App() {

  const [telaAtual, setTelaAtual]= useState(<TelaInicial/>)






  return (
    <div className="App">
      <Header telaAtual={telaAtual} setTelaAtual={setTelaAtual}/>
      
      <h1>Astromatch</h1>
      <div>
        {telaAtual}
      </div>

    </div>  
  );
}

export default App;
