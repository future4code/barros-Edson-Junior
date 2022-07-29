import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TelaDeLista=()=> {
    const [usuarios, setUsuarios] = useState([]);

    const listaDeUsuarios = () =>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`
        axios.get(url,{
            
            headers:{
                Authorization: "edson-junior-barros"}
            }).then((res)=>{
                setUsuarios(res.data)
                console.log(usuarios);
            }).catch((err)=>{
                console.log(err.response);
            })
        }

        const deletarUsuario = (id) =>{
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
            axios.delete(url, {
                headers:{Authorization: "edson-junior-barros"}
            }).then((res)=>{
                console.log(res.data);
            }).catch((err)=>{
                console.log(err.response.data.message);
            })
        }

        const novaLista = usuarios.map((element)=>{
            return (
                <div>
                <p>{element.name}</p>
                <button onClick={() => deletarUsuario(element.id)}>Deletar Usuário</button>
                </div>
            )
        })
        console.log(novaLista);

        useEffect(() => {
            listaDeUsuarios();
        }, []);

        



return (
    <div>
        {novaLista}
        <button >Voltar</button>
    </div>
)
}

    export default TelaDeLista
