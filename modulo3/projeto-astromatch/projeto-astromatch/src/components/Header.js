import React from 'react'
import TelaInicial from "./TelaInicial";
import TelaMatches from "./TelaMatches";

export default function Header(props) {
  return (
    <div>
        <h1></h1>
        <button onClick={ ()=> props.setTelaAtual (<TelaInicial/>) }>Tela Inicial</button>
        <button onClick={ ()=> props.setTelaAtual (<TelaMatches/>) }>Ver Matches</button>

    </div>
  )
}
