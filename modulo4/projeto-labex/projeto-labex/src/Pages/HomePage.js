import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DivHome } from './Styled'

export default function HomePage() {

  const navigate = useNavigate()

  const goToTrips = () => {
    navigate ('/listtrip')
  }

  const goToLogin = () => {
    navigate('/login')
  }




  return (
    <section>
      <DivHome>
        <div>
          <h1>LabeX</h1>
        </div>
        <button onClick={goToTrips} >Ver Viagens</button>
        <button onClick={goToLogin} >Área de login</button>
      </DivHome>
    </section>
  )
}
