import logo from './logolabenu.jpg';
import {Direita, Header,Titulo, } from './style'

function App() {
  return (
    <div className="App">
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <Titulo>
          Labzap
        </Titulo>
        
      </Header>
    </div>

  );


}

export default App;
