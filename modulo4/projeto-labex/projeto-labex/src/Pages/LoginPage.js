import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

  const navigate = useNavigate()

  const goToAdmin = () => {
  navigate ('/admin')
}

  const goBack = () => {
  navigate (-1)
}

  return (
    <section>
      <p>Área de Login</p>
      <div>
        <input></input>
        <input></input>
        <button onClick={goToAdmin} >Login</button>
      </div>

      <button onClick={goBack} >Voltar</button>

    </section>
  )
}
