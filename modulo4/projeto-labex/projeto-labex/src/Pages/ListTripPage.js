import React from 'react'
import { useNavigate} from 'react-router-dom'
import { BASE_URL } from '../Constants/Constant'
import useRequestData from '../Hooks/useRequestData'


export default function ListTripPage() {

  const navigate = useNavigate()

    const goBack = () => {
    navigate (-1)
  }


  

  return (
    <section>

          <div>
          <p>Lista de Viagens</p>
          </div>

          <div>
            <button onClick={goBack}>Voltar</button>
          </div>

    </section>
  )
}
