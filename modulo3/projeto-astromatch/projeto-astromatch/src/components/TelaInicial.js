import React, { useState } from 'react'
import axios from 'axios'
import { CardPerfis } from "./Style";

export default function TelaInicial() {

  const [idUsuario, setIdUsuario] = useState("")

  const [idadeUsuario, setIdadeUsuario] = useState("")

  const [nomeUsuario, setNomeUsuario] = useState("")

  const [fotoUsuario, setFotoUsuario] = useState("")

  const [bioUsuario, setBioUsuario] = useState("")

//escolher o perfil//
  const proximoPerfil = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/edson-junior-barros/person"

    axios.get(url).then((res)=>{
      if(res.data.profile){
        setIdUsuario(res.data.profile.id)
        setIdadeUsuario(res.data.profile.age)
        setNomeUsuario(res.data.profile.name)
        setFotoUsuario(res.data.profile.photo)
        setBioUsuario(res.data.profile.bio)
      }else{
        alert("Não há mais perfis disponíveis!")
      }
    }).catch((err)=>{
      alert(err.response)
    })
  }

  //dar like no po perfil//

  const escolherPessoa = (id) =>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/edson-junior-barros/choose-person"

    const body = {
      id: id,
      choice: true
    }

    axios.post(url, body).then((res)=>{

      escolherPessoa()

    }).catch((err)=>{

      alert(err.response)
    })
  }





  return (

    <div>

      <CardPerfis>

        <img src={fotoUsuario}></img>
        <h3>{nomeUsuario}</h3>
        <h4>{idadeUsuario}</h4>
        <h5>{bioUsuario}</h5>
        <button onClick={proximoPerfil}>Hm, não gostei!</button>
        <button onClick={()=>escolherPessoa(idUsuario)}>Gostei!</button>

      </CardPerfis>

      <button onClick={proximoPerfil}>Próximo perfil</button>

    </div>


  )
}
