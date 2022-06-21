import logo from './logo.JPG';
import './App.css';

function App() {
  function mensagem(){
    alert ("Boa noite!")
  }
  const titulo = "Olá! Eu sou o Edson Almeida!"
  return (
    <div className="App">
      <header className="App-header">
        <h1>{titulo}</h1>
        <img src={logo} className="App-logo" alt="Imagem perfil" />
        <p>
          Este é o meu primeiro site React.
        </p>
        
        <button onClick={mensagem}>Aperte este botão</button>  
        
      </header>
    </div>
  );
}

export default App;
