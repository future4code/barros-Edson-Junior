import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

import Perfil from './perfil.JPG';
import Resultante from './resultante.png';
import TecGraf from './tecgraf.png';
import Email from './email.png';
import Endereco from './endereco.png'




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {Perfil} 
          nome="Edson Almeida" 
          descricao="Oi, eu sou o Edson. Sou designer e estudante de programação na Labenu. Trabalho com livros e gosto muito de pedalar nos momentos livres."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>


      <div className="page-section-container">

        <CardPequeno 
        
          icone = {Email}
          dado = "E-mail:"
          descricao = "ed.junior@ymail.com"
        
        />

        
        <CardPequeno 
        
          icone = {Endereco}
          dado = "Endereço:"
          descricao = "Rua Edinho"
      
        />


      </div>


















      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {Resultante} 
          nome="Resultante" 
          descricao="Estagiário de design, onde fui designado para criar cenários e artes diversas para realização de eventos. Utilização
          de programas de modelagem 3d e renderização como SolidWorks, SketchUp, Rhinoceros, Lumion e Keyshot." 
        />
        
        <CardGrande 
          imagem={TecGraf} 
          nome="TecGraf" 
          descricao="Monitor do Stand Petrobrás-TecGraf/PUC-Rio no evento Rio Oil and Gas. Apresentação na
          área de Manufatura Aditiva com foco em impressões por Fused Deposition Modeling em
          diferentes materiais; Operação de scanner e impressora 3d." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
