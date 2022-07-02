import React from 'react';
import './CardPequeno.css'




function CardPequeno(props) {

    return (

        <div className="smallcard-container">

            <img src={ props.icone } />

            <div>

                <h4>{ props.dado }</h4>

                <p>{ props.descricao }</p>

            </div>
            
        </div>
    )
}













export default CardPequeno;