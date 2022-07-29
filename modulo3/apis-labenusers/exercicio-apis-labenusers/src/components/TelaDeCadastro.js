import React, {useState} from "react";
import axios from "axios";


const TelaDeCadastro =()=>{

    const [inputNome, setInputNome] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const atualizaInputNome = (event) => {
        setInputNome(event.target.value);
      };

      const atualizaInputEmail = (event) => {
        setInputEmail(event.target.value);
      };

    const cadastraUsuario = ()=>{
        const body = {
            name:inputNome,
            email:inputEmail
        }
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`
        axios.post(url, body, {
            headers:{Authorization: "edson-junior-barros"}
        }).then((res)=>{
            alert("Usuário cadastrado com sucesso!");
            console.log(res.data);
        }).catch((err)=>{
            alert("Ops! Aldo deu errado!");
            console.log(err.response.data.message);
        })
    }
    return (
        <div>
            <input type="text" placeholder="Insira seu Nome" value={inputNome} onChange={atualizaInputNome} ></input>
            <input type="text" placeholder="Insira seu E-mail" value={inputEmail} onChange={atualizaInputEmail}></input>
            <button onClick={cadastraUsuario}>Cadastrar Usuário</button>
        </div>
    )

}








export default TelaDeCadastro