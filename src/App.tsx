import { createContext, useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Home} from './pages/Home';
import {NewRoom} from './pages/NewRoom';

//Ao usar o createContext, é necessário iniciar o contexto
//e passar o formato desse contexto, podendo ser string '' ou
// como neste caso, um objeto '{}'
export const TestContext = createContext({} as any);

function App() {
  //value é o valor padrão
  //setValue permite modificar o valor padrão
  const [value, setValue] = useState('Teste');

  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue}}>
        {/* a propriedade 'exact' garante que o path de acesso tem que ser idêntico */}
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;

// **Sobre rotas**
// Para as rotas, será instala a biblioteca react-router-dom
// yarn add react-router-dom
// 
// esse pacote não foi feito em Typescrypt, por isso
// é preciso criar um pacote de terceiros da seguinte forma:
//yarn add @types/react-router-dom
//
//Depois de @types é que fica o nome da biblioteca