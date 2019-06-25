import React from 'react';
import Login from './login/Login';
import CadastroMotorista from './motorista/CadastroMotorista';
import CadastroOnibus from './onibus/CadastroOnibus';
import CadastroViagem from './viagem/CadastroViagem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CadastroOnibus />
      </header>
    </div>
  );
}

export default App;
